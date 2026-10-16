import { env } from "@/src/env";
import { cachedByVersion, fetchJson } from "./cache";
import { getTextmaps } from "./get-textmaps";

export const getStatProperties = () =>
  cachedByVersion("stat-properties", async (version) => {
    const [data, textmaps] = await Promise.all([
      fetchJson<Record<string, any>>(
        `${env.NEONTEAM_BASE_URL}/${version}/stat-properties.json`,
      ),
      getTextmaps(),
    ]);

    const statProperties = Object.entries(data).map(([id, stat]) => {
      const parsedStat = {
        ...stat,
        name: textmaps?.[stat.name],
        name_skill_tree: textmaps?.[stat.name_skill_tree],
      };

      return [id, parsedStat];
    });

    const parsedData = Object.fromEntries(statProperties);

    return parsedData;
  });
