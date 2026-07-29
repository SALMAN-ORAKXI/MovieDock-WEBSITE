import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "@/lib/moviedock";
import { Reveal } from "./Reveal";

const TMDB = 'https://image.tmdb.org/t/p/w780';
const fallback = [
  { id: 1, title: 'Inception', poster: `${TMDB}/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg` },
  { id: 2, title: 'The Dark Knight', poster: `${TMDB}/qJ2tW6WMUDux911r6m7haRef0WH.jpg` },
  { id: 3, title: 'Interstellar', poster: `${TMDB}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg` },
];

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

  const movies = data && data.length > 0
    ? data.map((x: any, i: number) => ({ id: x.id ?? i, title: x.title ?? x.name ?? 'Untitled', poster: x.poster ?? (x.poster_path ? `${TMDB}${x.poster_path}` : null) }))
    : fallback;

  return (
    <section id="library" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Featured
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Featured posters</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Clean poster gallery designed to match the main UI palette. Tap to download from the app.</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {movies.slice(0, 3).map((m: any, i: number) => (
          <Reveal key={m.id} delay={i * 0.04}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-sm shadow-lg hover:scale-[1.01] transition-transform duration-300">
              {m.poster ? (
                <img
                  src={m.poster}
                  alt={`${m.title} poster`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 md:h-96 object-cover block"
                />
              ) : (
                <div className="flex h-72 sm:h-80 md:h-96 items-center justify-center bg-gradient-to-br from-secondary to-muted text-3xl font-bold text-muted-foreground">
                  {m.title}
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white truncate">{m.title}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white/95">Download</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
