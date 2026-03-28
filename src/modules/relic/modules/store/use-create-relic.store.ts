import { RelicConfigStore } from "@/src/store/types";
import { create } from "zustand";

interface CreateRelicStore {
  relic: any;
  updateRelic: (updates: Partial<RelicConfigStore>) => void;
}

const DEFAULT_CREATE_RELIC = {
  id: crypto.randomUUID(),
  relic_id: null,
  relic_set_id: null,
  type: null,
  level: 15,
  main_affix_id: null,
  sub_affixes: [
    {
      sub_affix_id: null,
      count: null,
      step: null,
    },
    {
      sub_affix_id: null,
      count: null,
      step: null,
    },
    {
      sub_affix_id: null,
      count: null,
      step: null,
    },
    {
      sub_affix_id: null,
      count: null,
      step: null,
    },
  ],
};

export const useCreateRelicStore = create<CreateRelicStore>((set) => ({
  relic: DEFAULT_CREATE_RELIC,
  updateRelic: (updates) =>
    set((state) => {
      return {
        relic: {
          ...state.relic,
          ...updates,
        },
      };
    }),
}));
