// Supabase Edge Function to send confirmation email via Resend
// Deno runtime

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

type RequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  const EMAIL_FROM = Deno.env.get("EMAIL_FROM") ?? "no-reply@example.com";
  const EMAIL_SUBJECT = Deno.env.get("EMAIL_SUBJECT") ?? "Confirmación de solicitud";

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const recipientEmail = (body.email ?? "").trim();
  const name = (body.name ?? "").trim();
  const inquiryMessage = (body.message ?? "").trim();

  if (!recipientEmail) {
    return new Response(JSON.stringify({ error: "Missing email" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const html = `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin: 0 0 12px;">Hola${name ? ` ${name}` : ""},</h2>
      <p style="margin: 0 0 12px;">¡Gracias por tu solicitud! Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
      ${inquiryMessage ? `<p style="margin: 0 0 12px;"><strong>Tu mensaje:</strong><br/>${inquiryMessage.replaceAll("\n", "<br/>")}</p>` : ""}
      <p style="margin: 16px 0 0;">Un saludo,<br/>Equipo Bike Park Pioneer</p>
    </div>
  `;

  const payload = {
    from: EMAIL_FROM,
    to: [recipientEmail],
    subject: EMAIL_SUBJECT,
    html,
  };

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ error: "Resend error", details: errText }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const data = await resp.json();
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Unexpected error", details: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});






