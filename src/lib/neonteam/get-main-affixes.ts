import { env } from "@/src/env";
import { getMetadata } from "./get-metadata";

export const getMainAffixes = async () => {
  const [metadata] = await Promise.all([getMetadata()]);

  const res = await fetch(
    `${env.NEONTEAM_BASE_URL}/${metadata.CurrentVersion}/relic-main-affixes.json`,
  );

  const data: Record<string, any> = await res.json();

  const affixes = Object.entries(data).map(([id, affix]) => {
    const parsedAffix = {
      ...affix,
    };

    return [id, parsedAffix];
  });

  const parsedData = Object.fromEntries(affixes);

  return parsedData;
};
