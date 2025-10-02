import { Shield, Zap, FileCheck, Lock, Cloud, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Algorithms",
    description: "DoD 5220.22-M, Gutmann, and NSA-approved data wiping methods ensure complete data destruction with zero recovery possibility.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized multi-threaded processing wipes terabytes of data in hours, not days, minimizing operational downtime.",
  },
  {
    icon: FileCheck,
    title: "Compliance Certification",
    description: "Automatic generation of audit-ready certificates proving GDPR, HIPAA, SOC 2, and industry-specific compliance.",
  },
  {
    icon: Lock,
    title: "Encrypted Operations",
    description: "All wiping operations are encrypted end-to-end, ensuring no data leakage during the sanitization process.",
  },
  {
    icon: Cloud,
    title: "Cloud & On-Premise",
    description: "Flexible deployment options including on-premise installation and secure cloud-based management dashboard.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description: "Real-time monitoring, comprehensive logs, and customizable reports for IT audits and compliance requirements.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="text-primary">
              Complete Security
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Enterprise-grade capabilities designed to meet the most stringent security and compliance requirements
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {/* Large feature - spans 2 columns and 2 rows */}
          <Card className="md:col-span-2 md:row-span-2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{features[0].title}</h3>
                <p className="text-muted-foreground font-light">{features[0].description}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-xs text-primary uppercase tracking-wider font-medium">DoD 5220.22-M Certified</p>
              </div>
            </CardContent>
          </Card>

          {/* Medium features - span 2 columns each */}
          <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{features[1].title}</h3>
                <p className="text-sm text-muted-foreground font-light">{features[1].description}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{features[2].title}</h3>
                <p className="text-sm text-muted-foreground font-light">{features[2].description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Small features - single column */}
          {features.slice(3).map((feature, index) => (
            <Card
              key={index + 3}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
