import { createFileRoute } from "@tanstack/react-router";
import arshPhoto from "@/assets/arsh.png.asset.json";
import { Github, Linkedin, Mail, Send, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsh Tyagi — Full Stack Developer & Freelancer" },
      { name: "description", content: "Arsh Tyagi: freelance full stack developer in Noida building React web apps, Python/FastAPI REST APIs, and automation that ships." },
      { property: "og:title", content: "Arsh Tyagi — Full Stack Developer" },
      { property: "og:description", content: "Freelance developer building web apps, REST APIs, and Python automation." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "DevAPI Toolkit",
    blurb:
      "FastAPI-powered REST toolkit with auth, rate limiting, and auto-generated OpenAPI docs. Built for teams that need an API yesterday.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    demo: "#",
    code: "https://github.com/arshdevx",
  },
  {
    title: "Pixelcrate",
    blurb:
      "Full-stack React + Express media library with Cloudinary uploads, tag search, and shareable collections. Mobile-first UI.",
    stack: ["React", "Express", "MongoDB", "Cloudinary"],
    demo: "#",
    code: "https://github.com/arshdevx",
  },
  {
    title: "AutoScribe Bot",
    blurb:
      "Python automation bot that scrapes daily news sources, summarizes with an LLM, and ships digests to Telegram on a cron.",
    stack: ["Python", "Playwright", "OpenAI", "Telegram"],
    demo: "#",
    code: "https://github.com/arshdevx",
  },
];

const stack = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  Backend: ["Python", "FastAPI", "Node.js", "Express"],
  "Data & Cloud": ["PostgreSQL", "MongoDB", "Redis", "Cloudinary"],
  Tools: ["Git", "GitHub", "VS Code", "Docker"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Ambient gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-radial)" }}
      />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />
            arsh<span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#stack" className="hover:text-foreground transition">Stack</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="mailto:arshcodes1@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-2 text-primary-foreground transition hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-[1.3fr,1fr] gap-12 items-center pt-20 pb-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to freelance work
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Hey, I'm Arsh.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                I ship the things
              </span>{" "}
              other devs prototype.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Full-stack developer focused on React web apps, FastAPI &amp; Express
              REST APIs, and Python automation. I build clean, well-documented
              systems that hold up in production.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
              >
                See my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-semibold hover:bg-card transition"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Noida, IN
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" /> IST · UTC+5:30
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />
            <div
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-border/60 bg-card"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              <img
                src={arshPhoto.url}
                alt="Portrait of Arsh Tyagi"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/70 backdrop-blur-md border border-border/60 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">Arsh Tyagi</div>
                  <div className="text-xs text-muted-foreground">Full Stack · Freelancer</div>
                </div>
                <span className="text-xs font-mono text-primary">v2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* What I build */}
        <section className="py-20 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Web Apps", d: "Full-stack React frontends with Python or Express backends — built to scale and easy to hand off." },
              { t: "REST APIs", d: "Documented, tested APIs in FastAPI or Express with PostgreSQL, auth, and clean schemas." },
              { t: "Automation", d: "Python bots, scrapers, and workflow glue that quietly do the boring work for you." },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border border-border/60 bg-card/40 p-6 hover:bg-card transition"
              >
                <div
                  className="h-9 w-9 rounded-lg mb-4"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="py-20 border-t border-border/50">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm font-mono text-primary">// featured</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
                Selected projects
              </h2>
            </div>
            <a
              href="https://github.com/arshdevx"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              See all on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group relative rounded-2xl border border-border/60 bg-card/50 p-7 hover:border-primary/40 transition"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Source code"
                      className="rounded-full p-2 border border-border/60 hover:bg-background transition"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="rounded-full p-2 border border-border/60 hover:bg-background transition"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Live demo <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground font-mono">
            // Replace demo links with your live URLs in src/routes/index.tsx
          </p>
        </section>

        {/* Stack */}
        <section id="stack" className="py-20 border-t border-border/50">
          <p className="text-sm font-mono text-primary">// stack</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Tools I reach for
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-border/60 bg-card/40 p-6">
                <h3 className="text-sm font-mono text-muted-foreground">{group}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((it) => (
                    <li key={it} className="text-sm flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundImage: "var(--gradient-brand)" }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 border-t border-border/50 grid md:grid-cols-[1fr,1.5fr] gap-12">
          <div>
            <p className="text-sm font-mono text-primary">// about</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              A developer who actually finishes things.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a freelance full-stack developer based in Noida. Most of my
              work lives at the intersection of clean React frontends and
              Python/Node backends — with a strong bias toward shipping.
            </p>
            <p>
              I care about boring things: readable code, sensible APIs, useful
              tests, and docs your future teammate won't curse you for. I'm
              currently exploring more AI/ML and LLM-powered tooling.
            </p>
            <p className="text-foreground">
              Usually responds within <span className="text-primary font-semibold">24 hours</span>.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="my-20 rounded-3xl border border-border/60 p-10 md:p-16 text-center relative overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Got something to build?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              From a quick Python script to a full-stack web app — let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:arshcodes1@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
              >
                <Mail className="h-4 w-4" /> arshcodes1@gmail.com
              </a>
              <a
                href="https://t.me/anikyn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold hover:bg-background transition"
              >
                <Send className="h-4 w-4" /> Telegram
              </a>
              <a
                href="https://linkedin.com/in/arshdevx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold hover:bg-background transition"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/arshdevx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold hover:bg-background transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Arsh Tyagi. All rights reserved.</span>
          <span className="font-mono">built with care · noida, in</span>
        </div>
      </footer>
    </div>
  );
}
