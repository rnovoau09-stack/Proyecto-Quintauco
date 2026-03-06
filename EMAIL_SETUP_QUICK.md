# 📧 Configuración Rápida del Sistema de Emails

## ¿Qué hace?

Cuando un usuario completa un formulario (contacto o "Solicitar Más Información"), el sistema:
1. ✅ Guarda los datos en la base de datos Supabase
2. ✅ Envía un correo electrónico a **info@quintauco.cl** con toda la información formateada

## 🚀 Configuración (5 minutos)

### 1. Crea una cuenta en EmailJS
- Ve a https://www.emailjs.com y regístrate (100% gratis para 200 emails/mes)

### 2. Configura tu servicio
- Conecta tu email (Gmail, Outlook, etc.)
- Copia el **Service ID**

### 3. Crea la plantilla
- Usa esta configuración:
  - **To:** info@quintauco.cl
  - **Subject:** `Nueva consulta de {{tipo_consulta}} - {{from_name}}`
  - **Content:** `{{{html_content}}}`
- Copia el **Template ID**

### 4. Obtén tu Public Key
- En Account → API Keys
- Copia el **Public Key**

### 5. Configura las variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### 6. ¡Listo! 🎉
Reinicia el servidor (`npm run dev`) y prueba los formularios.

## 📋 Información que se envía

Cada email incluye:
- 👤 Nombre completo del usuario
- 📧 Email del usuario
- 📱 Teléfono
- 🏢 Tipo de consulta (Inmobiliaria o Parque)
- 💬 Mensaje completo
- 📅 Fecha y hora (zona horaria Chile)

## 🎨 Diseño del Email

Los correos se envían con un diseño profesional que incluye:
- Header con gradiente morado
- Campos organizados con iconos
- Enlaces clicables para email y teléfono
- Diseño responsive (se ve bien en móvil y desktop)

## 🔍 Ver guía completa

Para instrucciones detalladas, consulta: **EMAILJS_SETUP.md**

## ⚠️ Importante para Producción

No olvides agregar las variables de entorno en tu plataforma de deployment (Netlify/Vercel):
- Settings → Environment Variables
- Agrega las 3 variables
- Redeploy el sitio
