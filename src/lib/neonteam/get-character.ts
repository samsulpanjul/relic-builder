import { env } from "@/src/env";
import { getMetadata } from "./get-metadata";
import { getTextmaps } from "./get-textmaps";
import { CharacterRawDataList } from "@/src/types/neonteam/character";

export const getCharacters = async () => {
  const [metadata, textmaps] = await Promise.all([
    getMetadata(),
    getTextmaps(),
  ]);

  const res = await fetch(
    `${env.NEONTEAM_BASE_URL}/${metadata.CurrentVersion}/avatars.json`,
  );

  const data: CharacterRawDataList = await res.json();

  const allCharacters = Object.entries(data).map(([id, character]) => {
    const ranks = Object.entries(character.ranks).map(([id, rank]) => {
      const parsedRank = {
        ...rank,
        name: textmaps?.[rank.name],
        desc: textmaps?.[rank.desc],
      };
      return [id, parsedRank];
    });

    const skillTrees = Object.entries(character.skill_trees).map(
      ([id, skillTree]) => {
        const parsedSkillTrees = {
          ...skillTree,
          name: textmaps?.[skillTree.name],
          desc: textmaps?.[skillTree.desc],
        };
        return [id, parsedSkillTrees];
      },
    );

    const skills = Object.entries(character.skills).map(([id, skill]) => {
      const parsedSkill = {
        ...skill,
        name: textmaps?.[skill.name],
        desc: textmaps?.[skill.desc],
        effect_text: textmaps?.[skill.effect_text],
        simple_desc: textmaps?.[skill.simple_desc],
        type_text: textmaps?.[skill.type_text],
      };
      return [id, parsedSkill];
    });

    const parsedCharacter = {
      ...character,
      name: textmaps?.[character.name],
      ranks: Object.fromEntries(ranks),
      skill_trees: Object.fromEntries(skillTrees),
      skills: Object.fromEntries(skills),
    };

    return [id, parsedCharacter];
  });

  const parsedData = Object.fromEntries(allCharacters);

  return parsedData;
};
