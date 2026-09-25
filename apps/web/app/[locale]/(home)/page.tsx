import { showBetaFeature } from "@repo/feature-flags";
import { getDictionary } from "@repo/internationalization";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { About } from "./components/about";
import { CTA } from "./components/cta";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: HomeProps): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return createMetadata(dictionary.web.home.meta);
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const betaFeature = await showBetaFeature();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-foreground py-2 text-center font-medium text-background text-xs uppercase tracking-wide">
          Available for new opportunities in 2026
        </div>
      )}
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <CTA />
    </>
  );
};

export default Home;
