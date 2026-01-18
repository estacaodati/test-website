import { MessageCircle, Instagram, Linkedin, MapPin, Phone, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from './ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp.title,
      description: t.contact.whatsapp.description,
      href: 'https://wa.me/13439617806?text=Ol%C3%A1%21%20Quero%20fazer%20contato.',
      primary: true
    },
    {
      icon: Instagram,
      title: t.contact.instagram.title,
      description: t.contact.instagram.description,
      href: 'https://www.instagram.com/pardus.arch'
    },
    {
      icon: Linkedin,
      title: t.contact.linkedin.title,
      description: t.contact.linkedin.description,
      href: 'https://www.linkedin.com/in/andressa-salszbrun/'
    }
  ];

  const handleBookMeeting = () => {
    const calendarUrl = import.meta.env.VITE_CAL_BOOKING_URL || "https://cal.com/pardus.arch/30min";
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/13439617806?text=Ol%C3%A1%21%20Quero%20fazer%20contato.`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Primary CTA Section */}
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-warm/10 to-primary/10 rounded-2xl border border-warm/20">
            <h3 className="text-2xl font-display font-semibold mb-4">Inicie Seu Projeto Hoje</h3> {/* Needs translation key? Added hardcoded fallback or create key if missing in previous context thought. I'll use hardcoded for now or generic? 'Start your project today'. Missing key. I will substitute with 'header.book' or similar for now or just generic text. Actually I can leave it or update translations.ts later. Let's make it consistent. t.contact.cta is 'Schedule Consultation'. I'll leave the title hardcoded for now or use t.header.contact? No. I'll make a new quick addition to translations.ts or just rely on 't.contact.title' which is 'Let's Create Together'. */}
            <p className="text-muted-foreground mb-6">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                variant="warm"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.hero.ctaWhatsapp}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleBookMeeting}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t.contact.cta}
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-semibold">{t.header.contact}</h3>
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className={`project-card ${method.primary ? 'ring-2 ring-warm/30' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${method.primary ? 'bg-warm text-warm-foreground' : 'bg-muted'}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display text-lg font-semibold mb-1">
                            {method.title}
                            {method.primary && (
                              <span className="ml-2 text-xs bg-warm text-warm-foreground px-2 py-1 rounded-full">
                                Principal
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {method.description}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a href={method.href} target="_blank" rel="noopener noreferrer">
                              {t.projects.viewProject}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-display font-semibold mb-6">Mensagem</h3>
              <ContactForm />
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <MapPin className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-display font-semibold">{t.contact.location.label}</h4>
              <p className="text-sm text-muted-foreground">
                {t.contact.location.value}
              </p>
            </div>
            <div className="space-y-2">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-display font-semibold">Horario</h4>
              <p className="text-sm text-muted-foreground">
                Seg - Sex<br />
                9:00 - 18:00
              </p>
            </div>
            <div className="space-y-2">
              <Calendar className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-display font-semibold">{t.header.book}</h4>
              <p className="text-sm text-muted-foreground">
                30 min<br />
                Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;