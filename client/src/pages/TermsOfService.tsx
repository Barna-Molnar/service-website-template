import { FileText } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { config } from "@/config";

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      icon={<FileText className="h-8 w-8 text-primary" />}
      document={config.legal.terms}
      contactEmail={config.legal.legalEmail}
    />
  );
}
