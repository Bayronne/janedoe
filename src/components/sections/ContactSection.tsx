import { useState } from "react";
import { Mail, Linkedin, ExternalLink, Download, Send, Loader2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactLinks = [
    {
      href: "mailto:juan.delacruz@email.com",
      icon: Mail,
      label: "juan.delacruz@email.com",
      color: "primary",
    },
    {
      href: "https://linkedin.com/in/juandelacruz",
      icon: Linkedin,
      label: "LinkedIn Profile",
      color: "accent",
    },
    {
      href: "https://www.onlinejobs.ph/jobseekers/info/3435377",
      icon: ExternalLink,
      label: "OnlineJobs.ph Profile",
      color: "gold",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 overflow-hidden">
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
            Get In Touch
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-accent mx-auto mb-6" />
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-center max-w-xl mx-auto mb-12"
          >
            Interested in collaboration or have questions about criminology, digital safety, 
            or community programs? I'd love to hear from you!
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-all focus:ring-2 focus:ring-accent/20"
                    />
                  </motion.div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="transition-all focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="transition-all focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="transition-all focus:ring-2 focus:ring-accent/20 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-2 relative overflow-hidden group" 
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <motion.div
                className="p-6 bg-card rounded-xl border border-border/50"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          link.color === 'primary' ? 'bg-primary/10' :
                          link.color === 'accent' ? 'bg-accent/10' : 'bg-gold/10'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <link.icon className={`h-5 w-5 ${
                          link.color === 'primary' ? 'text-primary' :
                          link.color === 'accent' ? 'text-accent' : 'text-gold'
                        }`} />
                      </motion.div>
                      <span className="text-sm">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Download CV */}
              <motion.div
                className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-2">Download My Resume</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get a detailed overview of my qualifications and experience.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <a href="/resume.pdf" download>
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Download className="h-4 w-4" />
                        </motion.div>
                        Download CV
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
