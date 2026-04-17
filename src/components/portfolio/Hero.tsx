import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import vivekPhoto from "@/assets/vivek-photo.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 [background-image:radial-gradient(oklch(1_0_0/0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
              Available for Senior / Lead Engineering roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]"
            >
              Building scalable backends &{" "}
              <span className="text-gradient">full-stack systems</span> that ship.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            >
              I'm{" "}
              <span className="text-foreground font-medium">Vivek Padelkar</span> — a
              Senior Node.js Engineer with 10+ years architecting high-traffic
              microservices, leading teams, and turning complex business logic
              into resilient, observable platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
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
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-muted-foreground"
            >
              <a
                href="https://linkedin.com/in/vivekpadelkar"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vivek.padelkar@gmail.com"
                aria-label="Email"
                className="hover:text-foreground transition"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-foreground transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs">
                <MapPin className="h-3.5 w-3.5" /> Mumbai, India
              </span>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-primary rounded-full blur-3xl opacity-25" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow bg-gradient-to-br from-primary/10 to-accent-2/10">
                <img
                  src={vivekPhoto}
                  alt="Vivek Padelkar — Senior Node.js Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { k: "10+", v: "Years experience" },
            { k: "85%+", v: "Test coverage" },
            { k: "40%", v: "Lower DB load" },
            { k: "60%", v: "Faster deploys" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-xl p-4 text-center md:text-left">
              <div className="text-2xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
