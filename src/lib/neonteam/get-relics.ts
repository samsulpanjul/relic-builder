import { env } from "@/src/env";
import { cachedByVersion, fetchJson } from "./cache";
import { getTextmaps } from "./get-textmaps";

export const getRelics = () =>
  cachedByVersion("relics", async (version) => {
    const [data, textmaps] = await Promise.all([
      fetchJson<Record<string, any>>(
        `${env.NEONTEAM_BASE_URL}/${version}/relics.json`,
      ),
      getTextmaps(),
    ]);

    const allRelics = Object.entries(data).map(([id, lightcone]) => {
      const parsedRelic = {
        ...lightcone,
        name: textmaps?.[lightcone.name],
      };

      return [id, parsedRelic];
    });

    const parsedData = Object.fromEntries(allRelics);

    return parsedData;
  });
