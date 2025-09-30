import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import heroImage from "@/assets/hero-secure.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SecureWipe Pro - Enterprise Data Security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Enterprise-Grade Data Security
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              SecureWipe Pro
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Military-grade data sanitization software that permanently erases sensitive information with certified security compliance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="hero" size="lg" className="text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 w-full max-w-2xl">
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Data Recovery Prevention
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Enterprise Clients
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-1">
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
