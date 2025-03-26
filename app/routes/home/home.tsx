import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import NavBar from "~/components/ui/navbar";
import { Link } from "react-router";
import { CirclePlay } from "lucide-react";
import Hero from "~/components/pages/home/hero";
import Features from "~/components/pages/home/features";
import Benefits from "~/components/pages/home/benefits";
import About from "~/components/pages/home/about";
import Download from "~/components/pages/home/download";
import Footer from "~/components/ui/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dartsia" },
    { name: "description", content: "Welcome to the our website" },
    
  ];
}

export default function Home(props: Route.ComponentProps) {
  return (
    <main>
      {/* navbar */}
      <NavBar />

      {/* Hero page */}
      <Hero />

      {/* big centered Logo surronded by border top and bottom */}
      <section className="bg-background mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-b border-border mb-8">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Feature section */}
      <Features />

      {/* Benefit section */}
      <Benefits/>

      {/* AboutUs section */}
      <About/>

      {/* Download section */}
      <Download/>

      {/* Footer */}
      <Footer />
    </main>
  );
}
