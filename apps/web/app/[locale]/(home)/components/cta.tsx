import { Button } from "@repo/design-system/components/ui/button";
import type { Dictionary } from "@repo/internationalization";
import { Mail } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  dictionary: Dictionary;
}

export const CTA = ({ dictionary }: CTAProps) => (
  <section className="w-full bg-foreground py-20 text-background lg:py-40">
    <div className="container mx-auto px-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="font-bold text-5xl tracking-tighter md:text-7xl">
          Let's build something great.
        </h2>
        <p className="font-medium text-background/80 text-xl leading-relaxed md:text-2xl">
          I am currently available for freelance work and new opportunities.
        </p>
        <div className="mt-8">
          <Button
            asChild
            className="h-16 rounded-none border-background bg-transparent px-12 font-bold text-background text-xl hover:bg-background hover:text-foreground"
            size="lg"
            variant="outline"
          >
            <Link href="/contact">
              Say Hello <Mail className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
