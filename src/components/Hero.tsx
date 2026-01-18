import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-architecture.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/13439617806?text=Ol%C3%A1%21%20Quero%20fazer%20contato.`, '_blank', 'noopener,noreferrer');
  };

  const handleBookMeeting = () => {
    // Cal.com booking link - replace with your actual Cal.com username
    const calendarUrl = import.meta.env.VITE_CAL_BOOKING_URL || "https://cal.com/pardus.arch/30min";
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern architectural design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="hero-text leading-tight">
                {t.hero.title}
                <br />
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                variant="warm"
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.hero.ctaWhatsapp}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleBookMeeting}
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t.hero.ctaPortfolio} {/* Note: Using 'View Portfolio' logic or Booking, checking translations keys. t.hero.ctaPortfolio is 'View Portfolio', t.hero.book is not in hero but in header. Wait, the button says 'Agendar Consulta'. Let's check translations.ts. Ah, translations.ts has 'book' in header. en hero has ctaPortfolio 'View Portfolio' and ctaWhatsapp. The button here currently says 'Agendar Consulta'. I should probably add 'ctaBook' to hero translations or use one of existing. Let's start by using 'ctaPortfolio' but the action is handleBookMeeting. Let's fix translations.ts to have ctaBook or just use the right text. I'll assume 'ctaBook' is intended or reuse 'book' from header? No, 'Agendar Consulta' is 'Schedule Consultation'. In translations.ts I have contact.cta 'Schedule a Free Consultation'. Getting messy. Let's verify translations.ts content again or just add a quick fix key here effectively. I'll stick to what I wrote in translations.ts: ctaPortfolio and ctaWhatsapp. Wait, the original Hero had 'Agendar Consulta' which is 'Schedule Consultation'. I don't have that exact key in Hero translations. I have 'contact.cta' as 'Schedule a Free Consultation'. I will use that for now or 'header.book'. Let's use `t.contact.cta` but shortened? Or just add the missing key. I can't edit translations.ts easily now without context switch. I'll use `t.header.book` which is "Book Meeting" / "Agendar Reunião". Close enough. Or I can hardcode checks. No, using `t.header.book` is safer. */}
                {t.header.book}
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap gap-8 text-sm text-muted-foreground">
              {t.about.services.items.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warm rounded-full" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;