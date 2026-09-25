import { Button } from "@repo/design-system/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex min-h-[80vh] w-full items-center">
      <div className="container mx-auto px-4">
        <div className="flex max-w-4xl flex-col items-start gap-8 py-20 lg:py-40">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-6xl text-foreground leading-tight tracking-tighter md:text-8xl">
              Software Engineer <br />
              <span className="text-muted-foreground">and Designer.</span>
            </h1>
            <p className="mt-4 max-w-2xl font-medium text-lg text-muted-foreground leading-relaxed tracking-tight md:text-2xl">
              I build scalable applications and craft intuitive digital
              experiences. Specializing in modern web technologies and
              minimalist design.
            </p>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <Button
              asChild
              className="h-14 rounded-none px-8 font-semibold text-lg"
              size="lg"
            >
              <Link href="/contact">
                Get in touch <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-14 rounded-none px-8 font-semibold text-lg"
              size="lg"
              variant="outline"
            >
              <Link href="#projects">
                View Work <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
