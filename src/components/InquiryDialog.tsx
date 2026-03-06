import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "./ui/dialog";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

type InquiryDialogProps = {
  trigger: React.ReactNode;
};

const InquiryDialog = ({ trigger }: InquiryDialogProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>{trigger}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('inquiry.title')}</DialogTitle>
          <DialogDescription>
            {t('inquiry.description')}
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDialog;


