import { Shield, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Shield,
    title: "Criminal Investigation",
    description: "Skilled in case analysis, evidence handling, and forensic documentation.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Cybercrime Prevention",
    description: "Advocating for digital safety and online security awareness.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Community Safety",
    description: "Developing programs to enhance peace and order in communities.",
    color: "gold",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-accent mx-auto mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg leading-relaxed text-center mb-12"
          >
            As a Registered Criminologist with a strong foundation in criminology, law enforcement, 
            and digital crime prevention, I am dedicated to making our communities safer. My expertise 
            spans investigation, community safety programs, and educational advocacy on consent and 
            online security. I am passionate about applying my criminology knowledge to protect 
            communities and empower individuals against modern threats.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                }}
                className="text-center p-6 bg-card rounded-lg shadow-sm border border-border/50 cursor-pointer"
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    feature.color === 'primary' ? 'bg-primary/10' :
                    feature.color === 'accent' ? 'bg-accent/10' : 'bg-gold/10'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon
                    className={`h-7 w-7 ${
                      feature.color === 'primary' ? 'text-primary' :
                      feature.color === 'accent' ? 'text-accent' : 'text-gold'
                    }`}
                  />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
