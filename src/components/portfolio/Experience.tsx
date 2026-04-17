import { Section } from "./Section";

const jobs = [
  {
    company: "Zuno General Insurance",
    role: "Senior Software Engineer",
    period: "Oct 2022 — Present",
    location: "Mumbai",
    bullets: [
      "Architected scalable Node.js + Express microservices for high-traffic insurance workloads.",
      "Led a team of 3 engineers — code reviews, mentorship, technical direction.",
      "Cut DB load 40% and improved API response times 30% with Redis caching strategies.",
      "Drove Jest coverage to 85%+, reducing post-deployment defects by 40%.",
      "Tuned PostgreSQL queries & indexes — 45% latency improvement.",
      "Reduced production downtime 35% with SkyWalking + Sentry observability.",
      "Automated CI/CD with Git, Jenkins and AWS — 60% faster deploys.",
    ],
  },
  {
    company: "LearningMate",
    role: "Technical Lead",
    period: "Sep 2022 — Oct 2022",
    location: "Mumbai",
    bullets: [
      "Owned backend architecture and coding standards for the team.",
      "Optimized PostgreSQL & MySQL schemas — 30% faster query execution.",
      "Mentored junior devs on Node.js best practices and debugging.",
    ],
  },
  {
    company: "Mphasis",
    role: "Software Engineer",
    period: "Jul 2021 — Aug 2022",
    bullets: [
      "Built scalable backend services in Node.js + TypeScript with REST APIs.",
      "Reduced system downtime 20% via proactive UAT and production debugging.",
      "Partnered with Angular & React teams for smooth API integrations.",
    ],
  },
  {
    company: "Brainvire Infotech",
    role: "Software Engineer",
    period: "Mar 2021 — Jun 2021",
    bullets: [
      "Delivered Node.js + Express services with business logic and DB integration.",
      "Contributed to Agile sprints and rapid defect resolution.",
    ],
  },
  {
    company: "TantraSoft Solutions",
    role: "Software Engineer",
    period: "Mar 2018 — Mar 2021",
    bullets: [
      "Owned end-to-end full-stack delivery on Node, React, MongoDB and MySQL.",
      "Designed APIs, React components and DB schemas for seamless integration.",
      "Built custom dashboards & data viz to power client decisions.",
    ],
  },
  {
    company: "Trackon Courier",
    role: "Software Developer",
    period: "Dec 2017 — Mar 2018",
    bullets: ["Built and maintained software for courier management operations."],
  },
  {
    company: "Greysoft Solutions",
    role: "Trainee VBA Developer",
    period: "May 2016 — Dec 2017",
    bullets: [
      "Designed UIs and ran code reviews in VB.net, VB6 and MSSQL.",
      "Wrote complex SQL for high-performance data retrieval.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>10+ years, <span className="text-gradient">measurable impact</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent" />
        <div className="space-y-8">
          {jobs.map((j) => (
            <div key={j.company + j.period} className="relative pl-10 md:pl-14">
              <div className="absolute left-0 md:left-1 top-2 h-6 w-6 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-background" />
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{j.role}</h3>
                    <p className="text-sm text-primary">{j.company}{j.location ? ` · ${j.location}` : ""}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{j.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {j.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
