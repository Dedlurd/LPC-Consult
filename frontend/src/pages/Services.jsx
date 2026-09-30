import ServicesHero from "../components/services/ServicesHero";
import IndividualServices from "../components/services/IndividualServices";
import CareerPackages from "../components/services/CareerPackages";
import HowItWorks from "../components/services/HowItWorks";
import WhatToExpect from "../components/services/WhatToExpect";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <>
      <ServicesHero />
      <IndividualServices />
      <CareerPackages />
      <HowItWorks />
      <WhatToExpect />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}

export default Services;