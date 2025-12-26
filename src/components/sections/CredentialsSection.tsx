import { Award, GraduationCap, FileCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Cybercrime Prevention Seminar", institution: "PNP Anti-Cybercrime Group" },
  { name: "Forensic Science Workshop", institution: "NBI Training Center" },
  { name: "Community Policing & Safety Training", institution: "DILG" },
  { name: "Crime Scene Investigation Course", institution: "PNPA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const certVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function CredentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="credentials" className="py-20 md:py-28 overflow-hidden">
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
            Credentials
          </motion.h2>
          <motion.div variants={cardVariants} className="w-20 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* License Card */}
            <motion.div variants={cardVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden relative group">
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">PRC License</h3>
                      <p className="text-muted-foreground mb-2">Registered Criminologist</p>
                      <motion.p
                        className="text-sm font-medium text-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        License No. 0012345
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={cardVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Bachelor of Science</h3>
                      <p className="text-muted-foreground mb-2">Criminology</p>
                      <motion.p
                        className="text-sm font-medium text-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        University of the Philippines
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.h3
            variants={cardVariants}
            className="font-display text-xl font-semibold text-center mb-6"
          >
            Certifications & Trainings
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={certVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ x: 5, backgroundColor: "hsl(var(--accent)/0.05)" }}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-accent/50 transition-colors cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FileCheck className="h-5 w-5 text-accent shrink-0" />
                </motion.div>
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
