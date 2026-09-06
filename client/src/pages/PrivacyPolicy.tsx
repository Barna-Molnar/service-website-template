import { Shield } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { config } from "@/config";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      icon={<Shield className="h-8 w-8 text-primary" />}
      document={config.legal.privacy}
      contactEmail={config.legal.privacyEmail}
    />
  );
}
