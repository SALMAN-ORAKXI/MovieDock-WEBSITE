import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Check, i as Download, n as Sparkles, o as Apple, r as ShieldCheck, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuMbaDPA.js
var import_jsx_runtime = require_jsx_runtime();
var app_screen_light_default = "/assets/app-screen-light-CFOEcHtN.jpg";
var APK_URL = "/Movie%20Dock.apk";
async function fetchLatestMovies() {
	return [];
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
var TMDB = "https://image.tmdb.org/t/p/w780";
var fallback = [
	{
		id: 1,
		title: "Inception",
		poster: `${TMDB}/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg`
	},
	{
		id: 2,
		title: "The Dark Knight",
		poster: `${TMDB}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`
	},
	{
		id: 3,
		title: "Interstellar",
		poster: `${TMDB}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`
	}
];
function LiveLibrary() {
	const { data } = useQuery({
		queryKey: ["moviedock-latest-movies"],
		queryFn: fetchLatestMovies,
		retry: false,
		staleTime: 6e4,
		refetchInterval: 3e4,
		refetchOnWindowFocus: true,
		refetchIntervalInBackground: true
	});
	const movies = data && data.length > 0 ? data.map((x, i) => ({
		id: x.id ?? i,
		title: x.title ?? x.name ?? "Untitled",
		poster: x.poster ?? (x.poster_path ? `${TMDB}${x.poster_path}` : null)
	})) : fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "library",
		className: "mx-auto max-w-6xl px-5 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }), " Featured"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Featured posters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-md text-muted-foreground",
					children: "Clean poster gallery designed to match the main UI palette. Tap to download from the app."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3",
			children: movies.slice(0, 3).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: APK_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-sm shadow-lg hover:scale-[1.01] transition-transform duration-300",
						children: [m.poster ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.poster,
							alt: `${m.title} poster`,
							loading: "lazy",
							decoding: "async",
							className: "w-full h-72 sm:h-80 md:h-96 object-cover block",
							onError: (e) => {
								const img = e.currentTarget;
								if (img.src !== "/assets/app-screen-light-CFOEcHtN.jpg") img.src = app_screen_light_default;
							}
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-72 sm:h-80 md:h-96 items-center justify-center bg-gradient-to-br from-secondary to-muted text-3xl font-bold text-muted-foreground",
							children: m.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 via-transparent to-transparent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold text-white truncate",
									children: m.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white/95",
									children: "Download"
								})]
							})
						})]
					})
				})
			}, m.id))
		})]
	});
}
var features = [
	{
		icon: Zap,
		title: "High-Speed Links",
		text: "Every file is served from Cloudflare R2 edge storage, so downloads saturate your connection instead of crawling."
	},
	{
		icon: ShieldCheck,
		title: "Privacy First",
		text: "No login, no email, no analytics SDKs. Nothing about you or your library ever leaves your device."
	},
	{
		icon: Sparkles,
		title: "Clean UI",
		text: "An ad-gate secured experience — no popups mid-browse, just a calm, premium interface built for content."
	}
];
var steps = [
	{
		n: "1",
		title: "Tap download",
		text: "Click the button and the MovieDock APK starts downloading directly from this site."
	},
	{
		n: "2",
		title: "Open the file",
		text: "When the download finishes, tap the APK file to open it on your Android device."
	},
	{
		n: "3",
		title: "Install and enjoy",
		text: "Allow installation if prompted, then open the app and start watching."
	}
];
function DownloadButton({ large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: APK_URL,
		download: "MovieDock.apk",
		className: `pulse-cta inline-flex items-center justify-center gap-2.5 rounded-full bg-primary font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:scale-105 active:scale-100 ${large ? "px-9 py-4 text-base sm:text-lg" : "px-5 py-2.5 text-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: large ? "h-5 w-5" : "h-4 w-4" }), large ? "Download MovieDock APK" : "Get the APK"]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-50 px-4 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "glass mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-2.5 sm:flex sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate text-lg font-semibold tracking-tight",
							children: ["Movie", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Dock"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#library",
									className: "transition-colors hover:text-foreground",
									children: "Library"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "transition-colors hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#install",
									className: "transition-colors hover:text-foreground",
									children: "Install"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: APK_URL,
							download: "MovieDock.apk",
							className: "shrink-0 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-200 hover:scale-105",
							children: "Download"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "noir-glow relative flex min-h-[92vh] flex-col items-center justify-center px-5 pt-32 pb-16 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "h-3.5 w-3.5 text-foreground" }), " Designed like iOS · Built for Android"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-8 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"Experience Cinema",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Like Never Before"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
							children: "A beautifully simple movie vault for Android. High-speed links, zero tracking, and an interface that gets out of the way."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, { large: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "42 MB · Android 8.0+ · Free forever"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
							children: [
								"Virus scanned",
								"No account needed",
								"No ads mid-browse"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary" }),
									" ",
									t
								]
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-14 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-primary",
							children: "The interface"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "Clean white. Calm gray. Nothing else."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-muted-foreground",
							children: "Every screen is built around your posters — generous spacing, soft shadows and typography that stays out of the way. It feels native, because it was designed that way."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3 text-sm",
							children: [
								"Resumable multi-thread downloads",
								"Offline posters and metadata",
								"Folder-based library organiser"
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-5 w-5 items-center justify-center rounded-full bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary" })
								}), f]
							}, f))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative rounded-[3rem] border border-border bg-card p-3 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.35)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[2.4rem] bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground/90" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: app_screen_light_default,
									alt: "MovieDock Android app showing a clean white and gray movie library interface",
									loading: "lazy",
									width: 720,
									height: 1440,
									className: "h-auto w-[270px] sm:w-[320px]"
								})]
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveLibrary, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto max-w-6xl px-5 py-20 sm:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Why MovieDock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Fast, private, and pleasant to use"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: features.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass h-full rounded-3xl p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold tracking-tight",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: item.text
								})
							]
						})
					}, item.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "install",
				className: "mx-auto max-w-3xl px-5 py-20 sm:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-primary",
							children: "Installation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "One tap to install"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-14 pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-2 bottom-2 left-[2.05rem] w-px bg-border",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-6",
							children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "relative flex gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-10px_rgba(0,122,255,0.8)]",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 rounded-3xl border border-border bg-card p-6 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.45)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold tracking-tight",
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: s.text
										})]
									})]
								})
							}, s.n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "mt-14 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, { large: true })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-5 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-4 sm:flex-row sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-base font-semibold tracking-tight text-foreground",
							children: ["Movie", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Dock"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://privacyand.netlify.app/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-foreground",
								children: "Privacy Policy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" MovieDock"
							] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-center text-xs font-semibold tracking-wide text-foreground",
						children: "DEVELOPED BY SALMAN KHAN"
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
