import { create } from "zustand";
import { CharacterDetails } from "../utils/character-detail.type";
import { LightconeDetails } from "../utils/lightcone-detail.type";

interface CharacterStore {
  id?: string;
  setId: (id: string) => void;
  char?: CharacterDetails;
  setChar: (char: CharacterDetails) => void;
  lightcone?: LightconeDetails;
  setLightcone?: (lightcone: LightconeDetails) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  id: undefined,
  setId: (id) => set({ id }),
  char: undefined,
  setChar: (char) => set({ char }),
  lightcone: undefined,
  setLightcone: (lightcone) => set({ lightcone }),
}));
