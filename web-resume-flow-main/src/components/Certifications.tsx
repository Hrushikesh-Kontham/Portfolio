import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Intro to SQL",
      issuer: "Scrimba",
      date: "June 2025",
    },
    {
      title: "Social Media Marketing",
      issuer: "HP LIFE",
      date: "June 2025",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "July 2025",
    },
    {
      title: "Introduction to Front End Development",
      issuer: "Simplilearn Skill Up",
      date: "August 2025",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-4 border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-3">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
