import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Palette, Server, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
      color: "text-blue-400"
    },
    {
      icon: Palette,
      title: "Front-End Development",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "text-purple-400"
    },
    {
      icon: Server,
      title: "Back-End & APIs",
      skills: ["Spring Boot", "Spring Data JPA", "RESTful APIs"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "text-orange-400"
    },
    {
      icon: Wrench,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "Postman", "Jira", "VS Code", "IntelliJ IDEA"],
      color: "text-pink-400"
    },
    {
      icon: Cloud,
      title: "Additional Skills",
      skills: ["Agile/Scrum", "Problem Solving", "System Design", "Excel"],
      color: "text-cyan-400"
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 border-border bg-card hover-lift animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
