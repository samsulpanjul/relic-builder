import { CharacterConfigStore, RelicConfigStore } from "@/src/store/types";
import { getName } from "@/src/modules/character/store/character-names";

const SUB_AFFIX_COUNT = 4;

export const formatRelicToString = (relic: RelicConfigStore) => {
  const base = `${relic.relic_id},${relic.level},${relic.main_affix_id},${SUB_AFFIX_COUNT}`;

  const subs = relic.sub_affixes
    .map((sub) => {
      return `${sub.sub_affix_id}:${sub.count}:${sub.step}`;
    })
    .join(",");

  return `${base},${subs}`;
};

export const RELIC_SLOTS = [
  "HEAD",
  "HAND",
  "BODY",
  "FOOT",
  "NECK",
  "OBJECT",
] as const;

export type IncompleteCharacter = {
  id: number;
  name: string;
  hasLightcone: boolean;
  missingSlots: (typeof RELIC_SLOTS)[number][];
};

// split characters into exportable (lightcone + 6 relics) and incomplete ones.
// characters with nothing equipped at all are ignored silently.
export const getExportStatus = (
  characters: CharacterConfigStore[],
  allRelics: Record<string, RelicConfigStore>,
) => {
  const exportable: CharacterConfigStore[] = [];
  const incomplete: IncompleteCharacter[] = [];

  characters.forEach((char) => {
    const hasLightcone = !!char.lightcone && char.lightcone.id !== null;
    // relic ids that no longer exist count as empty slots
    const missingSlots = RELIC_SLOTS.filter((slot) => {
      const relicId = char.relics[slot];
      return !relicId || !allRelics[relicId];
    });

    if (hasLightcone && missingSlots.length === 0) {
      exportable.push(char);
    } else if (hasLightcone || missingSlots.length < RELIC_SLOTS.length) {
      incomplete.push({
        id: char.id,
        name: getName(char.id),
        hasLightcone,
        missingSlots,
      });
    }
  });

  return { exportable, incomplete };
};

export const generateConfigJson = (
  exportableCharConfigs: CharacterConfigStore[],
  allRelics: Record<string, RelicConfigStore>,
) => {
  const tingyunId = 1202;
  const avatar_config = exportableCharConfigs.map((char) => {
    const relicStrings = RELIC_SLOTS.map((slot) =>
      formatRelicToString(allRelics[char.relics[slot] as string]),
    );

    const isTingyun = tingyunId === char.id;

    return {
      name: getName(char.id),
      id: char.id,
      hp: 100,
      sp: isTingyun ? 90 : char.sp || 50,
      level: char.level,
      promotion: char.promotion,
      rank: char.rank,
      lightcone: {
        id: char.lightcone.id,
        rank: char.lightcone.rank,
        level: char.lightcone.level,
        promotion: char.lightcone.promotion,
      },
      relics: relicStrings,
      use_technique: isTingyun ? false : char.use_technique,
    };
  });

  const battle_config = {
    battle_id: 1,
    stage_id: 1052106,
    cycle_count: 30,
    monster_wave: [[5035011]],
    monster_level: 82,
    blessings: [],
  };

  return {
    avatar_config,
    battle_config,
  };
};
