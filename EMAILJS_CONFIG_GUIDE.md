# 📧 Configuración Completa de EmailJS para Quintauco

## ✅ Estado Actual

- ✅ Public Key configurada: `Y8FVsuDNwVXQ6vg2n`
- ✅ Plantilla HTML creada: `emailjs-template.html`
- ✅ Archivo `.env` creado
- ⚠️ Falta: Service ID y Template ID

---

## 🚀 Pasos para Completar la Configuración

### 1️⃣ Crear un Servicio de Email en EmailJS

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click en **"Email Services"** en el menú lateral
3. Click en **"Add New Service"**
4. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
5. Sigue las instrucciones para conectar tu cuenta
6. **Copia el Service ID** que se genera (ejemplo: `service_abc123`)

### 2️⃣ Crear una Plantilla de Email

1. En el dashboard de EmailJS, ve a **"Email Templates"**
2. Click en **"Create New Template"**
3. Dale un nombre: **"Quintauco Contact Form"**
4. **Pega el contenido** del archivo `emailjs-template.html` en el editor
5. Configura los siguientes campos:

#### Configuración de la Plantilla:

**To Email:**
```
info@quintauco.cl
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{reply_to}}
```

**Subject:**
```
Nueva Consulta - {{tipo_consulta}} - Quintauco
```

**Content (HTML):**
```html
[Pega aquí todo el contenido de emailjs-template.html]
```

6. Click en **"Save"**
7. **Copia el Template ID** (ejemplo: `template_xyz789`)

### 3️⃣ Actualizar el archivo .env

Abre el archivo `.env` y reemplaza los valores:

```env
VITE_EMAILJS_PUBLIC_KEY=Y8FVsuDNwVXQ6vg2n
VITE_EMAILJS_SERVICE_ID=service_abc123    # ← Reemplaza con tu Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz789  # ← Reemplaza con tu Template ID
```

### 4️⃣ Reiniciar el Servidor de Desarrollo

Después de actualizar el `.env`, reinicia tu servidor:

```bash
# Detén el servidor (Ctrl + C)
# Luego reinicia:
npm run dev
```

---

## 🧪 Probar la Configuración

### Opción 1: Desde tu Aplicación
1. Abre tu aplicación en el navegador
2. Ve a la sección de **Contacto**
3. Llena el formulario con datos de prueba
4. Envía el formulario
5. Verifica que llegue el email a `info@quintauco.cl`

### Opción 2: Desde EmailJS Dashboard
1. Ve a tu plantilla en EmailJS
2. Click en **"Test it"**
3. Llena los campos de prueba
4. Envía el email de prueba

---

## 📋 Variables que Usa la Plantilla

Tu plantilla HTML usa estas variables de EmailJS:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `{{from_name}}` | Nombre del contacto | Juan Pérez |
| `{{reply_to}}` | Email del contacto | juan@example.com |
| `{{phone}}` | Teléfono del contacto | +56 9 1234 5678 |
| `{{message}}` | Mensaje del contacto | Hola, me interesa... |
| `{{tipo_consulta}}` | Tipo de consulta | Consulta Inmobiliaria |

---

## 🎨 Personalizar la Plantilla HTML

Si quieres cambiar los colores de la plantilla para que coincidan mejor con tu marca:

### Colores Actuales:
- **Verde Principal**: `#2c5f2d`
- **Verde Claro**: `#97bc62`
- **Fondo**: `#f8f9fa`

### Para Cambiar:
1. Abre `emailjs-template.html`
2. Busca y reemplaza los códigos de color
3. Guarda el archivo
4. Vuelve a pegar el contenido en EmailJS

---

## ⚠️ Solución de Problemas

### Error: "Public key is required"
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Reinicia el servidor de desarrollo

### Error: "Service ID not found"
- Verifica que el Service ID en `.env` sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Template not found"
- Verifica que el Template ID en `.env` sea correcto
- Asegúrate de que la plantilla esté guardada en EmailJS

### El email no llega
- Revisa la carpeta de spam
- Verifica que `info@quintauco.cl` sea correcto
- Revisa los logs en EmailJS Dashboard → Email Logs

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la [documentación oficial de EmailJS](https://www.emailjs.com/docs/)
2. Verifica los logs en el dashboard de EmailJS
3. Revisa la consola del navegador para errores

---

## ✨ Próximos Pasos

Una vez que todo funcione:
- [ ] Probar con diferentes tipos de consultas (Inmobiliaria / Parque)
- [ ] Verificar que los emails lleguen correctamente
- [ ] Personalizar más la plantilla si es necesario
- [ ] Configurar respuestas automáticas (opcional)
