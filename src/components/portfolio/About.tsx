import { Section } from "./Section";
import { Sparkles, Users, Target, Code2 } from "lucide-react";

const pillars = [
  { icon: Code2, title: "Backend Architect", text: "Modular Node/Express microservices, dependency injection, clean domain boundaries." },
  { icon: Target, title: "Performance Obsessed", text: "Redis caching, query tuning and indexing — measurable wins, not vanity metrics." },
  { icon: Users, title: "Team Multiplier", text: "Lead 2–3 engineers, run code reviews, mentor on debugging and design." },
  { icon: Sparkles, title: "Quality First", text: "Jest-driven 85%+ coverage, observability with SkyWalking & Sentry." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A decade of shipping <span className="text-gradient">production-grade systems</span>.</>}
      description="I help product teams move fast without breaking things — designing backends that stay calm under traffic, mentoring engineers, and owning outcomes from architecture to deployment."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {pillars.map((p) => (
          <div key={p.title} className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
