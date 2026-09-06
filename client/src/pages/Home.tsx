import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { config } from "@/config";

export default function Home() {
    const { refs, scrollToSection } = useScrollToSection();

    return (
        <div className="min-h-screen">
            <Navigation scrollToSection={scrollToSection} />
            <Hero sectionRef={refs.home} scrollToSection={scrollToSection} />
            {config.services.enabled && <Services sectionRef={refs.services} />}
            {config.about.enabled && <About sectionRef={refs.about} />}
            {config.contact.enabled && <Contact sectionRef={refs.contact} />}
            <Footer scrollToSection={scrollToSection}/>
        </div>
    );
}
