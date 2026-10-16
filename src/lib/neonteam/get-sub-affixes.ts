import { env } from "@/src/env";
import { cachedByVersion, fetchJson } from "./cache";

export const getSubAffixes = () =>
  cachedByVersion("relic-sub-affixes", async (version) => {
    const data = await fetchJson<Record<string, any>>(
      `${env.NEONTEAM_BASE_URL}/${version}/relic-sub-affixes.json`,
    );

    const affixes = Object.entries(data).map(([id, affix]) => {
      const parsedAffix = {
        ...affix,
      };

      return [id, parsedAffix];
    });

    const parsedData = Object.fromEntries(affixes);

    return parsedData;
  });
