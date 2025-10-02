import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-section border-t border-primary/10">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-primary/30 p-12 md:p-16 shadow-glow">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  Trusted by 50,000+ Enterprises
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Secure Your Data?
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                Start your 30-day free trial today. No credit card required. Experience military-grade data security in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-muted/50 border-primary/20 focus:border-primary/40 h-12"
                />
                <Button
                  size="lg"
                  className="h-12 px-8 font-medium shadow-glow"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="uppercase tracking-wider">30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="uppercase tracking-wider">No credit card needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="uppercase tracking-wider">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
