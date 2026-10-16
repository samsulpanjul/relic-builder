import { StateCreator } from "zustand";
import { RelicSlice, UserStore } from "../types";

export const createRelicSlice: StateCreator<UserStore, [], [], RelicSlice> = (
  set,
) => ({
  relics: {},
  addRelic: (relic) =>
    set((state) => {
      const id = crypto.randomUUID();

      return {
        relics: {
          ...state.relics,
          [id]: {
            ...relic,
            id,
          },
        },
      };
    }),

  editRelic: (id, updatedRelic) =>
    set((state) => ({
      relics: {
        ...state.relics,
        [id]: {
          ...state.relics[id],
          ...updatedRelic,
          id,
        },
      },
    })),

  deleteRelic: (id) =>
    set((state) => {
      const newRelics = { ...state.relics };
      delete newRelics[id];

      // unequip from every character still holding this relic
      const newCharacters = { ...state.characters };
      Object.entries(newCharacters).forEach(([charId, char]) => {
        const slots = Object.entries(char.relics).filter(
          ([, relicId]) => relicId === id,
        );
        if (!slots.length) return;

        const updatedRelics = { ...char.relics };
        slots.forEach(([slot]) => {
          updatedRelics[slot as keyof typeof updatedRelics] = null;
        });
        newCharacters[charId] = { ...char, relics: updatedRelics };
      });

      return {
        relics: newRelics,
        characters: newCharacters,
      };
    }),
});
