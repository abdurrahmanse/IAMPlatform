const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Bun", "Express", "PostgreSQL", "Prisma", "Redis"]
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Git", "Docker", "Vercel", "AWS", "Jest"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">Expertise.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold border-b border-foreground pb-4 uppercase tracking-widest">{category.title}</h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
