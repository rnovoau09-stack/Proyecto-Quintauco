# Bike Park Pioneer

Este proyecto es una aplicación web para la gestión y promoción de un parque de bicicletas (Bike Park) llamado "Pioneer". Incluye funcionalidades como presentación de actividades, información de condominios, contacto, mapas, galería y más.

## Características principales
- Página principal con información del parque y actividades.
- Formulario de contacto integrado con EmailJS.
- Integración con Supabase para backend y almacenamiento.
- Galería de imágenes y mapas interactivos.
- Soporte para temas claro/oscuro y cambio de idioma (español/inglés).
- Componentes reutilizables y diseño responsivo usando Tailwind CSS.

## Estructura del proyecto
- `src/` - Código fuente principal.
  - `components/` - Componentes React reutilizables.
  - `contexts/` - Contextos globales (tema, idioma).
  - `hooks/` - Hooks personalizados.
  - `integrations/supabase/` - Configuración y tipos de Supabase.
  - `lib/` - Utilidades generales.
  - `pages/` - Páginas principales de la app.
  - `services/` - Servicios externos (ej. email).
  - `utils/` - Utilidades varias.
- `public/` - Archivos públicos y recursos estáticos.
- `supabase/` - Funciones y configuración de Supabase.

## Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd bike-park-pioneer-main
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno necesarias para Supabase y EmailJS (ver documentación interna).
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Dependencias principales
- React
- Vite
- Tailwind CSS
- Supabase
- EmailJS

## Despliegue
El proyecto está preparado para ser desplegado en Netlify u otras plataformas compatibles con Vite.

## Seguridad y buenas prácticas
- **No subas archivos con credenciales sensibles** (API keys, secretos, etc.) al repositorio público.
- Revisa que los archivos de configuración (como `.env`) estén en `.gitignore`.
- El código fuente actual parece seguro para subir a GitHub **siempre y cuando no incluyas archivos de configuración sensibles**.

## Licencia
[MIT](LICENSE)

---

### Contacto
Para dudas o soporte, contacta a los administradores del proyecto.
