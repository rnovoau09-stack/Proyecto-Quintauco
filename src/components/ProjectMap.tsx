import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import JSZip from "jszip";
import * as toGeoJSON from "@tmcw/togeojson";
import "leaflet/dist/leaflet.css";

type Props = {
  kmzUrl?: string; // URL to the KMZ file, default to /Propuestas-Quintauco-Nov-25.kmz
  className?: string;
};

const ProjectMap: React.FC<Props> = ({
  kmzUrl = "/Propuestas-Quintauco-Nov-25.kmz",
  className = "h-[500px] w-full rounded-2xl overflow-hidden",
}) => {
  const [geojson, setGeojson] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadKmz = async () => {
      // Try a few sensible candidate URLs (handles common naming/typo issues)
      const candidates = [
        kmzUrl,
        "/Propuestas-Quintauco-Nov-25.kmz",
        "/Propuestas-Quintauco-Nov-25.kmz.kmz",
        "/Propuestas%20Quintauco%20Nov%2025.kmz",
      ].filter(Boolean) as string[];

      const errors: string[] = [];

      for (const url of candidates) {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            errors.push(`${url} -> HTTP ${res.status}`);
            continue;
          }

          const contentType = (
            res.headers.get("content-type") || ""
          ).toLowerCase();
          // If the server returned HTML (often index.html due to SPA fallback), give a helpful hint
          if (contentType.includes("text/html")) {
            errors.push(
              `${url} -> returned HTML (content-type: ${contentType})`,
            );
            continue;
          }

          const arrayBuffer = await res.arrayBuffer();

          // quick sanity: require > 200 bytes
          if (arrayBuffer.byteLength < 200) {
            errors.push(
              `${url} -> too small (${arrayBuffer.byteLength} bytes)`,
            );
            continue;
          }

          // Try to load as zip
          try {
            const zip = await JSZip.loadAsync(arrayBuffer);
            const kmlFileName = Object.keys(zip.files).find((name) =>
              name.toLowerCase().endsWith(".kml"),
            );
            if (!kmlFileName) {
              errors.push(`${url} -> no .kml file inside KMZ`);
              continue;
            }

            const kmlText = await zip.file(kmlFileName)!.async("text");
            const parser = new DOMParser();
            const kmlDoc = parser.parseFromString(kmlText, "application/xml");
            const gj = toGeoJSON.kml(kmlDoc as any);
            setGeojson(gj);
            return; // success
          } catch (zipErr) {
            console.warn("JSZip failed for", url, zipErr);
            errors.push(
              `${url} -> not a valid KMZ/zip (${(zipErr as Error).message || zipErr})`,
            );
            continue;
          }
        } catch (err) {
          console.error("Fetch error for", url, err);
          errors.push(
            `${url} -> fetch error: ${(err as Error).message || err}`,
          );
        }
      }

      // If we reach here, all candidates failed
      const detail = errors.join("; ");
      setError(
        `No se pudo cargar el KMZ. Intenté: ${candidates.join(", ")}. Errores: ${detail}.\nAsegúrate de que el archivo .kmz esté dentro de la carpeta /public y que su nombre sea 'Propuestas-Quintauco-Nov-25.kmz' (sin espacios ni doble extensión).`,
      );
    };

    loadKmz();
  }, [kmzUrl]);

  if (error) {
    return (
      <div className={`p-6 bg-card text-foreground rounded-2xl ${className}`}>
        Error cargando mapa: {error}
      </div>
    );
  }

  if (!geojson) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div>Cargando mapa...</div>
      </div>
    );
  }

  // Compute bounds from geojson
  const bounds: number[][] = [];
  try {
    const coordsCollector = (g: any) => {
      if (!g) return;
      if (g.type === "FeatureCollection") {
        g.features.forEach((f: any) => coordsCollector(f));
        return;
      }
      if (g.type === "Feature") g = g.geometry;
      if (!g) return;
      const addCoords = (c: any) => {
        if (typeof c[0] === "number")
          bounds.push([c[1], c[0]]); // lat, lng
        else c.forEach(addCoords);
      };
      addCoords(g.coordinates);
    };

    coordsCollector(geojson);
  } catch (e) {
    console.warn("Could not compute bounds", e);
  }

  const center = bounds.length
    ? ([bounds[0][0], bounds[0][1]] as [number, number])
    : ([-32.78, -71.53] as [number, number]);

  return (
    <div className={className}>
      <MapContainer center={center} zoom={14} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={geojson}
          style={{
            color: "#4CBFA5",
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.4,
          }}
        />
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
