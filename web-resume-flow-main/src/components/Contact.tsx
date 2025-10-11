import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking opportunities in Full Stack Development and Software Engineering. 
          Let's connect and build something amazing!
        </p>
        
        <Card className="p-8 md:p-10 border-border bg-card animate-fade-in hover-lift">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Hire?
            </h3>
            <p className="text-muted-foreground">
              I'm available for full-time positions and freelance projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <a 
              href="mailto:hrushikeshkontham@gmail.com"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover-lift group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-sm">hrushikeshkontham@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+919948546938"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover-lift group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-sm">+91 9948546938</p>
              </div>
            </a>

            <a 
              href="https://github.com/Hrushikesh-Kontham"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover-lift group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="font-medium text-sm">@hrushikesh-kontham</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/hrushikesh-kontham"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover-lift group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-sm">@hrushikeshkontham</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 hover-lift">
              <a href="mailto:hrushikeshkontham@gmail.com">
                <Send className="h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 hover-lift">
              <a href="https://www.linkedin.com/in/hrushikesh-kontham" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
