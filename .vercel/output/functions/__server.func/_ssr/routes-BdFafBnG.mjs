import { r as __toESM } from "../_runtime.mjs";
import { t as arsh_default } from "./arsh-BtPVeBCJ.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ExternalLink, i as Github, n as Mail, o as ArrowUpRight, r as Linkedin, t as Send } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdFafBnG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		n: "01",
		year: "2026",
		title: "termai",
		status: "Shipped",
		blurb: "CLI that turns plain English into Bash commands, powered by NVIDIA NIM's LLaMA 3.3 70B. When a command fails, termai analyzes the error, proposes a fix, and retries with your permission — up to 5 attempts.",
		stack: [
			"Python",
			"NVIDIA NIM",
			"LLaMA 3.3",
			"Bash"
		],
		role: "AI · CLI",
		demo: "",
		code: "https://github.com/klyphic/termai"
	},
	{
		n: "02",
		year: "2026",
		title: "TuneHive",
		status: "In progress",
		blurb: "Free music-streaming PWA with an AI-powered recommendation engine — Bollywood, Punjabi, English, and more, no subscription needed.",
		stack: [
			"PWA",
			"JavaScript",
			"Python",
			"ML"
		],
		role: "ML · Product",
		demo: "https://tunehive.klyphic.in",
		code: ""
	},
	{
		n: "03",
		year: "2026",
		title: "KlyForge",
		status: "Building",
		blurb: "Klyphic's production-grade AI & utility API platform — a unified ecosystem for APIs, apps, and automation with predictable latency and clean contracts.",
		stack: [
			"FastAPI",
			"Python",
			"REST APIs",
			"AI"
		],
		role: "Co-founder · Platform",
		demo: "https://klyphic.in",
		code: "https://github.com/klyphic"
	}
];
var techColorMap = {
	React: {
		color: "#61DAFB",
		bg: "rgba(97, 218, 251, 0.1)"
	},
	JavaScript: {
		color: "#F7DF1E",
		bg: "rgba(247, 223, 30, 0.1)"
	},
	HTML5: {
		color: "#E34F26",
		bg: "rgba(227, 79, 38, 0.1)"
	},
	CSS3: {
		color: "#1572B6",
		bg: "rgba(21, 114, 182, 0.1)"
	},
	Python: {
		color: "#3776AB",
		bg: "rgba(55, 118, 171, 0.1)"
	},
	"Express.js": {
		color: "#f5f5f5",
		bg: "rgba(245, 245, 245, 0.08)"
	},
	"Express": {
		color: "#f5f5f5",
		bg: "rgba(245, 245, 245, 0.08)"
	},
	"Node.js": {
		color: "#339933",
		bg: "rgba(51, 153, 51, 0.1)"
	},
	FastAPI: {
		color: "#009688",
		bg: "rgba(0, 150, 136, 0.1)"
	},
	Git: {
		color: "#F05032",
		bg: "rgba(240, 80, 50, 0.1)"
	},
	GitHub: {
		color: "#f5f5f5",
		bg: "rgba(245, 245, 245, 0.08)"
	},
	"VS Code": {
		color: "#007ACC",
		bg: "rgba(0, 122, 204, 0.1)"
	},
	"NVIDIA NIM": {
		color: "#76B900",
		bg: "rgba(118, 185, 0, 0.1)"
	},
	"LLaMA 3.3": {
		color: "#0866FF",
		bg: "rgba(8, 102, 255, 0.1)"
	},
	LLMs: {
		color: "#7C3AED",
		bg: "rgba(124, 58, 237, 0.1)"
	},
	Bash: {
		color: "#4EAA25",
		bg: "rgba(78, 170, 37, 0.1)"
	},
	Linux: {
		color: "#FCC624",
		bg: "rgba(252, 198, 36, 0.1)"
	},
	PWA: {
		color: "#5A0FC8",
		bg: "rgba(90, 15, 200, 0.1)"
	},
	ML: {
		color: "#FF6F00",
		bg: "rgba(255, 111, 0, 0.1)"
	},
	"REST APIs": {
		color: "#6EE7F7",
		bg: "rgba(110, 231, 247, 0.1)"
	}
};
function getTechStyle(name) {
	return techColorMap[name] ?? {
		color: "#a3a3a3",
		bg: "rgba(163, 163, 163, 0.08)"
	};
}
var stack = {
	Frontend: [
		{
			name: "JavaScript",
			...getTechStyle("JavaScript")
		},
		{
			name: "React",
			...getTechStyle("React")
		},
		{
			name: "PWA",
			...getTechStyle("PWA")
		},
		{
			name: "HTML5",
			...getTechStyle("HTML5")
		},
		{
			name: "CSS3",
			...getTechStyle("CSS3")
		}
	],
	Backend: [
		{
			name: "Python",
			...getTechStyle("Python")
		},
		{
			name: "FastAPI",
			...getTechStyle("FastAPI")
		},
		{
			name: "Node.js",
			...getTechStyle("Node.js")
		},
		{
			name: "REST APIs",
			...getTechStyle("REST APIs")
		}
	],
	"AI & ML": [
		{
			name: "LLMs",
			...getTechStyle("LLMs")
		},
		{
			name: "NVIDIA NIM",
			...getTechStyle("NVIDIA NIM")
		},
		{
			name: "LLaMA 3.3",
			...getTechStyle("LLaMA 3.3")
		},
		{
			name: "ML",
			...getTechStyle("ML")
		}
	],
	Tools: [
		{
			name: "Git",
			...getTechStyle("Git")
		},
		{
			name: "GitHub",
			...getTechStyle("GitHub")
		},
		{
			name: "Linux",
			...getTechStyle("Linux")
		},
		{
			name: "Bash",
			...getTechStyle("Bash")
		},
		{
			name: "VS Code",
			...getTechStyle("VS Code")
		}
	],
	Interests: [{
		name: "AI / ML",
		color: "#FF6F00",
		bg: "rgba(255, 111, 0, 0.1)"
	}, {
		name: "Automation",
		color: "#6EE7F7",
		bg: "rgba(110, 231, 247, 0.1)"
	}]
};
var marqueeItems = [
	"Python",
	"FastAPI",
	"JavaScript",
	"NVIDIA NIM",
	"LLMs",
	"PWA",
	"Linux",
	"Bash",
	"GitHub",
	"Automation"
];
var statusStyles = {
	Shipped: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
	"In progress": "text-amber-400 border-amber-400/30 bg-amber-400/10",
	Building: "text-sky-400 border-sky-400/30 bg-sky-400/10"
};
function useScrollReveal() {
	const initialized = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (initialized.current) return;
		initialized.current = true;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("revealed");
			});
		}, {
			threshold: .08,
			rootMargin: "0px 0px -40px 0px"
		});
		document.querySelectorAll(".reveal, .reveal-left, .reveal-scale, .stagger-children").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
}
function Logo({ size = "default" }) {
	const { container } = {
		small: { container: "h-7 w-7" },
		default: { container: "h-10 w-10" },
		large: { container: "h-14 w-14" }
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative shrink-0 rounded-full overflow-hidden ${container}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -inset-3 rounded-full opacity-50 pointer-events-none",
			style: { background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: arsh_default,
			alt: "Arsh Tyagi",
			className: "relative h-full w-full object-cover rounded-full"
		})]
	});
}
function Avatar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative shrink-0 group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gradient-border rounded-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -inset-3 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500",
				style: { background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-16 w-16 rounded-full border border-border bg-surface flex items-center justify-center select-none glow-ring group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "default" })
			})]
		})
	});
}
function AmbientOrbs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-orb orb-float w-72 h-72 -top-32 -right-32",
			style: { background: "radial-gradient(circle, oklch(0.85 0.2 120 / 0.08) 0%, transparent 70%)" }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-orb orb-float-slow w-56 h-56 -bottom-28 -left-28",
			style: { background: "radial-gradient(circle, oklch(0.75 0.15 140 / 0.06) 0%, transparent 70%)" }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ambient-orb orb-drift w-40 h-40 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2",
			style: { background: "radial-gradient(circle, oklch(0.85 0.2 120 / 0.04) 0%, transparent 70%)" }
		})
	] });
}
function SectionHeader({ index, label, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 mb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "divider-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
				children: label
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]",
		children: title
	})] });
}
function TechPill({ name }) {
	const { color, bg } = getTechStyle(name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] font-medium tracking-tight border transition-all duration-200",
		style: {
			color,
			backgroundColor: bg,
			borderColor: `${color}22`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-1.5 h-1.5 rounded-full shrink-0",
			style: { backgroundColor: color }
		}), name]
	});
}
function ProjectCard({ project, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative grid grid-cols-[auto_1fr_auto] items-start gap-5 px-4 py-7 -mx-4 rounded-xl card-lift cursor-pointer",
		style: { transitionDelay: `${index * 80}ms` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 font-mono text-xs text-muted-foreground pt-1 w-8 select-none",
				children: project.n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-3 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-200",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted-foreground tracking-wide",
								children: project.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: project.role
							}),
							project.status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border font-mono text-[10px] font-medium uppercase tracking-wider ${statusStyles[project.status] ?? "text-muted-foreground border-border bg-surface"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-current animate-pulse" }), project.status]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl",
						children: project.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: project.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechPill, { name: s }, s))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-start gap-2 pt-1",
				children: [project.code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						window.open(project.code, "_blank", "noopener");
					},
					className: "flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-background hover:border-muted-foreground/30 hover:scale-110 active:scale-95 transition-all duration-200",
					"aria-label": `${project.title} source code`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
				}), project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: project.demo,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200",
					"aria-label": `${project.title} live demo`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
				})]
			})
		]
	});
}
function ContactCard({ icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noopener noreferrer",
		className: "group relative flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-muted-foreground/20 transition-all duration-300 card-lift gradient-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary/70 group-hover:scale-110 transition-transform duration-200",
						children: icon
					}), label]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 text-sm font-medium truncate",
					children: value
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "relative z-10 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 magnetic-arrow",
				"aria-hidden": true
			})
		]
	});
}
function StackCard({ group, items, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "reveal",
		style: { transitionDelay: `${index * 100}ms` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-surface/30 p-5 h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground pb-3 mb-3 border-b border-border",
				children: group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] font-medium tracking-tight border transition-all duration-200 hover:scale-105",
					style: {
						color: it.color,
						backgroundColor: it.bg,
						borderColor: `${it.color}22`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-1.5 h-1.5 rounded-full shrink-0",
						style: { backgroundColor: it.color }
					}), it.name]
				}, it.name))
			})]
		})
	});
}
function Index() {
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 bg-background/75 backdrop-blur-xl border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 h-14 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "font-mono text-sm font-medium tracking-tight flex items-center gap-3 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "small" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative",
								children: ["Arsh Tyagi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-px left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-8 text-sm",
							children: [
								{
									href: "#work",
									label: "Work"
								},
								{
									href: "#stack",
									label: "Stack"
								},
								{
									href: "#about",
									label: "About"
								},
								{
									href: "#contact",
									label: "Contact"
								}
							].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:after:w-full",
								children: link.label
							}, link.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-[0.12em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), "Co-founder · Klyphic"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:arshcodes1@gmail.com",
								className: "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-border px-3.5 py-1.5 rounded-lg hover:bg-secondary hover:border-muted-foreground/30 hover:scale-105 active:scale-95 transition-all duration-200 magnetic-btn",
								children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 magnetic-arrow" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative pt-2 pb-12 md:pt-4 md:pb-20 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientOrbs, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/20 float-subtle pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-2/3 left-[10%] w-2 h-2 rounded-full bg-primary/15 orb-float-slow pointer-events-none",
								style: { animationDelay: "-5s" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-1/4 right-[25%] w-1 h-1 rounded-full bg-primary/25 breathe pointer-events-none",
								style: { animationDelay: "-2s" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-5 mb-6 hero-reveal",
										style: { animationDelay: "0ms" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-base font-semibold flex items-center gap-2",
												children: ["Arsh Tyagi", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary font-medium uppercase tracking-wider",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary pulse-glow" }), "Co-founder @ Klyphic"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-mono text-xs text-muted-foreground flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Noida, IN · IST (UTC+5:30)" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-border" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Student · AI & automation" })
												]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl hero-reveal",
										style: { animationDelay: "120ms" },
										children: [
											"Student & co-founder",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"building",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "gradient-text",
												children: "AI agents, APIs,"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "and automation"
											}),
											" ",
											"that actually ship."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed hero-reveal",
										style: { animationDelay: "240ms" },
										children: "I'm a student and co-founder of Klyphic — building AI, APIs, and automation across developer tools, streaming platforms, and a unified API ecosystem."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm hero-reveal",
										style: { animationDelay: "360ms" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#work",
											className: "group inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 magnetic-btn",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View selected work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-colors duration-200",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 magnetic-arrow" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground/40 pb-0.5 transition-all duration-200",
											children: "Get in touch \xA0→"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee border-y border-border py-4 -mx-6 overflow-hidden select-none",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track",
							children: [0, 1].map((dup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-10 pr-10 shrink-0",
								children: marqueeItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-primary" }), item]
								}, `${dup}-${item}`))
							}, dup))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "work",
						className: "py-24 md:py-32 border-t border-border section-spacer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								index: "01",
								label: "Selected work",
								title: "Recent projects"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 divide-y divide-border border-y border-border rounded-xl overflow-hidden",
							children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reveal",
								style: { transitionDelay: `${i * 120}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
									project: p,
									index: i
								})
							}, p.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "stack",
						className: "py-24 md:py-32 border-t border-border section-spacer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								index: "02",
								label: "Stack",
								title: "Tools I work with"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
							children: Object.entries(stack).map(([group, items], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackCard, {
								group,
								items,
								index: i
							}, group))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "py-24 md:py-32 border-t border-border section-spacer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-[240px_1fr] gap-12 md:gap-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "reveal-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
									index: "03",
									label: "About",
									title: "Background"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5 text-muted-foreground leading-relaxed max-w-2xl reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground/90",
										children: "I'm a student and co-founder of Klyphic, a tech ecosystem building AI, APIs, apps, and automation. With my co-founders, I ship developer tools, consumer products, and the infrastructure that powers them."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My work sits at the intersection of Python and JavaScript — from LLM-powered CLIs like termai to ML-driven products like TuneHive and the KlyForge API platform. I care about the boring fundamentals: readable code, sensible APIs, and documentation your future teammate won't curse you for." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-foreground font-medium text-sm whitespace-nowrap",
												children: [
													"Typically responds within",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-primary font-semibold",
														style: { textShadow: "0 0 20px var(--glow)" },
														children: "24 hours"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						className: "py-24 md:py-32 border-t border-border section-spacer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
								children: "04 — Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl",
								children: [
									"Have a project in mind?",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "Let's talk."
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
									label: "Email",
									value: "arshcodes1@gmail.com",
									href: "mailto:arshcodes1@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
									label: "Telegram",
									value: "@anikyn",
									href: "https://t.me/anikyn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" }),
									label: "LinkedIn",
									value: "linkedin.com/in/arshdevx",
									href: "https://linkedin.com/in/arshdevx"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }),
									label: "GitHub",
									value: "github.com/arshdevx",
									href: "https://github.com/arshdevx"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Arsh Tyagi"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "v2026.09" })]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
