import { createFileRoute } from "@tanstack/react-router";
import arshPhoto from "@/assets/arsh.png.asset.json";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsh Tyagi — Full Stack Developer" },
      {
        name: "description",
        content:
          "Arsh Tyagi: freelance full stack developer in Noida building React web apps, FastAPI / Express REST APIs, and Python automation.",
      },
      { property: "og:title", content: "Arsh Tyagi — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Freelance developer building web apps, REST APIs, and Python automation.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    year: "2026",
    title: "DevAPI Toolkit",
    blurb:
      "Production-ready FastAPI starter with auth, rate limiting, background workers, and auto-generated OpenAPI docs.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    role: "Design · Backend",
    demo: "#",
    code: "https://github.com/arshdevx",
  },
  {
    n: "02",
    year: "2025",
    title: "Pixelcrate",
    blurb:
      "Full-stack React + Express media library with Cloudinary uploads, tag search, and shareable collections.",
    stack: ["React", "Express", "MongoDB", "Cloudinary"],
    role: "Full stack",
    demo: "#",
    code: "https://github.com/arshdevx",
  },
  {
    n: "03",
    year: "2025",
    title: "AutoScribe Bot",
    blurb:
      "Python automation that scrapes news sources, summarizes with an LLM, and ships digests to Telegram on a cron.",
    stack: ["Python", "Playwright", "OpenAI", "Telegram"],
    role: "Automation",
    demo: "#",
    code: "https://github.com/arshdevx",
  },
];

const stack: Record<string, { name: string; badge: string }[]> = {
  Frontend: [
    { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
    { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
  ],
  Backend: [
    { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
    { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
  ],
  "Databases & Storage": [
    { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "Redis", badge: "https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white" },
  ],
  "Cloud & Tools": [
    { name: "Cloudinary", badge: "https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" },
    { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
    { name: "VS Code", badge: "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
  ],
  Interests: [
    { name: "AI / ML", badge: "https://img.shields.io/badge/AI%2FML-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
    { name: "Web Dev", badge: "https://img.shields.io/badge/Web%20Dev-6EE7F7?style=for-the-badge&logo=vercel&logoColor=black" },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top status bar */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-9 flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          <span>Arsh Tyagi · Portfolio</span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for freelance — Q3 2026
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm font-medium tracking-tight">
            arsh<span className="text-primary">.</span>dev
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#stack" className="hover:text-foreground transition">Stack</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="mailto:arshcodes1@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-border px-3 py-1.5 rounded hover:bg-secondary transition"
          >
            Email <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero — name first, small inline portrait */}
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex items-center gap-4 mb-10">
            <img
              src={arshPhoto.url}
              alt="Arsh Tyagi"
              className="h-12 w-12 rounded-full object-cover border border-border grayscale"
            />
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">Arsh Tyagi</div>
              <div className="font-mono text-xs text-muted-foreground">
                Noida, IN · IST (UTC+5:30)
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Full-stack developer building{" "}
            <span className="text-muted-foreground">web apps, REST APIs, and Python automation</span>{" "}
            that actually ship.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            I work with founders and small teams to design, build, and maintain
            production systems — from React frontends to FastAPI services and
            the glue in between.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 font-medium border-b border-foreground/40 hover:border-foreground transition pb-0.5"
            >
              View selected work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
            >
              Get in touch →
            </a>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="py-20 border-t border-border">
          <SectionHeader index="01" label="Selected work" title="Recent projects" />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 py-8 hover:bg-secondary/40 transition px-2 -mx-2 rounded"
              >
                <div className="font-mono text-xs text-muted-foreground pt-1.5 w-10">
                  {p.n}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.year} · {p.role}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-muted-foreground border border-border rounded px-2 py-0.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 shrink-0">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(p.code, "_blank");
                    }}
                    className="inline-flex items-center justify-center h-8 w-8 rounded border border-border hover:bg-background transition"
                    aria-label="Source"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </span>
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="py-20 border-t border-border">
          <SectionHeader index="02" label="Stack" title="Tools I work with" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border pb-3">
                  {group}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="text-sm">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-20 border-t border-border grid md:grid-cols-[200px_1fr] gap-10 md:gap-16"
        >
          <div>
            <SectionHeader index="03" label="About" title="Background" compact />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm a freelance full-stack developer based in Noida, India. Most
              of my work sits at the intersection of clean React frontends and
              Python or Node backends — with a strong bias toward shipping
              over polishing forever.
            </p>
            <p>
              I care about the boring fundamentals: readable code, sensible
              APIs, useful tests, and documentation your future teammate won't
              curse you for. Lately I've been spending more time on AI/ML and
              LLM-powered tooling.
            </p>
            <p className="text-foreground">
              Typically responds within{" "}
              <span className="text-primary font-medium">24 hours</span>.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-24 border-t border-border"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            04 — Contact
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Have a project in mind?
            <br />
            <span className="text-muted-foreground">Let's talk.</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border border border-border rounded overflow-hidden max-w-2xl">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="arshcodes1@gmail.com"
              href="mailto:arshcodes1@gmail.com"
            />
            <ContactRow
              icon={<Send className="h-4 w-4" />}
              label="Telegram"
              value="@anikyn"
              href="https://t.me/anikyn"
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/arshdevx"
              href="https://linkedin.com/in/arshdevx"
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="github.com/arshdevx"
              href="https://github.com/arshdevx"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>© {new Date().getFullYear()} Arsh Tyagi</span>
          <span>Built in Noida · v2026.06</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  index,
  label,
  title,
  compact = false,
}: {
  index: string;
  label: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {index} — {label}
      </p>
      <h2
        className={
          compact
            ? "mt-3 text-2xl font-semibold tracking-tight"
            : "mt-3 text-3xl md:text-4xl font-semibold tracking-tight"
        }
      >
        {title}
      </h2>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group bg-background hover:bg-secondary/60 transition p-5 flex items-center justify-between gap-4"
    >
      <div className="min-w-0">
        <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          {icon} {label}
        </div>
        <div className="mt-1.5 text-sm truncate">{value}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0" />
    </a>
  );
}