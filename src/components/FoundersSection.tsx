import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import founder3 from "@/assets/founder-3.jpg";

const founders = [
  {
    name: "Alex Morrison",
    role: "CEO & Co-Founder",
    bio: "Former NSA cybersecurity specialist with 15+ years in data protection. Led enterprise security initiatives at Fortune 500 companies.",
    image: founder1,
    linkedin: "#",
    email: "alex@securewipepro.com",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    bio: "PhD in Computer Science from MIT. Pioneer in cryptographic algorithms and secure data deletion methodologies with 20+ patents.",
    image: founder2,
    linkedin: "#",
    email: "sarah@securewipepro.com",
  },
  {
    name: "Michael Rodriguez",
    role: "COO & Co-Founder",
    bio: "Serial entrepreneur with successful exits in SaaS. Expert in scaling enterprise software solutions and building security-focused teams.",
    image: founder3,
    linkedin: "#",
    email: "michael@securewipepro.com",
  },
];

const FoundersSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Meet the{" "}
            <span className="text-primary">
              Founding Team
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Security experts and industry veterans committed to protecting your data
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg border border-primary/20">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground font-light">{founder.bio}</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={founder.linkedin}
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 flex items-center justify-center transition-all"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 flex items-center justify-center transition-all"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
