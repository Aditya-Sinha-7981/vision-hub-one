import { AlertTriangle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-section">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                The Problem
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Data Breaches Cost Companies{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Millions
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Simply deleting files doesn't remove them from your storage devices. Sensitive data remains recoverable by sophisticated recovery tools, putting your organization at risk.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                  <span>Standard deletion leaves data remnants vulnerable to recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                  <span>Regulatory non-compliance can result in hefty fines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                  <span>Decommissioned hardware may leak confidential information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                  <span>Employee turnover increases data exposure risks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Solution
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Military-Grade{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Data Sanitization
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                SecureWipe Pro uses advanced overwriting algorithms that meet international data destruction standards, ensuring your sensitive information is irretrievably destroyed.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>DoD 5220.22-M and NSA certified wiping standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>GDPR, HIPAA, and SOC 2 compliance ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Automated audit trails and compliance certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Supports all storage types: HDD, SSD, USB, mobile devices</span>
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
