import { Heart, Mic, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const engagements = [
  {
    icon: Heart,
    type: "Volunteer",
    title: "Barangay Safety Patrol Program",
    description: "Active participation in community patrol initiatives ensuring neighborhood security and promoting crime awareness.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Mic,
    type: "Speaker",
    title: "Youth Awareness Campaign on Online Safety",
    description: "Conducted educational talks for students about protecting themselves from cyber threats and online predators.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: PenTool,
    type: "Contributor",
    title: "Educational Resources for Crime Prevention",
    description: "Created infographics, guides, and training materials for barangay officials and community leaders.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function CommunitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="community" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Community Engagement
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="space-y-6">
            {engagements.map((engagement, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
              >
                <div className={`w-16 h-16 rounded-xl ${engagement.bgColor} flex items-center justify-center shrink-0`}>
                  <engagement.icon className={`h-8 w-8 ${engagement.color}`} />
                </div>
                
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-2">
                    {engagement.type}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{engagement.title}</h3>
                  <p className="text-muted-foreground">{engagement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
