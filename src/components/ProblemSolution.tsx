import { AlertTriangle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-section border-y border-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-destructive/30">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-xs font-medium text-destructive uppercase tracking-wider">
                The Problem
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Data Breaches Cost Companies{" "}
              <span className="text-primary">
                Millions
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-light">
              <p>
                Simply deleting files doesn't remove them from your storage devices. Sensitive data remains recoverable by sophisticated recovery tools, putting your organization at risk.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  <span className="text-sm">Standard deletion leaves data remnants vulnerable to recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  <span className="text-sm">Regulatory non-compliance can result in hefty fines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  <span className="text-sm">Decommissioned hardware may leak confidential information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  <span className="text-sm">Employee turnover increases data exposure risks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 shadow-glow">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Our Solution
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Military-Grade{" "}
              <span className="text-primary">
                Data Sanitization
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-light">
              <p>
                SecureWipe Pro uses advanced overwriting algorithms that meet international data destruction standards, ensuring your sensitive information is irretrievably destroyed.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">DoD 5220.22-M and NSA certified wiping standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">GDPR, HIPAA, and SOC 2 compliance ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Automated audit trails and compliance certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Supports all storage types: HDD, SSD, USB, mobile devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
