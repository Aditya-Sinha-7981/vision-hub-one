import { Shield, Award, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-section border-t border-primary/10">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why <span className="text-primary">SecureWipe Pro</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light">
              The enterprise data security market is projected to reach $15B by 2027
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large feature card */}
            <div className="md:col-span-2 md:row-span-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-8 shadow-glow hover:border-primary/50 transition-all group">
              <div className="h-full flex flex-col justify-between space-y-6">
                <div>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Addressing a Critical Market Need
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    With increasing data privacy regulations (GDPR, CCPA, HIPAA) and rising cybersecurity threats, enterprises need certified data sanitization solutions. SecureWipe Pro provides military-grade security that meets international compliance standards, protecting organizations from data breaches and regulatory penalties.
                  </p>
                </div>
                <div className="text-6xl md:text-8xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  $15B
                </div>
              </div>
            </div>

            {/* Stat card 1 */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6 shadow-glow hover:border-primary/50 transition-all">
              <Award className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground font-light">
                Data recovery prevention rate with DoD-certified algorithms
              </p>
            </div>

            {/* Stat card 2 */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6 shadow-glow hover:border-primary/50 transition-all">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-sm text-muted-foreground font-light">
                Faster than competing solutions with multi-threaded processing
              </p>
            </div>

            {/* Wide card */}
            <div className="md:col-span-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-lg p-8 shadow-glow">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground font-light uppercase tracking-wider">
                    Enterprise Clients
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground font-light uppercase tracking-wider">
                    Industry Certifications
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground font-light uppercase tracking-wider">
                    Security Support
                  </p>
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
