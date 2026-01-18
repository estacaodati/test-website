import { useState } from 'react';
import { Menu, X, Instagram, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.header.portfolio, href: '#portfolio' },
    { name: t.header.about, href: '#about' },
    { name: t.header.contact, href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/13439617806?text=Ol%C3%A1%21%20Quero%20fazer%20contato.',
      label: 'WhatsApp',
      primary: true
    },
    { icon: Instagram, href: 'https://www.instagram.com/pardus.arch', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/andressa-salszbrun/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-display font-semibold text-primary">
            Pardus Arquitetura
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links & Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="mr-2 gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold">{language === 'pt' ? 'BR' : 'EN'}</span>
            </Button>

            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant={social.primary ? "warm" : "ghost"}
                  size="sm"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center text-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant={social.primary ? "warm" : "ghost"}
                    size="sm"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;