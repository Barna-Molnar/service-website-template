import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { config } from "@/config";

type ContactProps = {
  sectionRef: React.RefObject<HTMLDivElement>;
};

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export default function Contact(props: ContactProps) {
  const { sectionRef } = props;
  const { contact } = config;
  const callHref = telHref(contact.phone);
  const emailHref = `mailto:${contact.email}`;

  return (
    <section id="contact" className="py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6 min-w-0">
            <Card className="card-hover-modern">
              <CardHeader>
                <CardTitle className="text-2xl">{contact.title}</CardTitle>
                <p className="text-muted-foreground">
                  {contact.subtitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-lg mb-2">Phone</div>
                    <a
                      href={callHref}
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium break-words"
                      data-testid="link-phone"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-lg mb-2">Email</div>
                    <a
                      href={emailHref}
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium break-words"
                      data-testid="link-email"
                    >
                      {contact.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We usually reply within one business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-lg mb-2">Location</div>
                    <div className="text-foreground text-lg">{contact.location}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {contact.serviceArea}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-lg mb-2">Business Hours</div>
                    <div className="text-foreground">
                      {contact.hours.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {contact.actions.map((action) => {
                const href = action.type === "phone" ? callHref : emailHref;
                const Icon = action.type === "phone" ? Phone : Mail;

                return (
                  <Button
                    key={action.type}
                    asChild
                    size="lg"
                    variant={action.type === "email" ? "outline" : "default"}
                    className="w-full sm:flex-1 btn-hover-modern"
                  >
                    <a
                      href={href}
                      data-testid={action.type === "phone" ? "button-call-now" : "button-email-us"}
                    >
                      <Icon className="mr-2 h-5 w-5 icon-hover-modern" />
                      {action.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 min-w-0">
            {contact.highlight.enabled && (
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">{contact.highlight.title}</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    {contact.highlight.description}
                  </p>
                  <Button asChild variant="secondary" size="lg" className="w-full btn-hover-modern">
                    <a href={callHref}>
                      <Phone className="mr-2 h-5 w-5 icon-hover-modern" />
                      {contact.highlight.ctaLabel}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card className="card-hover-modern">
              <CardHeader>
                <CardTitle className="text-lg">{contact.whyChooseUs.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contact.whyChooseUs.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
