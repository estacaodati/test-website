import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import BeforeAfter from './BeforeAfter';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  year: string;
  location: string;
  categories: string[];
  cover: string;
  images: string[];
  description: string;
  beforeAfter?: {
    render: string;
    real: string;
  };
  featured?: boolean;
}

const ProjectGrid = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const filters = [
    t.projects.filters.all,
    t.projects.filters.professional,
    t.projects.filters.residential,
    t.projects.filters.interiors,
    t.projects.filters.commercial,
    t.projects.filters.urbanism,
    t.projects.filters.industrial,
    t.projects.filters.leisure,
    t.projects.filters.health,
    t.projects.filters.competitions
  ];

  // Helper for bilingual content
  const isPt = language === 'pt';

  const projects: Project[] = [
    {
      id: 'oasis-del-aire',
      title: 'Oasis del Aire - Concurso de Arquitetura Concentrico',
      year: '2024',
      location: isPt ? 'Espanha' : 'Spain',
      categories: [t.projects.filters.professional, t.projects.filters.competitions],
      cover: '/projects/21.jpg',
      images: ['/projects/21.jpg', '/projects/22.jpg', '/projects/23.jpg', '/projects/24.jpg'],
      description: isPt
        ? 'Oasis del Aire - A proposta consiste em módulos em formato de árvore para criar oásis urbanos em áreas impactadas pelo aquecimento global. Com uma estrutura metálica leve e cobertura em lona tensionada, os módulos filtram a luz solar e reduzem o calor através de musgos e vaporização programada de água. Ajustáveis à altura dos edifícios locais, estes módulos formam uma malha harmoniosa, integrando-se ao paisagismo e equilibrando a umidade do ar enquanto armazenam água da chuva.'
        : 'Oasis del Aire - The proposal consists of tree-shaped modules to create urban oases in areas impacted by global warming. With a lightweight metal structure and tensioned canvas covering, the modules filter sunlight and reduce heat through mosses and programmed water vaporization. Adjustable to the height of local buildings, these modules form a harmonious mesh, integrating with the landscaping and balancing air humidity while harvesting rainwater.',
      featured: true
    },
    {
      id: 'ecoparque-neighborhoods',
      title: isPt ? 'Bairros Integrados Ecoparque' : 'Ecoparque Integrated Neighborhoods',
      year: '2024',
      location: isPt ? 'Cascavel, Brasil' : 'Cascavel, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.competitions, t.projects.filters.urbanism],
      cover: '/projects/25.jpg',
      images: ['/projects/25.jpg', '/projects/26.jpg', '/projects/27.jpg', '/projects/28.jpg', '/projects/29.jpg'],
      description: isPt
        ? 'O Ecoparque é um projeto de loteamento sustentável em Cascavel, Paraná, parte dos Bairros Integrados Ecoparque. Com foco na sustentabilidade, o projeto integra soluções inovadoras em planejamento urbano e construção, como a primeira fábrica de edifícios automatizada do Brasil. Além disso, oferece infraestrutura eficiente, áreas verdes, espaços de lazer e opções de moradia sustentável. O Ecoparque visa criar comunidades autossuficientes, equilibrando o desenvolvimento urbano com a preservação ambiental.'
        : 'Ecoparque is a sustainable subdivision project in Cascavel, Paraná, part of the Ecoparque Integrated Neighborhoods. Focusing on sustainability, the project integrates innovative solutions in urban planning and construction, such as Brazil\'s first automated building factory. Furthermore, it offers efficient infrastructure, green areas, leisure spaces, and sustainable housing options. Ecoparque aims to create self-sufficient communities, balancing urban development with environmental preservation.',
      featured: true
    },
    {
      id: 'ecoparque-residential',
      title: isPt ? 'Residencial Ecoparque' : 'Ecoparque Residential',
      year: '2024',
      location: isPt ? 'Cascavel, Brasil' : 'Cascavel, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.residential],
      cover: '/projects/30.jpg',
      images: ['/projects/30.jpg', '/projects/31.jpg', '/projects/32.jpg', '/projects/33.jpg', '/projects/34.jpg'],
      description: isPt
        ? 'O Ecoparque oferece apartamentos de 2 e 3 quartos, com opções de suíte, todos projetados para proporcionar conforto e funcionalidade. Além disso, todas as unidades são entregues já mobiliadas, com armários embutidos e cozinha planejada, prontos para morar. Este projeto será localizado em Cascavel, Brasil. Os ambientes são bem distribuídos, com excelente ventilação natural e privacidade garantida pela distância de 50 metros entre os edifícios.'
        : 'Ecoparque offers 2 and 3-bedroom apartments, with suite options, all designed to provide comfort and functionality. Additionally, all units are delivered fully furnished, with built-in wardrobes and custom kitchens, ready to move in. This project will be located in Cascavel, Brazil. The environments are well distributed, with excellent natural ventilation and privacy guaranteed by the 50-meter distance between buildings.',
    },
    {
      id: 'ecoparque-recreation',
      title: isPt ? 'Áreas de Lazer Ecoparque' : 'Ecoparque Recreation Areas',
      year: '2024',
      location: isPt ? 'Cascavel, Brasil' : 'Cascavel, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.leisure],
      cover: '/projects/35.jpg',
      images: ['/projects/35.jpg', '/projects/36.jpg', '/projects/37.jpg', '/projects/38.jpg'],
      description: isPt
        ? 'O Ecoparque oferece uma infraestrutura completa para lazer, convivência e bem-estar. Os moradores podem desfrutar de uma academia moderna e equipada, ideal para manter uma rotina saudável sem sair de casa. Para momentos de celebração, o empreendimento conta com espaço gourmet e salão de festas. Além disso, os quiosques disponíveis nas áreas externas proporcionam espaços aconchegantes para churrascos e encontros ao ar livre, integrando lazer e contato com a natureza.'
        : 'Ecoparque offers complete infrastructure for leisure, socializing, and well-being. Residents can enjoy a modern and equipped gym, ideal for maintaining a healthy routine without leaving home. For moments of celebration, the development has a gourmet space and party room. Furthermore, the kiosks available in the outdoor areas provide cozy spaces for barbecues and outdoor gatherings, integrating leisure with nature.',
    },
    {
      id: 'fernanda-fontanela',
      title: isPt ? 'Consultório Nutricionista Fernanda Fontanela' : 'Nutritionist Fernanda Fontanela Clinic',
      year: '2024',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.interiors, t.projects.filters.commercial],
      cover: '/projects/39.jpg',
      images: ['/projects/39.jpg', '/projects/40.jpg', '/projects/41.jpg'],
      description: isPt
        ? 'O design de interiores da Clínica Nutri Fernanda Fontanela foi desenvolvido com o objetivo de criar um ambiente acolhedor e funcional que reflita os valores de cuidado e bem-estar da clínica. O layout dos espaços foi otimizado para garantir conforto, com atenção à iluminação natural e ventilação, criando uma atmosfera calma e moderna. Cada detalhe foi pensado para proporcionar uma experiência agradável aos pacientes, garantindo que o ambiente se alinhe perfeitamente aos serviços de nutrição personalizados oferecidos.'
        : 'The interior design of Nutri Fernanda Fontanela Clinic was developed with the aim of creating a welcoming and functional environment that reflects the clinic\'s values of care and well-being. The layout of the spaces was optimized to ensure comfort, with attention to natural lighting and ventilation, creating a calm and modern atmosphere. Every detail was thought out to provide a pleasant experience for patients, ensuring that the environment aligns perfectly with the personalized nutrition services offered.',
    },
    {
      id: 'ecoparque-factory',
      title: isPt ? 'Fábrica de Pré-moldados Ecoparque' : 'Ecoparque Precast Factory',
      year: '2023',
      location: isPt ? 'Cascavel, Brasil' : 'Cascavel, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.industrial],
      cover: '/projects/43.jpg',
      images: ['/projects/43.jpg', '/projects/44.jpg', '/projects/45.jpg'],
      description: isPt
        ? 'O programa arquitetônico inclui área de trabalho e equipamentos industriais, área administrativa com mais de 1000 metros quadrados, pátio de estocagem de peças, galpão de expansão industrial, recepção, espaço de descanso para caminhoneiros, galpão de manutenção de caminhões e esteiras, e armazenamento de agregados.'
        : 'The architectural program includes a workspace and industrial equipment, an administrative area of over 1000 square meters, a parts storage yard, an industrial expansion warehouse, reception, a rest area for truck drivers, a truck and conveyor belt maintenance warehouse, and aggregate storage.',
    },
    {
      id: 'amable-clinic',
      title: isPt ? 'Clínica Amable' : 'Amable Clinic',
      year: '2023',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.interiors, t.projects.filters.health],
      cover: '/projects/46.jpg',
      images: ['/projects/46.jpg', '/projects/47.jpg', '/projects/48.jpg', '/projects/49.jpg', '/projects/50.jpg'],
      description: isPt
        ? 'A Clínica Amable foi projetada para combinar funcionalidade, conforto e modernidade em um espaço dedicado à saúde e bem-estar. O projeto prioriza a harmonia entre estética e eficiência, criando um ambiente acolhedor tanto para pacientes quanto para profissionais. Os interiores foram pensados para oferecer conforto e acessibilidade, com espaços bem distribuídos que garantem fluidez e praticidade no atendimento.'
        : 'Amable Clinic was designed to combine functionality, comfort, and modernity in a space dedicated to health and well-being. The project prioritizes the harmony between aesthetics and efficiency, creating a welcoming environment for both patients and professionals. The interiors were designed to offer comfort and accessibility, with well-distributed spaces that ensure fluidity and practicality in service.',
    },
    {
      id: 'apartment-jc',
      title: 'Apartamento JC.',
      year: '2022',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.interiors, t.projects.filters.residential],
      cover: '/projects/51.jpg',
      images: ['/projects/51.jpg', '/projects/52.jpg', '/projects/53.jpg', '/projects/54.jpg', '/projects/55.jpg', '/projects/56.jpg', '/projects/57.jpg', '/projects/58.jpg', '/projects/59.jpg'],
      description: isPt
        ? 'Este projeto de design de interiores foi desenvolvido para um apartamento pequeno, atendendo aos desejos do cliente, que preferia uma paleta de cores escuras e iluminação estratégica. A proposta incluiu soluções criativas para otimizar o espaço, com um design moderno que garantiu funcionalidade sem sacrificar o estilo. O trabalho variou desde a reforma completa do apartamento até o desenvolvimento de um projeto de marcenaria sob medida, aproveitando cada canto e criando ambientes práticos e aconchegantes.'
        : 'This interior design project was developed for a small apartment, meeting the client\'s desires for a dark color palette and strategic lighting. The proposal included creative solutions to optimize space, with a modern design that ensured functionality without sacrificing style. The work ranged from the complete renovation of the apartment to the development of a custom joinery project, making use of every corner and creating practical and cozy environments.',
    },
    {
      id: 'gamer-room',
      title: isPt ? 'Quarto Gamer' : 'Gamer Room',
      year: '2021',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.interiors, t.projects.filters.health],
      cover: '/projects/60.jpg',
      images: ['/projects/60.jpg', '/projects/62.jpg', '/projects/63.jpg'],
      description: isPt
        ? 'O quarto gamer foi projetado para refletir a paixão pelo universo Star Wars e o amor pelos jogos. Com cores escuras e iluminação confortável, o quarto proporciona a atmosfera ideal para imersão nos jogos. Detalhes como painéis ripados nas paredes adicionam um toque moderno e sofisticado, enquanto elementos inspirados em Star Wars criam um espaço único e personalizado. O design foca na praticidade, conforto e estilo, proporcionando o cenário perfeito para jogar e relaxar.'
        : 'The gamer room was designed to reflect a passion for the Star Wars universe and a love for gaming. With dark colors and comfortable lighting, the room provides the ideal atmosphere for game immersion. Details such as slatted panels on the walls add a modern and sophisticated touch, while elements inspired by Star Wars create a unique and personalized space. The design focuses on practicality, comfort, and style, providing the perfect setting to play and relax.',
    },
    {
      id: 'nature-refuge',
      title: isPt ? 'Casa Refúgio na Natureza' : 'Nature Refuge House',
      year: '2021',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.residential],
      cover: '/projects/64.jpg',
      images: ['/projects/64.jpg', '/projects/65.jpg', '/projects/66.jpg', '/projects/67.jpg'],
      description: isPt
        ? 'O projeto arquitetônico e de interiores da casa de campo foi pensado para criar um espaço que harmoniza com a natureza ao redor, utilizando materiais rústicos e elegantes como madeira e pedra. O espaço foi projetado para oferecer conforto, com grandes janelas que proporcionam ampla luz natural e vistas panorâmicas. O layout dos espaços é funcional, com áreas de convivência amplas e arejadas, promovendo um ambiente acolhedor, ideal para relaxamento e integração com o meio ambiente.'
        : 'The architectural and interior design project for the country house was designed to create a space that harmonizes with the surrounding nature, using rustic and elegant materials such as wood and stone. The space was designed to offer comfort, with large windows providing ample natural light and panoramic views. The layout of the spaces is functional, with large and airy living areas, promoting a welcoming environment, ideal for relaxation and integration with the environment.',
      featured: true
    },
    {
      id: 'parklet-competition',
      title: isPt ? 'Concurso Parklet 4.0' : 'Parklet 4.0 Competition',
      year: '2020',
      location: isPt ? 'Curitiba, Brasil' : 'Curitiba, Brazil',
      categories: [t.projects.filters.professional, t.projects.filters.competitions, t.projects.filters.urbanism],
      cover: '/projects/68.jpg',
      images: ['/projects/68.jpg', '/projects/69.jpg', '/projects/70.jpg'],
      description: isPt
        ? 'Meu projeto para o concurso de ideias de parklet foi inspirado nos tubos de Curitiba, unindo funcionalidade e inovação. O design foi concebido para incorporar pontos de realidade virtual (VR), proporcionando uma experiência imersiva para os usuários enquanto desfrutam do espaço urbano. Além disso, o projeto inclui uma área de bicicletário, incentivando a mobilidade sustentável. O objetivo foi criar um ambiente interativo e moderno que reflete as interseções entre arquitetura e tecnologia.'
        : 'My project for the parklet ideas competition was inspired by Curitiba\'s tube bus stops, uniting functionality and innovation. The design was conceived to incorporate virtual reality (VR) points, providing an immersive experience for users while they enjoy the urban space. Furthermore, the project includes a bicycle rack area, encouraging sustainable mobility. The goal was to create an interactive and modern environment that reflects the intersections between architecture and technology.',
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === t.projects.filters.all || activeFilter === 'Todos' || activeFilter === 'All') return true;
    return project.categories.includes(activeFilter);
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImage(project.cover);
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "warm" : "outline"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.featured && (
                    <Badge variant="secondary" className="bg-warm text-warm-foreground">
                      {t.projects.badges.featured}
                    </Badge>
                  )}
                  {project.beforeAfter && (
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {isPt ? 'Antes/Depois' : 'Before/After'}
                    </Badge>
                  )}
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  {t.projects.viewProject}
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.year} | {project.location}
                  </p>

                  <p className="text-sm text-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in" onClick={() => setSelectedProject(null)}>
            <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-semibold">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.year} | {selectedProject.location}</p>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                    {t.projects.close}
                  </Button>
                </div>

                <div className="space-y-6">
                  {selectedProject.beforeAfter ? (
                    <BeforeAfter
                      beforeSrc={selectedProject.beforeAfter.render}
                      afterSrc={selectedProject.beforeAfter.real}
                      altBefore="3D Render"
                      altAfter="Built Reality"
                      className="w-full"
                    />
                  ) : (
                    <div className="space-y-4">
                      {/* Main Image Display */}
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src={currentImage || selectedProject.cover}
                          alt={selectedProject.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Thumbnails Grid */}
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                        {selectedProject.images.map((img, idx) => (
                          <div
                            key={idx}
                            className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border-2 transition-all ${currentImage === img ? 'border-primary ring-2 ring-primary/30' : 'border-transparent hover:border-primary/50'}`}
                            onClick={() => setCurrentImage(img)}
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} view ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.categories.map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;