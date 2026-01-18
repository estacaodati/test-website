import { useState } from 'react';
import { Award, Users, Clock, Target, User, Briefcase, GraduationCap, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const [activeView, setActiveView] = useState<'company' | 'person'>('company');
  const { t } = useLanguage();

  // Content for the Company View
  const companyContent = {
    title: t.about.company.title,
    description: t.about.company.description,
    stats: [
      { icon: Target, value: '50+', label: t.about.company.stats.projects },
      { icon: Users, value: '30+', label: t.about.company.stats.clients },
      { icon: Clock, value: '3+', label: t.about.company.stats.experience },
      { icon: Award, value: '10+', label: t.about.company.stats.awards },
    ],
    imageIcon: Award,
    imageTitle: t.about.company.imageTitle,
    imageSubtitle: t.about.company.imageSubtitle,
    floatingBadge: {
      title: t.about.company.badgeTitle,
      subtitle: t.about.company.badgeSubtitle
    }
  };

  // Content for the Person View (Andressa)
  const personContent = {
    title: t.about.person.title,
    description: t.about.person.description,
    stats: [
      { icon: GraduationCap, value: 'B.Arch', label: t.about.person.stats.education },
      { icon: Briefcase, value: 'Lead', label: t.about.person.stats.role },
      { icon: Building, value: 'Urban', label: t.about.person.stats.specialty },
      { icon: User, value: 'CEO', label: t.about.person.stats.founder },
    ],
    imageIcon: User,
    imageTitle: t.about.person.imageTitle,
    imageSubtitle: t.about.person.imageSubtitle,
    floatingBadge: {
      title: t.about.person.badgeTitle,
      subtitle: t.about.person.badgeSubtitle
    }
  };

  const currentContent = activeView === 'company' ? companyContent : personContent;

  const services = t.about.services.items;

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-muted p-1 rounded-full inline-flex relative shadow-inner">
            <div
              className={`absolute top-1 bottom-1 w-[160px] bg-white rounded-full shadow-sm transition-all duration-500 ease-in-out ${activeView === 'company' ? 'left-1' : 'left-[165px]'}`}
            />
            <button
              onClick={() => setActiveView('company')}
              className={`relative z-10 w-[160px] py-3 text-sm font-medium rounded-full transition-colors duration-500 ${activeView === 'company' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary/70'}`}
            >
              {t.about.toggleCompany}
            </button>
            <button
              onClick={() => setActiveView('person')}
              className={`relative z-10 w-[160px] py-3 text-sm font-medium rounded-full transition-colors duration-500 ${activeView === 'person' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary/70'}`}
            >
              {t.about.togglePerson}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Left Column - Image/Card with flip/transition effect */}
          <div className="order-2 lg:order-1 perspective-1000">
            <div className={`relative transition-all duration-700 transform ${activeView === 'company' ? 'rotate-0' : ''}`}>
              <div
                className={`w-full h-96 rounded-2xl shadow-medium flex items-center justify-center transition-all duration-700 
                  ${activeView === 'company' ? 'bg-gradient-to-br from-warm to-primary' : 'bg-gradient-to-bl from-primary to-warm'}`}
              >
                <div className="text-center text-white animate-fade-in-up">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-sm">
                    <currentContent.imageIcon className="w-12 h-12" />
                  </div>
                  <p className="text-xl font-display font-medium tracking-wide">{currentContent.imageTitle}</p>
                  <p className="text-sm opacity-90 font-light uppercase tracking-wider mt-1">{currentContent.imageSubtitle}</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-medium transition-transform duration-500 hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-display">{currentContent.floatingBadge.title}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{currentContent.floatingBadge.subtitle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content with fade effect */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="section-title transition-all duration-300">{currentContent.title}</h2>
              <div className="space-y-4 text-foreground text-lg leading-relaxed text-muted-foreground">
                {currentContent.description.map((paragraph, index) => (
                  <p key={index} className="transition-opacity duration-500">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentContent.stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/5">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary font-display mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Section - Always visible */}
        <div className="mt-24 pt-12 border-t border-border/10">
          <div className="text-center mb-12">
            <h3 className="section-title mb-4">{t.about.services.title}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="project-card hover:bg-card/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <h4 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;