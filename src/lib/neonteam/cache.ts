import { getMetadata } from "./get-metadata";

// Neonteam files live under a versioned path, so their content never changes
// for a given version. Cache the parsed result in memory per version instead
// of relying on Next's data cache (2MB limit, behaves differently on
// Vercel vs Cloudflare). getMetadata handles picking up new versions.
const cache = new Map<string, { version: string; promise: Promise<unknown> }>();

export const cachedByVersion = async <T>(
  key: string,
  loader: (version: string) => Promise<T>,
): Promise<T> => {
  const { CurrentVersion: version } = await getMetadata();

  const cached = cache.get(key);
  if (cached && cached.version === version) {
    return cached.promise as Promise<T>;
  }

  // replacing the entry also drops the previous version from memory
  const promise = loader(version).catch((err) => {
    if (cache.get(key)?.promise === promise) cache.delete(key);
    throw err;
  });
  cache.set(key, { version, promise });

  return promise;
};

export const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${url}`);
  return res.json() as Promise<T>;
};
