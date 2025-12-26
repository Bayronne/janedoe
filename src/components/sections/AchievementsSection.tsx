import { Trophy, Star, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={cardVariants}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Achievements
          </motion.h2>
          <motion.div variants={cardVariants} className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                }}
                className="relative p-6 bg-card rounded-xl border border-border/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Animated Background Circle */}
                <motion.div 
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 ${
                    achievement.color === 'gold' ? 'bg-gold' : 
                    achievement.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`}
                  initial={{ opacity: 0.05, scale: 1 }}
                  whileHover={{ opacity: 0.15, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative">
                  {/* Icon with Animation */}
                  <motion.div 
                    className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center ${
                      achievement.color === 'gold' ? 'bg-gold/10' : 
                      achievement.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon 
                      className={`h-7 w-7 ${
                        achievement.color === 'gold' ? 'text-gold' : 
                        achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} 
                    />
                  </motion.div>
                  
                  {/* Year Badge */}
                  <motion.span
                    className="inline-block px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {achievement.year}
                  </motion.span>
                  
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${
                    achievement.color === 'gold' ? 'bg-gold' : 
                    achievement.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
