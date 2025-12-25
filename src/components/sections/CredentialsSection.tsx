import { Award, GraduationCap, FileCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Cybercrime Prevention Seminar", institution: "PNP Anti-Cybercrime Group" },
  { name: "Forensic Science Workshop", institution: "NBI Training Center" },
  { name: "Community Policing & Safety Training", institution: "DILG" },
  { name: "Crime Scene Investigation Course", institution: "PNPA" },
];

export function CredentialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="credentials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Credentials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* License Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">PRC License</h3>
                    <p className="text-muted-foreground mb-2">Registered Criminologist</p>
                    <p className="text-sm font-medium text-accent">
                      License No. 0012345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Bachelor of Science</h3>
                    <p className="text-muted-foreground mb-2">Criminology</p>
                    <p className="text-sm font-medium text-primary">
                      University of the Philippines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <h3 className="font-display text-xl font-semibold text-center mb-6">
            Certifications & Trainings
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-accent/50 transition-colors"
              >
                <FileCheck className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
