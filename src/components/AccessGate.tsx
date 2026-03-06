import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AccessGateProps = {
  enabled?: boolean;
  correctPassword?: string;
  storageKey?: string;
  logoSrc?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

/**
 * Temporary password gate for staging/preview.
 * Remove by deleting this file and its usage in App.tsx when the site is ready.
 */
export default function AccessGate({
  enabled = true,
  correctPassword = import.meta.env.VITE_PREVIEW_PASSWORD ?? "",
  storageKey = "access.gate.unlocked",
  logoSrc = "/mountain.svg",
  title,
  subtitle,
  children,
}: AccessGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const isActive = enabled && Boolean(correctPassword);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved === "true") setUnlocked(true);
    } catch { /* ignore */ }
  }, [storageKey]);

  useEffect(() => {
    if (!isActive) return;
    if (unlocked) {
      try {
        sessionStorage.setItem(storageKey, "true");
      } catch { /* ignore */ }
    }
  }, [isActive, storageKey, unlocked]);

  const canSubmit = useMemo(() => password.trim().length > 0, [password]);

  if (!isActive) return <>{children}</>;
  if (unlocked) return <>{children}</>;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password === correctPassword) {
      setUnlocked(true);
      try {
        sessionStorage.setItem(storageKey, "true");
      } catch { /* ignore */ }
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 p-4">
      <Card className="w-full max-w-sm border-neutral-800 bg-neutral-900/50 backdrop-blur">
        <CardHeader>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Logo"
              className="mx-auto mb-3 h-28 w-auto md:h-36 lg:h-44 object-contain"
            />
          ) : null}

          <CardTitle className="text-white text-center">{title || "Acceso"}</CardTitle>
          <CardDescription className="text-center">{subtitle || "Ingresa la contraseña para continuar."}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-3">
            <Input
              type="password"
              autoFocus
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : null}
            <Button type="submit" className="w-full" disabled={!canSubmit}>
              Entrar
            </Button>
            <p className="text-xs text-center text-neutral-500 mt-4">
              Esta pantalla es temporal y se eliminará al lanzar el sitio.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
