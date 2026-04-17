import { useState } from "react";
import { Section } from "./Section";
import { Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:vivek.padelkar@gmail.com?subject=Portfolio%20inquiry%20from%20${name}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">remarkable</span>.</>}
      description="Open to senior backend / full-stack / tech lead roles and consulting. I'll reply within a day."
    >
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 flex flex-col gap-4">
          {[
            { icon: Mail, label: "Email", value: "vivek.padelkar@gmail.com", href: "mailto:vivek.padelkar@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 7666918811", href: "tel:+917666918811" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vivekpadelkar", href: "https://linkedin.com/in/vivekpadelkar" },
            { icon: MapPin, label: "Location", value: "Mumbai, India" },
          ].map((c) => {
            const Inner = (
              <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] transition">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 glass rounded-2xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-muted-foreground">Name</span>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="text-xs text-muted-foreground">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs text-muted-foreground">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition shadow-glow"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && <p className="text-xs text-primary">Opening your email client…</p>}
        </form>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Vivek Padelkar. Crafted with care.</p>
        <p>Built with React, Tailwind & Framer Motion.</p>
      </footer>
    </Section>
  );
}
