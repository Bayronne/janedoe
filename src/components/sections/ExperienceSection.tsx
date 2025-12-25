import { Briefcase, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const workExperience = [
  {
    title: "Criminology Intern",
    organization: "Philippine National Police - Regional Office",
    period: "June 2023 - August 2023",
    responsibilities: [
      "Assisted in case documentation and evidence handling",
      "Conducted community awareness sessions on cybercrime",
      "Supported barangay-level peace and order initiatives",
      "Participated in crime scene investigation simulations",
    ],
  },
  {
    title: "Research Assistant",
    organization: "University Criminology Department",
    period: "January 2023 - May 2023",
    responsibilities: [
      "Collected and analyzed data on crime trends",
      "Assisted in preparing research publications",
      "Organized seminars on digital safety for students",
    ],
  },
];

const academicProjects = [
  {
    title: "Trends in Cybercrime Among Filipino Youth",
    type: "Research Thesis",
    description: "Comprehensive study analyzing the patterns and prevalence of cybercrime victimization among Filipino youth, with recommendations for prevention strategies.",
  },
  {
    title: "Community Response to Online Harassment",
    type: "Case Study",
    description: "Investigation into how local communities and law enforcement respond to cases of online harassment and cyber-bullying.",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-semibold">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-accent font-medium text-sm mb-1">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-accent" />
                <h3 className="font-display text-xl font-semibold">Academic Projects</h3>
              </div>
              
              <div className="space-y-6">
                {academicProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                      {project.type}
                    </span>
                    <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
