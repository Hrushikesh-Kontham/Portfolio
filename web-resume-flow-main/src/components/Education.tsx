import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Kakatiya Institute of Technology and Science",
      location: "Warangal",
      period: "2022 – 2026",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      location: "Hyderabad",
      period: "2020 – 2022",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 border-border bg-card hover:border-primary/50 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-lg text-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
