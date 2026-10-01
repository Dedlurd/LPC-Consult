import PortfolioHero from "../components/portfolio/PortfolioHero";
import FeaturedOutcomes from "../components/portfolio/FeaturedOutcomes";
import CaseStudies from "../components/portfolio/CaseStudies";
import BeforeAfter from "../components/portfolio/BeforeAfter";
import PortfolioTestimonials from "../components/portfolio/PortfolioTestimonials";
import WorkByService from "../components/portfolio/WorkByService";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <FeaturedOutcomes />
      <CaseStudies />
      <BeforeAfter />
      <PortfolioTestimonials />
      <WorkByService />
      <PortfolioCTA />
    </>
  );
}

export default Portfolio;