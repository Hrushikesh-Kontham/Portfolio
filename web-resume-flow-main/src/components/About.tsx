import { Code2, Rocket, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to problem-solving"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results and meeting deadlines"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate developer crafting innovative solutions
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a dedicated <span className="text-foreground font-semibold">Information Technology student</span> at 
              Kakatiya Institute of Technology and Science with a strong foundation in full-stack web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a genuine love for creating solutions that make a difference. 
              I thrive in environments where I can learn, innovate, and collaborate with like-minded professionals.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in building <span className="text-foreground font-semibold">scalable, production-ready applications</span> using 
              modern technologies like Java, Spring Boot, React, and cloud platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From designing RESTful APIs to crafting intuitive user interfaces, I handle the complete development lifecycle 
              with attention to performance, security, and user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
