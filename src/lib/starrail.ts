import { StarRail } from "starrail.js";
import path from "path";

const cachePath = path.join(process.cwd(), "cache");

const globalForStarRail = global as unknown as { starrail: StarRail };

export const client =
  globalForStarRail.starrail ||
  new StarRail({
    cacheDirectory: cachePath,
    showFetchCacheLog: true,
    defaultLanguage: "en",
  });

if (process.env.NODE_ENV !== "production") globalForStarRail.starrail = client;
