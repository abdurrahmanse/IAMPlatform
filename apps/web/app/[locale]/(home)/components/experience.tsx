const EXPERIENCE = [
  {
    company: "TechNova Inc.",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    description:
      "Leading the frontend team to build scalable web applications. Mentoring junior developers and establishing best practices.",
  },
  {
    company: "Creative Studio",
    role: "Fullstack Developer",
    period: "2019 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on performant React applications and robust Node.js backends.",
  },
  {
    company: "Startup Co.",
    role: "Frontend Engineer",
    period: "2017 - 2019",
    description:
      "Collaborated with designers to implement pixel-perfect user interfaces and responsive web experiences.",
  },
];

export const Experience = () => {
  return (
    <section className="w-full bg-muted/30 py-20 lg:py-40" id="experience">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="sticky top-24 font-bold text-4xl tracking-tighter md:text-6xl">
              Experience.
            </h2>
          </div>
          <div className="flex flex-col gap-12 lg:col-span-8">
            {EXPERIENCE.map((exp, idx) => (
              <div className="flex flex-col gap-4" key={idx}>
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="font-bold text-2xl">{exp.role}</h3>
                  <span className="border border-border bg-background px-3 py-1 font-mono text-muted-foreground text-sm">
                    {exp.period}
                  </span>
                </div>
                <h4 className="font-medium text-foreground/80 text-xl">
                  {exp.company}
                </h4>
                <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
