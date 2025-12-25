import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

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

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Sample Work
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary/50">
                    {item.placeholder}
                  </span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedItem && (
            <div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-primary/50">
                  {selectedItem.placeholder}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                  {selectedItem.category}
                </span>
                <h3 className="font-display text-2xl font-semibold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
