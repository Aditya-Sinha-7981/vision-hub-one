import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import FoundersSection from "@/components/FoundersSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <HowItWorks />
      <FoundersSection />
      <CTASection />
    </main>
  );
};

export default Index;
