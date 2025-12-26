import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Cybercrime Awareness Infographic",
    category: "Infographics",
    description: "Educational material for students about online safety",
    placeholder: "CYB",
  },
  {
    id: 2,
    title: "Safe Sexting & Consent Guide",
    category: "Scripts",
    description: "Messaging guide for youth awareness campaigns",
    placeholder: "SSC",
  },
  {
    id: 3,
    title: "Urban vs Rural Crime Trends",
    category: "Research",
    description: "Comparative analysis of crime patterns in Philippine barangays",
    placeholder: "UCT",
  },
  {
    id: 4,
    title: "Online Harassment Prevention",
    category: "Infographics",
    description: "Visual guide on recognizing and reporting cyber harassment",
    placeholder: "OHP",
  },
  {
    id: 5,
    title: "Community Safety Handbook",
    category: "Publications",
    description: "Comprehensive guide for barangay safety initiatives",
    placeholder: "CSH",
  },
  {
    id: 6,
    title: "Digital Forensics Overview",
    category: "Presentations",
    description: "Training slides on basic digital forensics concepts",
    placeholder: "DFO",
  },
];

const categories = ["All", "Infographics", "Research", "Scripts", "Publications", "Presentations"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Sample Work
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-accent mx-auto mb-8" />

          {/* Animated Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid with AnimatePresence */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border/50 hover:border-accent/50 hover:shadow-xl transition-colors"
                >
                  {/* Image Placeholder with Hover Effect */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <motion.span
                      className="text-3xl font-display font-bold text-primary/50"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.placeholder}
                    </motion.span>
                    
                    {/* Overlay with Zoom Icon */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <ZoomIn className="h-10 w-10 text-primary" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <motion.span
                      className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.span>
                    <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Lightbox Dialog */}
      <AnimatePresence>
        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <motion.span
                    className="text-6xl font-display font-bold text-primary/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {selectedItem.placeholder}
                  </motion.span>
                </div>
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mb-2">{selectedItem.title}</h3>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
