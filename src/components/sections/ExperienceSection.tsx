import { Briefcase, BookOpen } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const projectVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Experience
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {workExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    {/* Animated Timeline Dot */}
                    <motion.div
                      className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
                      whileHover={{ scale: 1.5 }}
                    />
                    
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-accent font-medium text-sm mb-1">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    
                    <ul className="space-y-1">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <motion.span
                            className="text-accent mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          >
                            •
                          </motion.span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Projects */}
            <motion.div variants={projectVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen className="h-6 w-6 text-accent" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold">Academic Projects</h3>
              </div>
              
              <div className="space-y-6">
                {academicProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                    }}
                    className="p-6 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors cursor-pointer overflow-hidden relative group"
                  >
                    {/* Hover Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.span
                        className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.type}
                      </motion.span>
                      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
