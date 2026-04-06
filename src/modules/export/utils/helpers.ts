import { CharacterConfigStore, RelicConfigStore } from "@/src/store/types";
import { getName } from "@/src/modules/character/store/character-names";

export const formatRelicToString = (relic: RelicConfigStore) => {
  const base = `${relic.relic_id},${relic.level},${relic.main_affix_id},4`;

  const subs = relic.sub_affixes
    .map((sub) => {
      return `${sub.sub_affix_id}:${sub.count}:${sub.step}`;
    })
    .join(",");

  return `${base},${subs}`;
};

export const generateConfigJson = (
  selectedCharConfigs: CharacterConfigStore[],
  allRelics: Record<string, RelicConfigStore>,
) => {
  const avatar_config = selectedCharConfigs
    .filter((char) => {
      const hasLightcone = char.lightcone && char.lightcone.id !== null;
      const hasAnyRelic = Object.values(char.relics).some((id) => id !== null);

      return hasLightcone && hasAnyRelic;
    })
    .map((char) => {
      const relicStrings = Object.values(char.relics)
        .filter((id) => id !== null)
        .map((id) => {
          const relicData = allRelics[id as string];
          return formatRelicToString(relicData);
        });

      return {
        name: getName(char.id), 
        id: char.id,
        hp: 100,
        sp: char.sp || 50,
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
        use_technique: char.use_technique || false,
      };
    });

  const battle_config = {
    battle_id: 1,
    stage_id: 1052086,
    cycle_count: 30,
    monster_wave: [[4035010]],
    monster_level: 82,
    blessings: [],
  };

  return {
    avatar_config,
    battle_config,
  };
};