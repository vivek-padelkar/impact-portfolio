import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 [background-image:radial-gradient(oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
          Available for Senior / Lead Engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
        >
          Building scalable backends &{" "}
          <span className="text-gradient">full-stack systems</span> that ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl"
        >
          I'm <span className="text-foreground font-medium">Vivek Padelkar</span> — a Senior Node.js Engineer with 10+ years architecting
          high-traffic microservices, leading teams, and turning complex business logic into resilient, observable platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            View my work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/Vivek_Padelkar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:bg-white/10 transition"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex items-center gap-5 text-muted-foreground"
        >
          <a href="https://linkedin.com/in/vivekpadelkar" target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:vivek.padelkar@gmail.com" className="hover:text-foreground transition"><Mail className="h-5 w-5" /></a>
          <a href="#" className="hover:text-foreground transition"><Github className="h-5 w-5" /></a>
          <span className="text-xs ml-2">Mumbai, India · +91 7666918811</span>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { k: "10+", v: "Years experience" },
            { k: "85%+", v: "Test coverage" },
            { k: "40%", v: "Lower DB load" },
            { k: "60%", v: "Faster deploys" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
