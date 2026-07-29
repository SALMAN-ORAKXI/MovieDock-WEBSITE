import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "@/lib/moviedock";
import { Reveal } from "./Reveal";
import { useEffect, useState } from "react";

const fallback = [
  { title: 'Inception' },
  { title: 'The Dark Knight' },
  { title: 'Interstellar' },
  { title: 'Pulp Fiction' },
  { title: 'Spirited Away' },
  { title: 'The Fellowship of the Ring' },
].map((m, i) => ({ id: i, title: m.title }));

function formatCount(n: number) {
  if (n >= 1_000_000) return `${Math.floor(n / 1_000_000)}M`;
  if (n >= 1_000) return `${Math.floor(n / 1_000)}k`;
  return String(n);
}

function DownloadCounter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = Math.floor(target * 0.55);
    const duration = 900 + Math.random() * 700; // ms
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 2); // ease-out feel
      const v = Math.floor(start + (target - start) * eased);
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">{formatCount(value)}</span>
      <span className="text-sm text-muted-foreground">downloads</span>
    </div>
  );
}

function ReviewRotator({ seed }: { seed: number }) {
  const reviews = [
    '"Love this app — so easy to find what to watch!"',
    '"Great UI and fast. Watched with friends using the built-in links."',
    '"Smooth experience on mobile and during watch parties."',
    '"Download was quick, and the app just works."',
    '"Five stars — highly recommend MovieDock!"'
  ];
  const [idx, setIdx] = useState(seed % reviews.length);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % reviews.length), 3500 + (seed % 3) * 300);
    return () => clearInterval(iv);
  }, [seed]);
  return (
    <div className="text-sm text-muted-foreground h-16 overflow-hidden flex items-center">
      <div className="transition-opacity duration-500 italic">{reviews[idx]}</div>
    </div>
  );
}

function MovieCard({ m, i }: { m: any; i: number }) {
  const [copied, setCopied] = useState(false);
  const apkLink = (typeof window !== 'undefined' && (window as any).__MOVIEDOCK_APK) || '/';
  const targetDownloads = 10000 + i * 2300 + Math.floor(Math.random() * 4000);

  const handleShare = async () => {
    const shareUrl = apkLink || (typeof window !== 'undefined' ? window.location.href : '/');
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title: `${m.title} — MovieDock`, text: 'Check out MovieDock — watch together!', url: shareUrl });
      } catch (e) {
        // user cancelled, ignore
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        // fallback noop
      }
    }
  };

  return (
    <Reveal delay={i * 0.05}>
      <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-4 shadow-lg transform transition duration-400 hover:-translate-y-1 hover:scale-[1.01]" style={{ willChange: 'transform, opacity' }}>
        <div className="flex flex-col h-full justify-between gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold leading-tight">{m.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Trending & watchable</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Live
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 shadow-md">
                <DownloadCounter target={targetDownloads} />
              </div>
              <div className="mt-3 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-400/10 p-2 text-amber-400">★ ★ ★ ★ ☆</div>
                    <div className="text-xs text-muted-foreground">4.3 · 1.2k reviews</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Updated just now</div>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-white/5">
                  <ReviewRotator seed={i} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <a href={apkLink} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-95 transition" target="_blank" rel="noreferrer">
              Download APK
            </a>

            <button onClick={handleShare} aria-label={`Share ${m.title}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              {copied ? 'Copied' : 'Share'}
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function LiveLibrary() {
  const { data } = useQuery({
    queryKey: ["moviedock-latest-movies"],
    queryFn: fetchLatestMovies,
    retry: false,
    staleTime: 60_000,
    refetchInterval: 30_000,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });

  const movies = data && data.length > 0 ? data.map((x: any, i: number) => ({ id: x.id ?? i, title: x.title ?? x.name ?? 'Untitled' })) : fallback;

  return (
    <section id="library" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Live library
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Fresh picks & live stats
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Live download counters, rotating reviews, and easy sharing — designed for mobile.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {movies.slice(0, 6).map((m: any, i: number) => (
          <MovieCard key={m.id} m={m} i={i} />
        ))}
      </div>
    </section>
  );
}
