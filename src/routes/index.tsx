import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import arshPng from "../assets/arsh.png";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

/* ── Route Definition ──────────────────────────────────────────── */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsh Tyagi — Co-founder @ Klyphic · AI & Automation" },
      {
        name: "description",
        content:
          "Arsh Tyagi: student & co-founder at Klyphic building AI agents, APIs, and automation — termai, TuneHive, and KlyForge.",
      },
      {
        property: "og:title",
        content: "Arsh Tyagi — Co-founder @ Klyphic · AI & Automation",
      },
      {
        property: "og:description",
        content:
          "Co-founder at Klyphic — building AI agents, APIs, and automation that actually ship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ── Data ──────────────────────────────────────────────────────── */

const projects = [
  {
    n: "01",
    year: "2026",
    title: "termai",
    status: "Shipped",
    blurb:
      "CLI that turns plain English into Bash commands, powered by NVIDIA NIM's LLaMA 3.3 70B. When a command fails, termai analyzes the error, proposes a fix, and retries with your permission — up to 5 attempts.",
    stack: ["Python", "NVIDIA NIM", "LLaMA 3.3", "Bash"],
    role: "AI · CLI",
    demo: "",
    code: "https://github.com/klyphic/termai",
  },
  {
    n: "02",
    year: "2026",
    title: "TuneHive",
    status: "In progress",
    blurb:
      "Free music-streaming PWA with an AI-powered recommendation engine — Bollywood, Punjabi, English, and more, no subscription needed.",
    stack: ["PWA", "JavaScript", "Python", "ML"],
    role: "ML · Product",
    demo: "https://tunehive.klyphic.in",
    code: "",
  },
  {
    n: "03",
    year: "2026",
    title: "KlyForge",
    status: "Building",
    blurb:
      "Klyphic's production-grade AI & utility API platform — a unified ecosystem for APIs, apps, and automation with predictable latency and clean contracts.",
    stack: ["FastAPI", "Python", "REST APIs", "AI"],
    role: "Co-founder · Platform",
    demo: "https://klyphic.in",
    code: "https://github.com/klyphic",
  },
];

interface TechItem {
  name: string;
  color: string;
  bg: string;
}

const techColorMap: Record<string, { color: string; bg: string }> = {
  React: { color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)" },
  JavaScript: { color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.1)" },
  HTML5: { color: "#E34F26", bg: "rgba(227, 79, 38, 0.1)" },
  CSS3: { color: "#1572B6", bg: "rgba(21, 114, 182, 0.1)" },
  Python: { color: "#3776AB", bg: "rgba(55, 118, 171, 0.1)" },
  "Express.js": { color: "#f5f5f5", bg: "rgba(245, 245, 245, 0.08)" },
  "Express": { color: "#f5f5f5", bg: "rgba(245, 245, 245, 0.08)" },
  "Node.js": { color: "#339933", bg: "rgba(51, 153, 51, 0.1)" },
  FastAPI: { color: "#009688", bg: "rgba(0, 150, 136, 0.1)" },
  Git: { color: "#F05032", bg: "rgba(240, 80, 50, 0.1)" },
  GitHub: { color: "#f5f5f5", bg: "rgba(245, 245, 245, 0.08)" },
  "VS Code": { color: "#007ACC", bg: "rgba(0, 122, 204, 0.1)" },
  "NVIDIA NIM": { color: "#76B900", bg: "rgba(118, 185, 0, 0.1)" },
  "LLaMA 3.3": { color: "#0866FF", bg: "rgba(8, 102, 255, 0.1)" },
  LLMs: { color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
  Bash: { color: "#4EAA25", bg: "rgba(78, 170, 37, 0.1)" },
  Linux: { color: "#FCC624", bg: "rgba(252, 198, 36, 0.1)" },
  PWA: { color: "#5A0FC8", bg: "rgba(90, 15, 200, 0.1)" },
  ML: { color: "#FF6F00", bg: "rgba(255, 111, 0, 0.1)" },
  "REST APIs": { color: "#6EE7F7", bg: "rgba(110, 231, 247, 0.1)" },
};

function getTechStyle(name: string) {
  return techColorMap[name] ?? { color: "#a3a3a3", bg: "rgba(163, 163, 163, 0.08)" };
}

const stack: Record<string, TechItem[]> = {
  Frontend: [
    { name: "JavaScript", ...getTechStyle("JavaScript") },
    { name: "React", ...getTechStyle("React") },
    { name: "PWA", ...getTechStyle("PWA") },
    { name: "HTML5", ...getTechStyle("HTML5") },
    { name: "CSS3", ...getTechStyle("CSS3") },
  ],
  Backend: [
    { name: "Python", ...getTechStyle("Python") },
    { name: "FastAPI", ...getTechStyle("FastAPI") },
    { name: "Node.js", ...getTechStyle("Node.js") },
    { name: "REST APIs", ...getTechStyle("REST APIs") },
  ],
  "AI & ML": [
    { name: "LLMs", ...getTechStyle("LLMs") },
    { name: "NVIDIA NIM", ...getTechStyle("NVIDIA NIM") },
    { name: "LLaMA 3.3", ...getTechStyle("LLaMA 3.3") },
    { name: "ML", ...getTechStyle("ML") },
  ],
  Tools: [
    { name: "Git", ...getTechStyle("Git") },
    { name: "GitHub", ...getTechStyle("GitHub") },
    { name: "Linux", ...getTechStyle("Linux") },
    { name: "Bash", ...getTechStyle("Bash") },
    { name: "VS Code", ...getTechStyle("VS Code") },
  ],
  Interests: [
    { name: "AI / ML", color: "#FF6F00", bg: "rgba(255, 111, 0, 0.1)" },
    { name: "Automation", color: "#6EE7F7", bg: "rgba(110, 231, 247, 0.1)" },
  ],
};

const marqueeItems = [
  "Python",
  "FastAPI",
  "JavaScript",
  "NVIDIA NIM",
  "LLMs",
  "PWA",
  "Linux",
  "Bash",
  "GitHub",
  "Automation",
];

const statusStyles: Record<string, string> = {
  Shipped: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "In progress": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Building: "text-sky-400 border-sky-400/30 bg-sky-400/10",
};

/* ── Hook: Scroll Reveal ───────────────────────────────────────── */

function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const selector = ".reveal, .reveal-left, .reveal-scale, .stagger-children";
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ── Sub-components ────────────────────────────────────────────── */

function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeMap = {
    small: { container: "h-7 w-7" },
    default: { container: "h-10 w-10" },
    large: { container: "h-14 w-14" },
  };
  const { container } = sizeMap[size];

  return (
    <div className={`relative shrink-0 rounded-full overflow-hidden ${container}`}>
      {/* Glow behind */}
      <div
        className="absolute -inset-3 rounded-full opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
        }}
      />
      <img
        src={arshPng}
        alt="Arsh Tyagi"
        className="relative h-full w-full object-cover rounded-full"
      />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 group">
      {/* Gradient border ring */}
      <div className="gradient-border rounded-full">
        {/* Glow ring behind */}
        <div
          className="absolute -inset-3 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          }}
        />
        {/* Ring with subtle rotation on hover */}
        <div className="relative h-16 w-16 rounded-full border border-border bg-surface flex items-center justify-center select-none glow-ring group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <Logo size="default" />
        </div>
      </div>
    </div>
  );
}

function AmbientOrbs() {
  return (
    <>
      {/* Top-right large orb */}
      <div
        className="ambient-orb orb-float w-72 h-72 -top-32 -right-32"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.2 120 / 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Bottom-left medium orb */}
      <div
        className="ambient-orb orb-float-slow w-56 h-56 -bottom-28 -left-28"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.15 140 / 0.06) 0%, transparent 70%)",
        }}
      />
      {/* Center subtle orb */}
      <div
        className="ambient-orb orb-drift w-40 h-40 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.2 120 / 0.04) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

/* ── Hero entrance is pure CSS (see .hero-reveal in styles.css) ─ */

function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {index}
        </span>
        <span className="divider-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
        {title}
      </h2>
    </div>
  );
}

function TechPill({ name }: { name: string }) {
  const { color, bg } = getTechStyle(name);
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] font-medium tracking-tight border transition-all duration-200"
      style={{
        color,
        backgroundColor: bg,
        borderColor: `${color}22`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      {name}
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <div
      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-5 px-4 py-7 -mx-4 rounded-xl card-lift cursor-pointer"
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Hover background */}
      <div className="absolute inset-0 rounded-xl bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Number */}
      <div className="relative z-10 font-mono text-xs text-muted-foreground pt-1 w-8 select-none">
        {project.n}
      </div>

      {/* Content */}
      <div className="relative z-10 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
            {project.year}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="font-mono text-[11px] text-muted-foreground">
            {project.role}
          </span>
          {project.status && (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border font-mono text-[10px] font-medium uppercase tracking-wider ${statusStyles[project.status] ?? "text-muted-foreground border-border bg-surface"}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <TechPill key={s} name={s} />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 flex items-start gap-2 pt-1">
        {project.code && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(project.code, "_blank", "noopener");
            }}
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-background hover:border-muted-foreground/30 hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label={`${project.title} source code`}
          >
            <Github className="h-4 w-4" />
          </button>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-muted-foreground/20 transition-all duration-300 card-lift gradient-border"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 min-w-0">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground flex items-center gap-2">
          <span className="text-primary/70 group-hover:scale-110 transition-transform duration-200">{icon}</span>
          {label}
        </div>
        <div className="mt-1.5 text-sm font-medium truncate">{value}</div>
      </div>
      <ArrowUpRight
        className="relative z-10 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 magnetic-arrow"
        aria-hidden
      />
    </a>
  );
}

function StackCard({
  group,
  items,
  index,
}: {
  group: string;
  items: TechItem[];
  index: number;
}) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="rounded-xl border border-border bg-surface/30 p-5 h-full">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground pb-3 mb-3 border-b border-border">
          {group}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((it) => (
            <span
              key={it.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] font-medium tracking-tight border transition-all duration-200 hover:scale-105"
              style={{
                color: it.color,
                backgroundColor: it.bg,
                borderColor: `${it.color}22`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: it.color }}
              />
              {it.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page Component ──────────────────────────────────────── */

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      {/* ───── Navigation (Status bar merged in) ───── */}
      <header className="sticky top-0 z-40 bg-background/75 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-tight flex items-center gap-3 group"
          >
            <Logo size="small" />
            <span className="relative">
              Arsh Tyagi
              <span className="absolute -bottom-px left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              { href: "#work", label: "Work" },
              { href: "#stack", label: "Stack" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-[0.12em]">
              <span className="status-dot" />
              Co-founder · Klyphic
            </span>
            <a
              href="mailto:arshcodes1@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-border px-3.5 py-1.5 rounded-lg hover:bg-secondary hover:border-muted-foreground/30 hover:scale-105 active:scale-95 transition-all duration-200 magnetic-btn"
            >
              Email <ArrowUpRight className="h-3 w-3 magnetic-arrow" />
            </a>
          </div>
        </div>
      </header>

      {/* ───── Main Content ───── */}
      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* ═══════ HERO ═══════ */}
        <section className="relative pt-2 pb-12 md:pt-4 md:pb-20 overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"
            style={{ maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)" }}
          />

          {/* Ambient floating orbs */}
          <AmbientOrbs />

          {/* Decorative floating dots */}
          <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/20 float-subtle pointer-events-none" />
          <div className="absolute top-2/3 left-[10%] w-2 h-2 rounded-full bg-primary/15 orb-float-slow pointer-events-none" style={{ animationDelay: "-5s" }} />
          <div className="absolute bottom-1/4 right-[25%] w-1 h-1 rounded-full bg-primary/25 breathe pointer-events-none" style={{ animationDelay: "-2s" }} />

          <div className="relative z-10">
            {/* Avatar + meta row */}
            <div className="flex items-center gap-5 mb-6 hero-reveal" style={{ animationDelay: "0ms" }}>
              <Avatar />
              <div className="min-w-0">
                <div className="text-base font-semibold flex items-center gap-2">
                  Arsh Tyagi
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary font-medium uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-glow" />
                    Co-founder @ Klyphic
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                  <span>Noida, IN · IST (UTC+5:30)</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Student · AI & automation</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl hero-reveal" style={{ animationDelay: "120ms" }}>
              Student & co-founder
              <br />
              building{" "}
              <span className="gradient-text">AI agents, APIs,</span>
              <br />
              <span className="text-muted-foreground">and automation</span>
              {" "}that actually ship.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed hero-reveal" style={{ animationDelay: "240ms" }}>
              I'm a student and co-founder of Klyphic — building AI,
              APIs, and automation across developer tools, streaming
              platforms, and a unified API ecosystem.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm hero-reveal" style={{ animationDelay: "360ms" }}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 magnetic-btn"
              >
                <span>View selected work</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-colors duration-200">
                  <ArrowUpRight className="h-3.5 w-3.5 magnetic-arrow" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground/40 pb-0.5 transition-all duration-200"
              >
                Get in touch &nbsp;→
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ TECH MARQUEE ═══════ */}
        <div
          className="marquee border-y border-border py-4 -mx-6 overflow-hidden select-none"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-10 pr-10 shrink-0">
                {marqueeItems.map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ SELECTED WORK ═══════ */}
        <section
          id="work"
          className="py-24 md:py-32 border-t border-border section-spacer"
        >
          <div className="reveal">
            <SectionHeader
              index="01"
              label="Selected work"
              title="Recent projects"
            />
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border rounded-xl overflow-hidden">
            {projects.map((p, i) => (
              <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ STACK ═══════ */}
        <section id="stack" className="py-24 md:py-32 border-t border-border section-spacer">
          <div className="reveal">
            <SectionHeader index="02" label="Stack" title="Tools I work with" />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(stack).map(([group, items], i) => (
              <StackCard key={group} group={group} items={items} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════ ABOUT ═══════ */}
        <section id="about" className="py-24 md:py-32 border-t border-border section-spacer">
          <div className="grid md:grid-cols-[240px_1fr] gap-12 md:gap-20">
            <div className="reveal-left">
              <SectionHeader
                index="03"
                label="About"
                title="Background"
              />
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl reveal">
              <p className="text-foreground/90">
                I'm a student and co-founder of Klyphic, a tech ecosystem
                building AI, APIs, apps, and automation. With my co-founders,
                I ship developer tools, consumer products, and the
                infrastructure that powers them.
              </p>
              <p>
                My work sits at the intersection of Python and JavaScript —
                from LLM-powered CLIs like termai to ML-driven products like
                TuneHive and the KlyForge API platform. I care about the
                boring fundamentals: readable code, sensible APIs, and
                documentation your future teammate won't curse you for.
              </p>
              {/* Stat-like CTA */}
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-foreground font-medium text-sm whitespace-nowrap">
                  Typically responds within{" "}
                  <span
                    className="text-primary font-semibold"
                    style={{ textShadow: "0 0 20px var(--glow)" }}
                  >
                    24 hours
                  </span>
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section
          id="contact"
          className="py-24 md:py-32 border-t border-border section-spacer"
>
          <div className="reveal">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              04 — Contact
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
              Have a project in mind?
              <br />
              <span className="gradient-text">Let's talk.</span>
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl reveal">
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="arshcodes1@gmail.com"
              href="mailto:arshcodes1@gmail.com"
            />
            <ContactCard
              icon={<Send className="h-4 w-4" />}
              label="Telegram"
              value="@anikyn"
              href="https://t.me/anikyn"
            />
            <ContactCard
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/arshdevx"
              href="https://linkedin.com/in/arshdevx"
            />
            <ContactCard
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="github.com/arshdevx"
              href="https://github.com/arshdevx"
            />
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Arsh Tyagi</span>
          <span>v2026.09</span>
        </div>
      </footer>
    </div>
  );
}
