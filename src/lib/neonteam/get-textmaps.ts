import { env } from "../../env";
import { cachedByVersion, fetchJson } from "./cache";

export const getTextmaps = () =>
  cachedByVersion("textmaps", async (version) => {
    const data = await fetchJson<{ EN: Record<number, string> }>(
      `${env.NEONTEAM_BASE_URL}/${version}/textmaps.json`,
    );

    return data.EN;
  });
