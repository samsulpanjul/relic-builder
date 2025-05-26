import { useRelicStore, useBodyStore, useFeetStore, usePlanarStore, useRopeStore } from "@/stores/relic-store";
import { mainStatBody, mainStatFeet, mainStatLink, mainStatPlanar } from "@/utils/dataStat";

export function useRelicData(relicPiece, index) {
  const { relics } = useRelicStore();
  const mainStatBodyy = useBodyStore((state) => state.mainStatBody);
  const mainStatFeett = useFeetStore((state) => state.mainStatFeet);
  const mainStatPlanarr = usePlanarStore((state) => state.mainStatPlanar);
  const mainStatRope = useRopeStore((state) => state.mainStatRope);

  const relicEntry = relics ? Object.entries(relics).find(([id, data]) => data && data.en === relicPiece) : null;
  const relicIdSuffix = relicEntry ? relicEntry[0] : null;

  const mainStatBodyId = mainStatBody.find((stat) => stat.name === mainStatBodyy)?.id;
  const mainStatFeetId = mainStatFeet.find((stat) => stat.name === mainStatFeett)?.id;
  const mainStatPlanarId = mainStatPlanar.find((stat) => stat.name === mainStatPlanarr)?.id;
  const mainStatLinkId = mainStatLink.find((stat) => stat.name === mainStatRope)?.id;

  const relicData = {
    relicId: relicIdSuffix ? `6${relicIdSuffix}${index + 1}` : null,
    mainStatHeadId: 1,
    mainStatHandId: 1,
    mainStatBodyId: mainStatBodyId || null,
    mainStatFeetId: mainStatFeetId || null,
    mainStatPlanarId: mainStatPlanarId || null,
    mainStatLinkId: mainStatLinkId || null,
  };

  return relicData;
}
