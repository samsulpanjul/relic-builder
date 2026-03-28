import { StateCreator } from "zustand";
import { CharacterSlice, UserStore } from "../types";
import { DEFAULT_CHAR_CONFIG } from "@/src/utils/constants";

export const createCharacterSlice: StateCreator<
  UserStore,
  [],
  [],
  CharacterSlice
> = (set) => ({
  characters: {},
  updateCharacter: (charId, updates) =>
    set((state) => {
      const currentData = state.characters[charId] ?? {
        ...DEFAULT_CHAR_CONFIG,
        id: charId,
      };

      return {
        characters: {
          ...state.characters,
          [charId]: { ...currentData, ...updates },
        },
      };
    }),

  equipRelic: (charId, relicId, slot) =>
    set((state) => ({
      characters: {
        ...state.characters,
        [charId]: {
          ...state.characters[charId],
          relics: {
            ...state.characters[charId].relics,
            [slot]: relicId,
          },
        },
      },
    })),

  unequipRelic: (charId, slot) =>
    set((state) => ({
      characters: {
        ...state.characters,
        [charId]: {
          ...state.characters[charId],
          relics: {
            ...state.characters[charId].relics,
            [slot]: null,
          },
        },
      },
    })),
});
