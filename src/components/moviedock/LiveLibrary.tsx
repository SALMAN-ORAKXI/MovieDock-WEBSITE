import { useQuery } from "@tanstack/react-query";
import { fetchLatestMovies } from "@/lib/moviedock";
import { Reveal } from "./Reveal";

const fallback = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "Pulp Fiction",
  "Spirited Away",
  "The Fellowship of the Ring",
].map((title, i) => ({ id: i, title, poster: null as string | null }));

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

  const movies = data && data.length > 0 ? data : fallback;

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
          Pulled straight from the MovieDock catalogue ? the app updates the moment we do.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {movies.slice(0, 6).map((m, i) => (
          <Reveal key={m.id} delay={i * 0.05}>
            <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1">
              <div className="aspect-2/3 overflow-hidden rounded-2xl bg-secondary">
                {m.poster ? (
                  <img
                    src={m.poster}
                    alt={`${m.title} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-secondary to-muted text-3xl font-semibold text-muted-foreground">
                    {m.title.charAt(0)}
                  </div>
                )}
              </div>
              <p className="mt-3 px-1 pb-1 truncate text-sm font-medium">{m.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
