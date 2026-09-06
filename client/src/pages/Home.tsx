import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { config } from "@/config";

export default function Home() {
    const { getRef, scrollToSection } = useScrollToSection();

    return (
        <div className="min-h-screen">
            <Navigation scrollToSection={scrollToSection} />
            <Hero sectionRef={getRef("home")} scrollToSection={scrollToSection} />
            {config.services.enabled && <Services sectionRef={getRef("services")} />}
            {config.about.enabled && <About sectionRef={getRef("about")} />}
            {config.contact.enabled && <Contact sectionRef={getRef("contact")} />}
            <Footer scrollToSection={scrollToSection}/>
        </div>
    );
}
