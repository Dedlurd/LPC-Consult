import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Results from "../components/home/Results";
import Resources from "../components/home/Resources";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WhyChooseUs />
      <Results />
      <Resources />
      <FinalCTA />
    </>
  );
}

export default Home;