const StructuredData = () => {
  const architectData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andressa Salszbrun",
    "jobTitle": "Architect",
    "description": "Professional architect specializing in residential design, interior architecture, and sustainable building solutions",
    "url": "https://andressaarch.com",
    "image": "https://andressaarch.com/og-image.jpg",
    "sameAs": [
      "https://instagram.com/andressaarch",
      "https://linkedin.com/in/andressa-Salszbrun"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service",
      "email": "mani0098@algonquinlive.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressCountry": "CA"
    },
    "knowsAbout": [
      "Architecture",
      "Residential Design",
      "Interior Architecture", 
      "Sustainable Design",
      "3D Visualization",
      "Building Design"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Architecture School"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Andressa Salszbrun - Architect Portfolio",
    "url": "https://andressaarch.com",
    "description": "Professional architectural services by Andressa Salszbrun. Showcasing innovative residential designs, interior architecture, and sustainable building solutions.",
    "author": {
      "@type": "Person",
      "name": "Andressa Salszbrun"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Andressa Salszbrun Architecture",
    "description": "Professional architectural services including residential design, interior architecture, and sustainable building solutions",
    "provider": {
      "@type": "Person",
      "name": "Andressa Salszbrun"
    },
    "serviceType": [
      "Residential Design",
      "Interior Architecture",
      "3D Visualization", 
      "Sustainable Design",
      "Architectural Consultation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Ottawa, Canada"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(architectData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
    </>
  );
};

export default StructuredData;