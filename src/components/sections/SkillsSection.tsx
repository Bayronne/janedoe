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
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { 
    icon: Search, 
    name: "Criminal Investigation", 
    description: "Case analysis and evidence gathering",
    level: 90,
  },
  { 
    icon: Monitor, 
    name: "Digital Crime Prevention", 
    description: "Cybersecurity and online safety",
    level: 85,
  },
  { 
    icon: FileText, 
    name: "Forensic Documentation", 
    description: "Report writing and evidence documentation",
    level: 88,
  },
  { 
    icon: Users, 
    name: "Community Safety Programs", 
    description: "Peace and order initiatives",
    level: 92,
  },
  { 
    icon: Scale, 
    name: "Legal Knowledge", 
    description: "Philippine Criminal Law & Procedures",
    level: 87,
  },
  { 
    icon: Megaphone, 
    name: "Public Awareness Campaigns", 
    description: "Crime prevention education",
    level: 90,
  },
  { 
    icon: Lock, 
    name: "Online Security Advocacy", 
    description: "Safe digital practices promotion",
    level: 85,
  },
  { 
    icon: Shield, 
    name: "Law Enforcement Support", 
    description: "Police operations assistance",
    level: 88,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
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
            Core Skills
          </motion.h2>
          <motion.div variants={cardVariants} className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-card rounded-xl border border-border/50 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-colors overflow-hidden cursor-pointer"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <skill.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  
                  <h3 className="font-semibold text-base mb-1">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                  
                  {/* Skill Progress Bar */}
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
