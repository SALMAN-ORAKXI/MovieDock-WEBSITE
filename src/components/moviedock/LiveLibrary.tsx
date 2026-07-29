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
      const v = Math.floor(start + (target - start) * t);
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return (
    <div className="text-2xl font-semibold text-foreground">
      {formatCount(value)}+
    </div>
  );
}

function ReviewRotator({ seed }: { seed: number }) {
  const reviews = [
    'Love this app — so easy to find what to watch!',
    'Great UI and fast. Watched with friends using the built-in links.',
    'Smooth experience on mobile and during watch parties.',
    'Download was quick, and the app just works.',
    'Five stars — highly recommend MovieDock!'
  ];
  const [idx, setIdx] = useState(seed % reviews.length);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % reviews.length), 3000 + (seed % 3) * 600);
    return () => clearInterval(iv);
  }, [seed]);
  return (
    <div className="text-sm text-muted-foreground h-16 overflow-hidden">
      <div className="transition-opacity duration-500">{reviews[idx]}</div>
    </div>
  );
}

function MovieCard({ m, i }: { m: any; i: number }) {
  const [copied, setCopied] = useState(false);
  const apkLink = (typeof window !== 'undefined' && (window as any).__MOVIEDOCK_APK) || '/';
  // For demo/fake numbers, create a target based on index and randomness to feel organic
  const targetDownloads = 8000 + i * 1200 + Math.floor(Math.random() * 3000);

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
      <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1" style={{ willChange: 'transform, opacity' }}>
        <div className="aspect-2/3 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{m.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">Popular this week</p>
          </div>

          <div className="mt-3">
            <DownloadCounter target={targetDownloads} />
            <div className="mt-2 flex items-center gap-2 text-sm text-amber-400">
              <div className="flex -ml-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-muted-foreground">★</span>
              </div>
              <span className="text-xs text-muted-foreground">4.2 · 1.1k reviews</span>
            </div>

            <div className="mt-3">
              <ReviewRotator seed={i} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <a href={apkLink} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white shadow hover:brightness-95 transition" target="_blank" rel="noreferrer">
              Download APK
            </a>

            <button onClick={handleShare} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-2 text-xs font-semibold text-white shadow-lg hover:opacity-95 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              {copied ? 'Copied' : 'Share'}
            </button>
          </div>
        </div>

        <p className="mt-3 px-1 pb-1 truncate text-sm font-medium">{m.title}</p>
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
          Freshly added this week
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Pulled straight from the MovieDock catalogue — interactive previews and social features.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {movies.slice(0, 6).map((m: any, i: number) => (
          <MovieCard key={m.id} m={m} i={i} />
        ))}
      </div>
    </section>
  );
}
