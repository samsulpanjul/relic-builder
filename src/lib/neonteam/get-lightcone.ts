import { env } from "@/src/env";
import { cachedByVersion, fetchJson } from "./cache";
import { getTextmaps } from "./get-textmaps";
import { LightconeRawDataList } from "@/src/types/neonteam/lightcone";

export const getLightcones = () =>
  cachedByVersion("lightcones", async (version) => {
    const [data, textmaps] = await Promise.all([
      fetchJson<LightconeRawDataList>(
        `${env.NEONTEAM_BASE_URL}/${version}/lightcones.json`,
      ),
      getTextmaps(),
    ]);

    const allLightcones = Object.entries(data).map(([id, lightcone]) => {
      const parsedLightcone = {
        ...lightcone,
        name: textmaps?.[lightcone.name],
        rank: {
          ...lightcone.rank,
          desc: textmaps?.[lightcone.rank.desc],
          skill: textmaps?.[lightcone.rank.skill],
        },
      };

      return [id, parsedLightcone];
    });

    const parsedData = Object.fromEntries(allLightcones);

    return parsedData;
  });
