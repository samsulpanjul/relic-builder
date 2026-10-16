import { env } from "@/src/env";
import { cachedByVersion, fetchJson } from "./cache";
import { getTextmaps } from "./get-textmaps";

export const getRelicSets = () =>
  cachedByVersion("relic-sets", async (version) => {
    const [data, textmaps] = await Promise.all([
      fetchJson<Record<string, any>>(
        `${env.NEONTEAM_BASE_URL}/${version}/relic-sets.json`,
      ),
      getTextmaps(),
    ]);

    const sets = Object.entries(data).map(([id, set]) => {
      const setBonus = Object.entries(set.set_bonus).map(
        ([id, bonus]: [string, any]) => {
          const parsedBonus = {
            ...bonus,
            desc: textmaps?.[bonus.desc],
          };

          return [id, parsedBonus];
        },
      );

      const parsedSet = {
        ...set,
        name: textmaps?.[set.name],
        set_bonus: setBonus,
      };

      return [id, parsedSet];
    });

    const parsedData = Object.fromEntries(sets);

    return parsedData;
  });
