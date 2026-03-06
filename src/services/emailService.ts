import emailjs from '@emailjs/browser';

// Configuración de EmailJS desde variables de entorno
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    tipo_consulta: 'inmobiliaria' | 'parque';
}

/**
 * Formatea los datos del formulario en HTML para el email
 */
const formatEmailHTML = (data: ContactFormData): string => {
    const tipoConsultaLabel = data.tipo_consulta === 'inmobiliaria'
        ? 'Consulta Inmobiliaria'
        : 'Consulta sobre el Parque';

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .field {
          background: white;
          margin-bottom: 20px;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: 600;
          color: #667eea;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
          word-wrap: break-word;
        }
        .badge {
          display: inline-block;
          padding: 6px 12px;
          background: #667eea;
          color: white;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          text-align: center;
          color: #666;
          font-size: 12px;
        }
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          white-space: pre-wrap;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📬 Nueva Consulta - Proyecto Quintauco</h1>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="field-label">Tipo de Consulta</div>
          <div class="field-value">
            <span class="badge">${tipoConsultaLabel}</span>
          </div>
        </div>

        <div class="field">
          <div class="field-label">👤 Nombre Completo</div>
          <div class="field-value">${data.name}</div>
        </div>

        <div class="field">
          <div class="field-label">📧 Correo Electrónico</div>
          <div class="field-value">
            <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
              ${data.email}
            </a>
          </div>
        </div>

        <div class="field">
          <div class="field-label">📱 Teléfono</div>
          <div class="field-value">
            <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">
              ${data.phone}
            </a>
          </div>
        </div>

        <div class="field">
          <div class="field-label">💬 Mensaje</div>
          <div class="message-box field-value">${data.message}</div>
        </div>

        <div class="footer">
          <p>Este correo fue enviado automáticamente desde el formulario de contacto de Proyecto Quintauco</p>
          <p>Fecha: ${new Date().toLocaleString('es-CL', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'America/Santiago'
    })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Envía un email usando EmailJS
 */
export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    try {
        const emailHTML = formatEmailHTML(data);

        const templateParams = {
            to_email: 'info@quintauco.cl',
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            tipo_consulta: data.tipo_consulta === 'inmobiliaria' ? 'Consulta Inmobiliaria' : 'Consulta sobre el Parque',
            message: data.message,
            html_content: emailHTML,
            reply_to: data.email
        };

        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );
    } catch (error) {
        console.error('Error al enviar el email:', error);
        throw error;
    }
};

/**
 * Inicializa EmailJS con la clave pública
 */
export const initEmailJS = (): void => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
};
