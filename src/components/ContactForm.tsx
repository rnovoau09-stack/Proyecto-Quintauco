import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendContactEmail, type ContactFormData } from "@/services/emailService";

type ContactFormProps = {
  className?: string;
  onSuccess?: () => void;
};

const ContactForm = ({ className = "", onSuccess }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const tipo_consulta = formData.get("tipo_consulta") === "inmobiliaria" ? "inmobiliaria" : "parque";

    if (!name || !email || !phone || !message) {
      toast.error(t('contact.form.validation'));
      return;
    }

    setLoading(true);
    try {
      // Preparar datos para enviar
      const contactData: ContactFormData = {
        name,
        email,
        phone,
        message,
        tipo_consulta
      };

      // Enviar email y guardar en Supabase en paralelo
      const [emailResult, dbResult] = await Promise.allSettled([
        sendContactEmail(contactData),
        supabase.from("solicitudes").insert({ name, email, phone, message, tipo_consulta })
      ]);

      // Verificar resultados
      const emailSuccess = emailResult.status === 'fulfilled';
      const dbSuccess = dbResult.status === 'fulfilled' && !dbResult.value.error;

      if (!emailSuccess && !dbSuccess) {
        // Ambos fallaron
        const emailError = emailResult.status === 'rejected' ? emailResult.reason : '';
        const dbError = dbResult.status === 'fulfilled' && dbResult.value.error ? dbResult.value.error.message : '';
        throw new Error(`Error al enviar: ${emailError || dbError}`);
      } else if (!emailSuccess) {
        // Solo falló el email
        toast.warning(t('contact.form.success') + ' (El correo no pudo enviarse, pero tu mensaje fue guardado)');
      } else if (!dbSuccess) {
        // Solo falló la base de datos
        toast.warning(t('contact.form.success') + ' (El correo fue enviado correctamente)');
      } else {
        // Ambos tuvieron éxito
        toast.success(t('contact.form.success'));
      }

      // Limpiar formulario
      if (formRef.current) {
        formRef.current.reset();
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "Error desconocido";
      toast.error(`${t('contact.form.error')}: ${messageText}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nombre">{t('contact.form.name')}</Label>
          <Input id="nombre" name="name" placeholder={t('contact.form.namePlaceholder')} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">{t('contact.form.phone')}</Label>
          <Input id="telefono" name="phone" placeholder={t('contact.form.phonePlaceholder')} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t('contact.form.email')}</Label>
        <Input id="email" name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} required />
      </div>

      <div className="space-y-2">
        <Label>{t('contact.form.type')}</Label>
        <RadioGroup defaultValue="parque" name="tipo_consulta" className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="inmobiliaria" id="inmobiliaria" />
            <Label htmlFor="inmobiliaria">{t('contact.form.typeRealEstate')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="parque" id="parque" />
            <Label htmlFor="parque">{t('contact.form.typePark')}</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">{t('contact.form.message')}</Label>
        <Textarea
          id="mensaje"
          name="message"
          placeholder={t('contact.form.messagePlaceholder')}
          className="min-h-[120px]"
          required
        />
      </div>

      <Button className="w-full" size="lg" type="submit" disabled={loading}>
        {loading ? t('contact.form.sending') : t('contact.form.submit')}
      </Button>
    </form>
  );
};

export default ContactForm;