export const APK_URL = "/Movie%20Dock.apk";

export const SUPABASE_URL = "https://lrjuakelenZmpaqvdzht.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_MOVIEDOCK_SUPABASE_KEY as string | undefined;

export type Movie = {
  id: string | number;
  title: string;
  poster: string | null;
};

export async function fetchLatestMovies(): Promise<Movie[]> {
  if (!SUPABASE_KEY) return [];
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/movies?select=*&order=created_at.desc&limit=6`,
    { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } },
  );
  if (!res.ok) return [];
  const rows = (await res.json()) as Record<string, unknown>[];
  return rows.map((r, i) => ({
    id: (r.id as string | number) ?? i,
    title: String(r.title ?? r.name ?? "Untitled"),
    poster: (r.poster ?? r.poster_url ?? r.image ?? r.thumbnail ?? null) as string | null,
  }));
}

export type LiveStats = {
  totalMovies: number | null;
  latestTitles: string[];
};

export async function fetchLiveStats(): Promise<LiveStats> {
  if (!SUPABASE_KEY) return { totalMovies: null, latestTitles: [] };

  const headers = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` };

  const countRes = await fetch(`${SUPABASE_URL}/rest/v1/movies?select=id`, {
    headers: { ...headers, Prefer: "count=exact", Range: "0-0" },
  });
  const range = countRes.headers.get("content-range");
  const totalMovies = range ? Number(range.split("/")[1]) : null;

  const latestRes = await fetch(
    `${SUPABASE_URL}/rest/v1/movies?select=title&order=created_at.desc&limit=5`,
    { headers },
  );
  const latest = latestRes.ok ? ((await latestRes.json()) as { title: string }[]) : [];

  return {
    totalMovies: Number.isFinite(totalMovies) ? totalMovies : null,
    latestTitles: latest.map((m) => m.title).filter(Boolean),
  };
}
