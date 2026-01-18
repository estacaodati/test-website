import { Toaster } from "@/components/ui/sonner";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ContactDock from '@/components/ContactDock';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics />
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
      <Toaster />
    </div>
  );
};

export default Index;
