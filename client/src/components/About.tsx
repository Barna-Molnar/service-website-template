import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { config } from "@/config";

type AboutProps = {
  sectionRef: React.RefObject<HTMLDivElement>;
}
export default function About(props: AboutProps) {
  const { sectionRef } = props;
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {config.about.title}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground/90">
              {config.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  {config.about.credentialsLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.about.credentials.map((credential) => (
                    <Badge key={credential.text} variant="secondary" className="px-3 py-1">
                      {credential.text}
                    </Badge>
                  ))}
                </div>
              </div>

              <Card className="p-6 card-hover-modern-light">
                <div className="flex items-baseline gap-4 flex-wrap">
                  {config.about.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={index > 0 ? "border-l border-border pl-4" : undefined}
                    >
                      <div className="text-4xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src={config.about.image}
              alt={config.about.imageAlt}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
