import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-lg">
          <span className="text-gradient">VP.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Vivek_Padelkar_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition shadow-glow"
        >
          <Download className="h-4 w-4" /> Resume
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-xl p-4 flex flex-col gap-3 bg-card border border-border shadow-elegant backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-foreground/90 hover:text-primary transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Vivek_Padelkar_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      )}
    </header>
  );
}
