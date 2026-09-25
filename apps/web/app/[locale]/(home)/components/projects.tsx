import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Next.js SaaS Boilerplate",
    description: "A comprehensive boilerplate for building scalable SaaS applications using Next.js, Prisma, and Stripe.",
    year: "2024",
    link: "#"
  },
  {
    title: "Minimalist E-commerce",
    description: "A headless e-commerce storefront with a focus on speed, accessibility, and clean design.",
    year: "2023",
    link: "#"
  },
  {
    title: "AI Writing Assistant",
    description: "An AI-powered application that helps writers overcome block and generate creative ideas.",
    year: "2023",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">Selected Work.</h2>
        
        <div className="flex flex-col">
          {PROJECTS.map((project, idx) => (
            <Link 
              key={idx} 
              href={project.link}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-border hover:bg-muted/50 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-3xl font-bold tracking-tight group-hover:underline underline-offset-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex items-center gap-6 mt-6 md:mt-0">
                <span className="text-lg font-mono text-muted-foreground">{project.year}</span>
                <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
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
