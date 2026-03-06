# Configuración de EmailJS para Proyecto Quintauco

Este documento explica cómo configurar EmailJS para que los formularios envíen correos a info@quintauco.cl.

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Confirma tu email

## Paso 2: Conectar tu servicio de email

1. Una vez dentro, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
   - Si usas Gmail, tendrás que habilitar "Aplicaciones menos seguras" o crear una contraseña de aplicación
5. Una vez conectado, copia el **Service ID** (lo necesitarás más adelante)

## Paso 3: Crear la plantilla de email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con los siguientes campos:

### Configuración de la plantilla:

**From name:** `{{from_name}}`

**From email:** `{{from_email}}`

**To email:** `info@quintauco.cl`

**Subject:** `Nueva consulta de {{tipo_consulta}} - {{from_name}}`

**Reply to:** `{{reply_to}}`

**Content (HTML):**
```html
{{{html_content}}}
```

4. Guarda la plantilla y copia el **Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a **"Account"** en el menú lateral
2. Encuentra la sección **"API Keys"**
3. Copia tu **Public Key**

## Paso 5: Configurar las variables de entorno

1. En la raíz del proyecto, crea un archivo llamado `.env` (si no existe)
2. Agrega las siguientes líneas con tus credenciales:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

3. Reemplaza los valores con los que copiaste en los pasos anteriores

## Paso 6: Probar el envío de emails

1. Asegúrate de que el servidor de desarrollo esté corriendo:
```bash
npm run dev
```

2. Navega al formulario de contacto en tu aplicación
3. Completa el formulario con datos de prueba
4. Envía el formulario
5. Verifica que el email llegue a info@quintauco.cl

## Paso 7: Configurar para producción

### Para Netlify:

1. Ve a tu sitio en Netlify
2. Navega a **Site settings** > **Environment variables**
3. Agrega las tres variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Haz un nuevo deploy

### Para Vercel:

1. Ve a tu proyecto en Vercel
2. Navega a **Settings** > **Environment Variables**
3. Agrega las tres variables
4. Haz un nuevo deploy

## Notas importantes

- **Plan gratuito de EmailJS:** Permite hasta 200 emails por mes
- Si necesitas enviar más emails, considera actualizar al plan Pro
- Los emails pueden tardar unos segundos en llegar
- Verifica la carpeta de spam si no recibes los emails

## Formato del email

Los correos se enviarán con el siguiente formato:

- **Header:** Gradiente morado con el título "Nueva Consulta - Proyecto Quintauco"
- **Tipo de consulta:** Badge indicando si es "Consulta Inmobiliaria" o "Consulta sobre el Parque"
- **Datos del usuario:** Nombre, email y teléfono formateados con iconos
- **Mensaje:** El contenido completo del mensaje del usuario
- **Footer:** Fecha y hora del envío en zona horaria de Chile

## Solución de problemas

### Los emails no se envían

1. Verifica que las variables de entorno estén correctamente configuradas
2. Revisa la consola del navegador para ver errores
3. Verifica que tu servicio de email esté correctamente conectado en EmailJS
4. Asegúrate de estar dentro del límite de 200 emails por mes

### Los emails llegan a spam

1. En EmailJS, verifica que el dominio esté correctamente configurado
2. Considera agregar registros SPF y DKIM en tu DNS
3. Usa un email profesional del mismo dominio como remitente

### Error de CORS

1. Asegúrate de estar usando la última versión de @emailjs/browser
2. Verifica que tu Public Key esté correctamente configurada

## Soporte

Si tienes problemas, consulta:
- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [FAQ de EmailJS](https://www.emailjs.com/docs/faq/)
