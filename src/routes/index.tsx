import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivek Padelkar — Senior Node.js Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Senior Node.js engineer with 10+ years building scalable backends, microservices and full-stack platforms. React, Node, PostgreSQL, AWS.",
      },
      { property: "og:title", content: "Vivek Padelkar — Senior Node.js Engineer" },
      {
        property: "og:description",
        content: "10+ years architecting backends, leading teams and shipping resilient full-stack systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
