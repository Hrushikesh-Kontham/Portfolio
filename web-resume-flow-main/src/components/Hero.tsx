import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <div className="mb-8">
          {/* <div className="mb-6 w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-float">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl font-bold text-primary">
              HK
            </div>
          </div> */}
          {/* <h2 className="text-primary text-lg md:text-xl mb-2 font-medium animate-slide-in">
            Hi, I'm
          </h2> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-gradient">
            Hrushikesh Kontham
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Full Stack Web Developer
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I’m an adaptable full-stack web developer who loves bringing ideas to life through engaging and impactful digital experiences.
          Skilled in<span className="text-primary font-semibold"> Java</span>, <span className="text-primary font-semibold">Spring Boot, RESTful APIs</span>, 
          <span className="text-primary font-semibold"> JavaScript</span>. I enjoy building scalable, responsive and user-focused applications.
          Fueled by curiosity and a constant drive to grow. I aspire to create technology that inspires and empowers people.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button asChild size="lg" className="gap-2 hover-lift">
            <a href="#contact">
              <Mail className="h-5 w-5" />
              Let's Connect
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 hover-lift">
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
            <a href="https://github.com/Hrushikesh-Kontham" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
            <a href="https://www.linkedin.com/in/hrushikesh-kontham" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
            <a href="mailto:hrushikeshkontham@gmail.com" aria-label="Email Me">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
