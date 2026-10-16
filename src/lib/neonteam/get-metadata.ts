import { env } from "@/src/env";
import { NeonteamMetadata } from "@/src/utils/types";

// manual TTL instead of next `revalidate`, so it behaves the same
// on Vercel and Cloudflare (next-on-pages)
const METADATA_TTL = 60 * 60 * 1000; // 1 hour

let metadataPromise: Promise<NeonteamMetadata> | null = null;
let lastMetadata: NeonteamMetadata | null = null;
let fetchedAt = 0;

export const getMetadata = () => {
  const isExpired = Date.now() - fetchedAt > METADATA_TTL;

  if (!metadataPromise || isExpired) {
    fetchedAt = Date.now();

    metadataPromise = fetch(`${env.NEONTEAM_BASE_URL}/Metadata.json`, {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Metadata fetch failed: ${res.status}`);
        return res.json() as Promise<NeonteamMetadata>;
      })
      .then((data) => {
        lastMetadata = data;
        return data;
      })
      .catch((err) => {
        // keep serving the last good metadata if refresh fails
        if (lastMetadata) {
          console.error("Metadata refresh failed, using last value:", err);
          return lastMetadata;
        }
        metadataPromise = null;
        throw err;
      });
  }

  return metadataPromise;
};
