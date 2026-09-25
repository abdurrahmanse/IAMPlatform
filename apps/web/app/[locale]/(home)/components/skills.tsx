const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Bun", "Express", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Git", "Docker", "Vercel", "AWS", "Jest"],
  },
];

export const Skills = () => {
  return (
    <section className="w-full py-20 lg:py-40" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center font-bold text-4xl tracking-tighter md:text-6xl">
          Expertise.
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div className="flex flex-col gap-6" key={category.title}>
              <h3 className="border-foreground border-b pb-4 font-bold text-2xl uppercase tracking-widest">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <li
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                    key={skill}
                  >
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
