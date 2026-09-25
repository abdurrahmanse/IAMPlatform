import { Button } from "@repo/design-system/components/ui/button";
import type { Dictionary } from "@repo/internationalization";
import { Mail } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  dictionary: Dictionary;
}

export const CTA = ({ dictionary }: CTAProps) => (
  <section className="w-full py-20 lg:py-40 bg-foreground text-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
        <h2 className="font-bold text-5xl md:text-7xl tracking-tighter">
          Let's build something great.
        </h2>
        <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-medium">
          I am currently available for freelance work and new opportunities.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="h-16 px-12 text-xl font-bold rounded-none bg-transparent text-background border-background hover:bg-background hover:text-foreground">
            <Link href="/contact">
              Say Hello <Mail className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
