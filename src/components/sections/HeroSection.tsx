import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 animate-fade-up">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-display text-muted-foreground">
                  OB
                </span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">Orgeil Baron</h1>
          <p className="text-lg md:text-xl text-accent font-medium mb-4 animate-fade-up animation-delay-200">Administrative Virtual Assistant</p>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-300">
            Passionate about applying criminology expertise to protect communities, 
            prevent digital crime, and empower individuals through education and advocacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>;
}