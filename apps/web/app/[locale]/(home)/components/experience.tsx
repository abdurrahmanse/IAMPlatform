const EXPERIENCE = [
  {
    company: "TechNova Inc.",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    description: "Leading the frontend team to build scalable web applications. Mentoring junior developers and establishing best practices."
  },
  {
    company: "Creative Studio",
    role: "Fullstack Developer",
    period: "2019 - 2022",
    description: "Developed and maintained multiple client projects, focusing on performant React applications and robust Node.js backends."
  },
  {
    company: "Startup Co.",
    role: "Frontend Engineer",
    period: "2017 - 2019",
    description: "Collaborated with designers to implement pixel-perfect user interfaces and responsive web experiences."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 lg:py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter sticky top-24">Experience.</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="text-muted-foreground font-mono bg-background px-3 py-1 text-sm border border-border">{exp.period}</span>
                </div>
                <h4 className="text-xl font-medium text-foreground/80">{exp.company}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
