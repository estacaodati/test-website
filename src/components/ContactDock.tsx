import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactDock = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/5511999999999?text=Olá%20Andressa,%20gostaria%20de%20conversar%20sobre%20um%20projeto%20arquitetônico',
      label: 'WhatsApp',
      primary: true
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/andressaarch',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/andressa-Salszbrun',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: '#contact',
      label: 'Email'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="glass-effect rounded-full p-2 shadow-strong">
        <div className="flex flex-col space-y-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                size="sm"
                variant={social.primary ? "warm" : "ghost"}
                className={`w-12 h-12 rounded-full p-0 ${social.primary ? 'shadow-medium' : 'hover:bg-muted'}`}
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactDock;