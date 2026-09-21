import type { Metadata } from "next";
import { Apps } from "./components/apps";
import { CallToAction } from "./components/cta";
import { Features } from "./components/features";
import { Hero } from "./components/hero";

export const metadata: Metadata = {
  title: "IAMPlatform - Comprehensive Identity and Access Management",
  description:
    "A production-grade Identity and Access Management platform designed to secure and streamline your applications.",
};

const Home = () => (
  <main className="container mx-auto px-0 pb-24">
    <Hero />
    <div className="divide-y border-x border-y">
      <Apps />
      <Features />
      <CallToAction />
    </div>
  </main>
);

export default Home;
