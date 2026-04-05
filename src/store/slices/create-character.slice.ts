import { StateCreator } from "zustand";
import {
  CharacterConfigStore,
  CharacterSlice,
  RelicConfigStore,
  UserStore,
} from "../types";
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
    set((state) => {
      const currentData = state.characters[charId] ?? {
        ...DEFAULT_CHAR_CONFIG,
        id: charId,
      };

      return {
        characters: {
          ...state.characters,
          [charId]: {
            ...currentData,
            relics: {
              ...currentData.relics,
              [slot]: relicId,
            },
          },
        },
      };
    }),

  unequipRelic: (charId, slot) =>
    set((state) => {
      const currentData = state.characters[charId] ?? {
        ...DEFAULT_CHAR_CONFIG,
        id: charId,
      };

      return {
        characters: {
          ...state.characters,
          [charId]: {
            ...currentData,
            relics: {
              ...currentData.relics,
              [slot]: null,
            },
          },
        },
      };
    }),

  addImportedData: (
    newRelics: Record<string, RelicConfigStore>,
    newCharacters: Record<number, CharacterConfigStore>,
  ) =>
    set((state) => ({
      relics: { ...state.relics, ...newRelics },
      characters: { ...state.characters, ...newCharacters },
    })),
});
