import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "../ui/dialog";
import Character from "./Character";
import { Button } from "../ui/button";
import { useCharStore, useConfigCharacterStore, useLightconeStore } from "@/stores/character-store";
import { useShallow } from "zustand/react/shallow";
import { subStats } from "@/utils/dataStat";
import { useBodyStore, useFeetStore, useHandStore, useHeadStore, usePlanarStore, useRopeStore } from "@/stores/relic-store";
import { useRelicData } from "@/hooks/useRelicData";
import { useState } from "react";

export default function DialogAddCharacter() {
  const [open, setOpen] = useState(false);
  const [config, addConfig] = useConfigCharacterStore(useShallow((state) => [state.config, state.addConfig]));
  const [name, id, level, rank, promotion, energy, technique, resetChar] = useCharStore(useShallow((state) => [state.name, state.id, state.level, state.rank, state.promotion, state.energy, state.technique, state.reset]));
  const [idLc, levelLc, rankLc, promotionLc, resetLc] = useLightconeStore(useShallow((state) => [state.id, state.level, state.rank, state.promotion, state.reset]));

  const [relicHead, subHead, resetHead] = useHeadStore(useShallow(useShallow((state) => [state.relicHead, state.sub, state.resetHead])));

  const [relicHand, subHand, resetHand] = useHandStore(useShallow(useShallow((state) => [state.relicHand, state.subHand, state.resetHand])));

  const [relicBody, subBody, resetBody] = useBodyStore(useShallow(useShallow((state) => [state.relicBody, state.subBody, state.resetBody])));

  const [relicFeet, subFeet, resetFeet] = useFeetStore(useShallow(useShallow((state) => [state.relicFeet, state.subFeet, state.resetFeet])));

  const [relicPlanar, subPlanar, resetPlanar] = usePlanarStore(useShallow((state) => [state.relicPlanar, state.subPlanar, state.resetPlanar]));

  const [relicRope, subRope, resetRope] = useRopeStore(useShallow((state) => [state.relicRope, state.subRope, state.resetRope]));

  const headRelicData = useRelicData(relicHead, 0);
  const handRelicData = useRelicData(relicHand, 1);
  const bodyRelicData = useRelicData(relicBody, 2);
  const feetRelicData = useRelicData(relicFeet, 3);
  const planarRelicData = useRelicData(relicPlanar, 4);
  const ropeRelicData = useRelicData(relicRope, 5);

  const relic = (relic, mainStat, sub) => {
    const id = relic;
    const lv = 15;
    const mainStatId = mainStat;
    const subStatCount = sub.reduce((acc, curr) => (curr.stat !== "" ? acc + 1 : acc), 0);

    return `${id},${lv},${mainStatId},${subStatCount},${sub.map((s) => `${subStats.find((sub) => sub.name === s.stat)?.id}:${s.step}:${s.step * s.roll}`).join(",")}`;
  };

  const reset = () => {
    resetChar();
    resetLc();
    resetHead();
    resetHand();
    resetBody();
    resetFeet();
    resetPlanar();
    resetRope();
  };

  const handleAddCharacter = () => {
    const lightcone = {
      id: parseInt(idLc),
      rank: rankLc,
      level: levelLc,
      promotion: promotionLc,
    };

    const relics = [
      relic(headRelicData.relicId, headRelicData.mainStatHeadId, subHead),
      relic(handRelicData.relicId, handRelicData.mainStatHandId, subHand),
      relic(bodyRelicData.relicId, bodyRelicData.mainStatBodyId, subBody),
      relic(feetRelicData.relicId, feetRelicData.mainStatFeetId, subFeet),
      relic(planarRelicData.relicId, planarRelicData.mainStatPlanarId, subPlanar),
      relic(ropeRelicData.relicId, ropeRelicData.mainStatLinkId, subRope),
    ];

    const character = {
      name: name,
      id: parseInt(id),
      hp: 100,
      sp: energy / 100,
      level: level,
      promotion: promotion,
      rank: rank,
      lightcone: lightcone,
      relics: relics,
      use_technique: technique,
    };

    reset();

    addConfig(character);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-black text-white dark:bg-white dark:text-black rounded-md px-5 py-2 font-semibold">Add Character</DialogTrigger>
      <DialogContent
        className="max-w-[calc(100vw-2rem)]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <Character />
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              reset();
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (!id) {
                alert("Select a character first.");
                return;
              }
              if (config.some((char) => char.id == id)) {
                alert("Character already exists.");
                return;
              }
              handleAddCharacter();
              setOpen(false);
            }}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
