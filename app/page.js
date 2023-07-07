import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProyectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main className="bg-[#100940]">
      <HeroSection />
      <AboutSection />
      <ProyectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
