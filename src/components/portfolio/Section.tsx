import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{title}</h2>
          {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
