import { Button } from "@repo/design-system/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-8 py-20 lg:py-40 max-w-4xl">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-6xl tracking-tighter md:text-8xl leading-tight text-foreground">
              Software Engineer <br />
              <span className="text-muted-foreground">and Designer.</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-tight md:text-2xl mt-4 font-medium">
              I build scalable applications and craft intuitive digital experiences. Specializing in modern web technologies and minimalist design.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold rounded-none">
              <Link href="/contact">
                Get in touch <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-none">
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
