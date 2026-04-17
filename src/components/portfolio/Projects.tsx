import { useMemo, useState } from "react";
import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Insurance Policy Microservices Platform",
    description:
      "Modular Node.js + Express microservices powering policy issuance, claims and quotes for a high-traffic insurer.",
    impact: "Cut API latency by 30% and DB load by 40% through Redis caching and query tuning.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
  {
    title: "Observability & Incident Response Stack",
    description:
      "End-to-end tracing, error tracking and alerting setup using Apache SkyWalking + Sentry across services.",
    impact: "Reduced production downtime 35% via proactive issue detection.",
    stack: ["SkyWalking", "Sentry", "Node.js", "Jenkins"],
  },
  {
    title: "CI/CD Automation Pipeline",
    description:
      "Git-based pipeline with Jenkins and AWS deploy targets — repeatable, gated, observable releases.",
    impact: "60% faster deployments with safer rollouts.",
    stack: ["Jenkins", "AWS", "Docker", "Git"],
  },
  {
    title: "Full-Stack Reporting Dashboard",
    description:
      "React + Node dashboard delivering custom reports and visualizations for client decision-making.",
    impact: "Replaced ad-hoc Excel workflows with self-serve analytics.",
    stack: ["ReactJS", "Node.js", "MongoDB", "Metabase"],
  },
  {
    title: "Test Automation Framework",
    description:
      "Jest-based unit + integration testing strategy with CI gating and coverage reporting.",
    impact: "85%+ coverage and 40% fewer post-deploy defects.",
    stack: ["Jest", "Node.js", "TypeScript"],
  },
  {
    title: "Internal Ops Tooling (Low-Code)",
    description:
      "Appsmith-based internal tools wired to Node APIs — replacing manual back-office workflows.",
    impact: "Weeks of dev time saved per internal request.",
    stack: ["Appsmith", "Node.js", "PostgreSQL"],
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected work, real <span className="text-gradient">outcomes</span>.</>}
      description="A snapshot of systems I've designed and shipped. Filter by stack to see the relevant work."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              filter === t
                ? "bg-gradient-primary text-primary-foreground border-transparent"
                : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex gap-2 text-muted-foreground">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-foreground">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">{p.description}</p>
              <p className="text-sm mt-3">
                <span className="text-primary">Impact:</span>{" "}
                <span className="text-foreground/90">{p.impact}</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
