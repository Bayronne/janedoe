import { Trophy, Star, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Star,
    title: "Dean's Lister",
    description: "Consistent academic excellence throughout the BS Criminology program",
    year: "2020-2024",
    color: "gold",
  },
  {
    icon: Award,
    title: "Community Safety Advocate",
    description: "Recognition for outstanding contribution to barangay safety programs",
    year: "2023",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Published Research",
    description: "Article on digital consent and sexting prevention featured in criminology journal",
    year: "2024",
    color: "accent",
  },
];

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative p-6 bg-card rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Background Decoration */}
                <div 
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity -translate-y-1/2 translate-x-1/2 ${
                    achievement.color === 'gold' ? 'bg-gold' : 
                    achievement.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} 
                />
                
                <div className="relative">
                  <div 
                    className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center ${
                      achievement.color === 'gold' ? 'bg-gold/10' : 
                      achievement.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}
                  >
                    <achievement.icon 
                      className={`h-7 w-7 ${
                        achievement.color === 'gold' ? 'text-gold' : 
                        achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} 
                    />
                  </div>
                  
                  <span className="inline-block px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded mb-2">
                    {achievement.year}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
