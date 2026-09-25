import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Next.js SaaS Boilerplate",
    description:
      "A comprehensive boilerplate for building scalable SaaS applications using Next.js, Prisma, and Stripe.",
    year: "2024",
    link: "#",
  },
  {
    title: "Minimalist E-commerce",
    description:
      "A headless e-commerce storefront with a focus on speed, accessibility, and clean design.",
    year: "2023",
    link: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An AI-powered application that helps writers overcome block and generate creative ideas.",
    year: "2023",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section className="w-full py-20 lg:py-40" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 font-bold text-4xl tracking-tighter md:text-6xl">
          Selected Work.
        </h2>

        <div className="flex flex-col">
          {PROJECTS.map((project) => (
            <Link
              className="group -mx-4 flex flex-col justify-between border-border border-b px-4 py-10 transition-colors hover:bg-muted/50 md:flex-row md:items-center"
              href={project.link}
              key={project.title}
            >
              <div className="flex max-w-2xl flex-col gap-2">
                <h3 className="font-bold text-3xl tracking-tight underline-offset-4 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-6 md:mt-0">
                <span className="font-mono text-lg text-muted-foreground">
                  {project.year}
                </span>
                <div className="flex h-12 w-12 -translate-x-4 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
