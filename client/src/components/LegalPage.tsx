import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { config } from "@/config";
import type { LegalDocument } from "@/config/types";

export function interpolateLegal(text: string) {
  return text
    .replaceAll("{name}", config.brand.name)
    .replaceAll("{legalName}", config.brand.legalName)
    .replaceAll("{jurisdiction}", config.legal.jurisdiction)
    .replaceAll("{privacyEmail}", config.legal.privacyEmail)
    .replaceAll("{legalEmail}", config.legal.legalEmail);
}

export function formatLegalDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type LegalPageProps = {
  title: string;
  icon: ReactNode;
  document: LegalDocument;
  contactEmail: string;
};

export function LegalPage({ title, icon, document, contactEmail }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Last updated: {formatLegalDate(config.legal.lastUpdated)}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{interpolateLegal(document.intro)}</p>
            </CardContent>
          </Card>

          {document.sections.map((section, index) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>
                  {index + 1}. {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{interpolateLegal(paragraph)}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{interpolateLegal(bullet)}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have questions about this page, please contact:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p><strong>{config.brand.legalName}</strong></p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {contactEmail}
                  </a>
                </p>
                <p>Jurisdiction: {config.legal.jurisdiction}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
