import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type InquiryDialogProps = {
  trigger: React.ReactNode;
};

const InquiryDialog = ({ trigger }: InquiryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("contact_requests")
        .insert({ name, email, message });

      if (error) throw error;

      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
      // Resetear el formulario usando ref, antes de cerrar el diálogo
      formRef.current?.reset();
      setOpen(false);
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "Error desconocido";
      toast.error(`No se pudo enviar la solicitud: ${messageText}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>{trigger}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Solicitar Más Información</DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="tu@correo.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Información solicitada</Label>
            <Textarea id="message" name="message" placeholder="Cuéntanos qué información necesitas" required />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDialog;


