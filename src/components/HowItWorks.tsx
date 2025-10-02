import { Upload, Settings, CheckCircle, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Select Target",
    description: "Choose files, folders, drives, or entire systems to sanitize. Supports all storage types including SSDs, HDDs, and mobile devices.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure Standards",
    description: "Select from multiple certified wiping algorithms (DoD, NSA, Gutmann) and customize passes based on your security requirements.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Execute & Verify",
    description: "Our engine performs secure overwriting with real-time progress tracking. Automatic verification ensures 100% data destruction.",
  },
  {
    icon: Download,
    number: "04",
    title: "Get Certificate",
    description: "Receive detailed compliance certificates and audit logs proving data destruction for regulatory and legal requirements.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-section border-y border-primary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Process,{" "}
            <span className="text-primary">
              Maximum Security
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Four straightforward steps to complete data sanitization with military-grade security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
