import { Shield, Globe, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-12">
            As a Registered Criminologist with a strong foundation in criminology, law enforcement, 
            and digital crime prevention, I am dedicated to making our communities safer. My expertise 
            spans investigation, community safety programs, and educational advocacy on consent and 
            online security. I am passionate about applying my criminology knowledge to protect 
            communities and empower individuals against modern threats.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Criminal Investigation</h3>
              <p className="text-muted-foreground text-sm">
                Skilled in case analysis, evidence handling, and forensic documentation.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cybercrime Prevention</h3>
              <p className="text-muted-foreground text-sm">
                Advocating for digital safety and online security awareness.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-border/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Safety</h3>
              <p className="text-muted-foreground text-sm">
                Developing programs to enhance peace and order in communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
