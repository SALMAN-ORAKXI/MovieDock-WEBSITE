import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Download, Zap, ShieldCheck, Sparkles, Apple, Check } from "lucide-react";
import appScreen from "@/assets/app-screen-light.jpg";
import { APK_URL } from "@/lib/moviedock";
import { Reveal } from "@/components/moviedock/Reveal";
import { LiveLibrary } from "@/components/moviedock/LiveLibrary";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MovieDock — Experience Cinema Like Never Before" },
      {
        name: "description",
        content:
          "Download the MovieDock APK for Android: high-speed links, no login, no tracking and a clean, premium interface. Safe, private and free.",
      },
      { property: "og:title", content: "MovieDock — Experience Cinema Like Never Before" },
      {
        property: "og:description",
        content: "High-speed links, privacy first, and a beautifully clean Android app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Zap,
    title: "High-Speed Links",
    text: "Every file is served from Cloudflare R2 edge storage, so downloads saturate your connection instead of crawling.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    text: "No login, no email, no analytics SDKs. Nothing about you or your library ever leaves your device.",
  },
  {
    icon: Sparkles,
    title: "Clean UI",
    text: "An ad-gate secured experience — no popups mid-browse, just a calm, premium interface built for content.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tap download",
    text: "Click the button and the MovieDock APK starts downloading directly from this site.",
  },
  {
    n: "2",
    title: "Open the file",
    text: "When the download finishes, tap the APK file to open it on your Android device.",
  },
  {
    n: "3",
    title: "Install and enjoy",
    text: "Allow installation if prompted, then open the app and start watching.",
  },
];

function DownloadButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={APK_URL}
      download="MovieDock.apk"
      className={`pulse-cta inline-flex items-center justify-center gap-2.5 rounded-full bg-primary font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:scale-105 active:scale-100 ${
        large ? "px-9 py-4 text-base sm:text-lg" : "px-5 py-2.5 text-sm"
      }`}
    >
      <Download className={large ? "h-5 w-5" : "h-4 w-4"} />
      {large ? "Download MovieDock APK" : "Get the APK"}
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-2.5 sm:flex sm:justify-between">
          <span className="truncate text-lg font-semibold tracking-tight">
            Movie<span className="text-primary">Dock</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#library" className="transition-colors hover:text-foreground">Library</a>
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#install" className="transition-colors hover:text-foreground">Install</a>
          </div>
          <a
            href={APK_URL}
            download="MovieDock.apk"
            className="shrink-0 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-200 hover:scale-105"
          >
            Download
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="noir-glow relative flex min-h-[92vh] flex-col items-center justify-center px-5 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Apple className="h-3.5 w-3.5 text-foreground" /> Designed like iOS · Built for Android
          </span>
          <h1 className="mt-8 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Experience Cinema
            <br />
            Like Never Before
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A beautifully simple movie vault for Android. High-speed links, zero tracking, and an
            interface that gets out of the way.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <DownloadButton large />
            <span className="text-xs text-muted-foreground">
              42 MB · Android 8.0+ · Free forever
            </span>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Virus scanned", "No account needed", "No ads mid-browse"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mockup */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium text-primary">The interface</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clean white. Calm gray. Nothing else.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every screen is built around your posters — generous spacing, soft shadows and
              typography that stays out of the way. It feels native, because it was designed that
              way.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Resumable multi-thread downloads",
                "Offline posters and metadata",
                "Folder-based library organiser",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="flex justify-center">
            <div className="relative rounded-[3rem] border border-border bg-card p-3 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[2.4rem] bg-secondary">
                <div className="absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
                <img
                  src={appScreen}
                  alt="MovieDock Android app showing a clean white and gray movie library interface"
                  loading="lazy"
                  width={720}
                  height={1440}
                  className="h-auto w-[270px] sm:w-[320px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LiveLibrary />

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Why MovieDock</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Fast, private, and pleasant to use
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass h-full rounded-3xl p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-primary">Installation</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            One tap to install
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-4">
          <span className="absolute top-2 bottom-2 left-[2.05rem] w-px bg-border" aria-hidden />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="relative flex gap-5">
                  <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-10px_rgba(0,122,255,0.8)]">
                    {s.n}
                  </span>
                  <div className="flex-1 rounded-3xl border border-border bg-card p-6 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.45)]">
                    <h3 className="font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <DownloadButton large />
        </Reveal>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto max-w-6xl text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Movie<span className="text-primary">Dock</span>
            </span>
            <div className="flex items-center gap-6">
              <a
                href="https://privacyand.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              <span>© {new Date().getFullYear()} MovieDock</span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs font-semibold tracking-wide text-foreground">
            DEVELOPED BY SALMAN KHAN
          </div>
        </div>
      </footer>
    </main>
  );
}
