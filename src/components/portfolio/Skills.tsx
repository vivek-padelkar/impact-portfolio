import { Section } from "./Section";

const groups = [
  { title: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Microservices", "Python"] },
  { title: "Frontend", items: ["TypeScript", "JavaScript", "ReactJS", "Angular", "HTML5", "CSS3"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization"] },
  { title: "DevOps & Cloud", items: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Git", "CI/CD", "Jenkins"] },
  { title: "Testing & Quality", items: ["Jest", "Jasmine", "TDD", "Integration Testing"] },
  { title: "Observability & Tools", items: ["Apache SkyWalking", "Sentry", "Metabase", "Appsmith"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The toolkit behind the <span className="text-gradient">results</span>.</>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-primary/50 hover:text-primary transition"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
