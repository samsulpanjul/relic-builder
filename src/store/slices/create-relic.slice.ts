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
  deleteRelic: (id) =>
    set((state) => {
      const newRelics = { ...state.relics };
      delete newRelics[id];

      return {
        relics: newRelics,
      };
    }),
});
