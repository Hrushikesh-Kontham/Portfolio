import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, User } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A responsive web application providing real-time weather updates with city-based search functionality. Features dynamic UI updates and accurate weather forecasts.",
      tech: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API", "Responsive Design"],
      liveUrl: "https://live-weather-api-app.netlify.app/",
      role: "Full Stack Developer",
      highlights: ["API Integration", "Real-time Data", "Mobile-First Design"]
    },
    {
      title: "To-Do List Application",
      description: "A user-friendly task management application with persistent storage. Enables users to efficiently organize, track, and complete their daily tasks with an intuitive interface.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "DOM Manipulation"],
      liveUrl: "https://to-do-list-live.netlify.app/",
      role: "Frontend Developer",
      highlights: ["CRUD Operations", "Data Persistence", "Clean UI/UX"]
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world applications showcasing my technical skills and problem-solving abilities
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 border-border bg-card hover-lift animate-fade-in group overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="gap-2 w-full hover-lift group">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    View Live Project
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
