import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useConfigCharacterStore = create()(
  persist(
    (set) => ({
      config: [],
      editConfig: (id, newConfig) =>
        set((state) => ({
          config: state.config.map((item) => (item.id === id ? { ...item, ...newConfig } : item)),
        })),
      addConfig: (newConfig) => set((state) => ({ config: [...state.config, newConfig] })),
      deleteConfig: (delId) =>
        set((state) => ({
          config: state.config.filter((item) => item.id !== delId),
        })),
      clearConfig: () => set({ config: [] }),
    }),
    {
      name: "character-config-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useCharStore = create((set) => ({
  name: "",
  setName: (name) => set({ name }),
  id: "",
  setId: (id) => set({ id }),
  level: 80,
  setLevel: (level) => set({ level }),
  rank: 0,
  setRank: (rank) => set({ rank }),
  promotion: 6,
  setPromotion: (promotion) => set({ promotion }),
  trace: true,
  setTrace: (trace) => set({ trace }),
  energy: 5000,
  setEnergy: (energy) => set({ energy }),
  technique: false,
  setTechnique: (technique) => set({ technique }),
  reset: () =>
    set(() => ({
      name: "",
      id: "",
      level: 80,
      rank: 0,
      promotion: 6,
      trace: true,
      energy: 5000,
      technique: false,
    })),
}));

export const useLightconeStore = create((set) => ({
  id: "",
  setId: (id) => set({ id }),
  rank: 1,
  setRank: (rank) => set({ rank }),
  level: 80,
  setLevel: (level) => set({ level }),
  promotion: 6,
  setPromotion: (promotion) => set({ promotion }),
  reset: () =>
    set(() => ({
      id: "",
      level: 80,
      rank: 1,
      promotion: 6,
      trace: true,
      energy: 5000,
    })),
}));
