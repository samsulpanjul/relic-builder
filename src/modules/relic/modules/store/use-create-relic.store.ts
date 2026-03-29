import { create } from "zustand";

type CreateRelicType = {
  relic_id?: number;
  relic_set_id?: number;
  type?: string;
  level?: number;
  main_affix_id?: number;
  sub_affixes: { sub_affix_id?: number; count?: number; step?: number }[];
};

interface CreateRelicStore {
  relic: CreateRelicType;
  updateRelic: (updates: Partial<CreateRelicType>) => void;
  updateSubStat: (
    index: number,
    data: Partial<{ sub_affix_id?: number; count?: number; step?: number }>,
  ) => void;
}

export const DEFAULT_CREATE_RELIC: CreateRelicType = {
  relic_id: undefined,
  relic_set_id: undefined,
  type: undefined,
  level: 15,
  main_affix_id: undefined,
  sub_affixes: [
    {
      sub_affix_id: undefined,
      count: undefined,
      step: undefined,
    },
    {
      sub_affix_id: undefined,
      count: undefined,
      step: undefined,
    },
    {
      sub_affix_id: undefined,
      count: undefined,
      step: undefined,
    },
    {
      sub_affix_id: undefined,
      count: undefined,
      step: undefined,
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
  updateSubStat: (index, data) =>
    set((state) => {
      const newSubs = [...state.relic.sub_affixes];
      newSubs[index] = { ...newSubs[index], ...data };
      return { relic: { ...state.relic, sub_affixes: newSubs } };
    }),
}));
