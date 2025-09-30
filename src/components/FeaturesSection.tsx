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
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Complete Security
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade capabilities designed to meet the most stringent security and compliance requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-soft hover:shadow-strong transition-smooth hover:scale-105"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
