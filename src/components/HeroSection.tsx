import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import heroImage from "@/assets/hero-secure.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 shadow-glow">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">
              ENTERPRISE-GRADE DATA SECURITY
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">SecureWipe</span>
            <span className="text-primary"> Pro</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            Military-grade data sanitization software that permanently erases sensitive information with certified security compliance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="default" size="lg" className="text-base shadow-glow">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary/30">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary/20 w-full max-w-2xl">
            <div className="flex flex-col space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                99.9%
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-light uppercase tracking-wider">
                Data Recovery Prevention
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                50K+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-light uppercase tracking-wider">
                Enterprise Clients
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-light uppercase tracking-wider">
                Security Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
