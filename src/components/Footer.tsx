import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold text-primary">
              Pardus Arquitetura
            </h3>
            <p className="text-muted-foreground">
              {t.about.company.description[0]}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.quickLinks}</h4>
            <nav className="space-y-2">
              <a href="#portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.header.portfolio}
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.header.about}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.header.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.header.contact}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">{t.contact.location.value}</p>
              <a
                href={`mailto:${t.contact.email.value}`}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t.contact.email.value}
              </a>
              <a
                href="https://wa.me/13439617806?text=Ol%C3%A1%21%20Quero%20fazer%20contato."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp: +1 343 961-7806
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Copyright © {currentYear} Pardus Arquitetura
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;