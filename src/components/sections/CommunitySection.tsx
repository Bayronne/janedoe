import { Heart, Mic, PenTool } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

export function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
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
            custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Community Engagement
          </motion.h2>
          <motion.div
            variants={cardVariants}
            custom={0}
            className="w-20 h-1 bg-accent mx-auto mb-12"
          />

          <div className="space-y-6">
            {engagements.map((engagement, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={cardVariants}
                whileHover={{ 
                  x: 10,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors cursor-pointer overflow-hidden relative group"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-xl ${engagement.bgColor} flex items-center justify-center shrink-0 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <engagement.icon className={`h-8 w-8 ${engagement.color}`} />
                  </motion.div>
                </motion.div>
                
                <div className="flex-1 relative z-10">
                  <motion.span
                    className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {engagement.type}
                  </motion.span>
                  <h3 className="font-semibold text-lg mb-2">{engagement.title}</h3>
                  <p className="text-muted-foreground">{engagement.description}</p>
                </div>

                {/* Arrow Indicator */}
                <motion.div
                  className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-accent text-2xl">→</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
