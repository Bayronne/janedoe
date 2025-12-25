import { 
  Search, 
  Shield, 
  FileText, 
  Users, 
  Scale, 
  Megaphone,
  Monitor,
  Lock
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { 
    icon: Search, 
    name: "Criminal Investigation", 
    description: "Case analysis and evidence gathering" 
  },
  { 
    icon: Monitor, 
    name: "Digital Crime Prevention", 
    description: "Cybersecurity and online safety" 
  },
  { 
    icon: FileText, 
    name: "Forensic Documentation", 
    description: "Report writing and evidence documentation" 
  },
  { 
    icon: Users, 
    name: "Community Safety Programs", 
    description: "Peace and order initiatives" 
  },
  { 
    icon: Scale, 
    name: "Legal Knowledge", 
    description: "Philippine Criminal Law & Procedures" 
  },
  { 
    icon: Megaphone, 
    name: "Public Awareness Campaigns", 
    description: "Crime prevention education" 
  },
  { 
    icon: Lock, 
    name: "Online Security Advocacy", 
    description: "Safe digital practices promotion" 
  },
  { 
    icon: Shield, 
    name: "Law Enforcement Support", 
    description: "Police operations assistance" 
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Core Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border/50 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-base mb-1">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
