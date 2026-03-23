import { StarRail } from "starrail.js";
import path from "path";

const client = new StarRail({
  cacheDirectory: path.join(process.cwd(), "cache"),
  showFetchCacheLog: true,
});

const run = async () => {
  await client.cachedAssetsManager.cacheDirectorySetup();
  await client.cachedAssetsManager.fetchAllContents({
    useRawStarRailData: true,
  });
};

run();
