import { Navbar } from "./components/header/navbar";
import { HeroCtaSection } from "./components/sections/call-to-action";
import { FooterCTASection } from "./components/sections/cta-footer";
import { HeroSection } from "./components/sections/hero";
import { HiringSection } from "./components/sections/hire";
import { RolesSection } from "./components/sections/roles";
import { StepsSection } from "./components/sections/steps";
import { WhyUsSection } from "./components/sections/why-us";
import { WorkSection } from "./components/sections/work";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <HeroSection />
        <HeroCtaSection />
        <StepsSection />
        <WhyUsSection />
        <WorkSection />
        <HiringSection />
        <RolesSection />
        <FooterCTASection />
      </main>
    </>
  );
}

export default App;
