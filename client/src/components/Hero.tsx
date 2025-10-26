import { Button } from "@/components/ui/button";
import { SectionId } from "@/hooks/useScrollToSection";
import { config } from "@/config";

type HeroProps = {
    scrollToSection: (section: SectionId) => void;
    sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Hero(props: HeroProps) {
    const { scrollToSection, sectionRef } = props;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden" ref={sectionRef}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
                role="img"
                aria-label={config.hero.ariaLabel}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                    {config.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
                    {config.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollToSection("contact")}
                        className="text-base btn-hover-modern-light"
                        data-testid="button-hero-consultation"
                    >
                        {config.hero.ctaButton}
                    </Button>
                </div>
            </div>
        </section>
    );
}
