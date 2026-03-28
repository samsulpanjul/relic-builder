import { CharacterConfigStore } from "../store/types";

export const BASE_URL = {
  enka: "/api/enka",
  neonteam: "/api/neonteam",
} as const;

export const PATHS = [
  "Elation",
  "Knight",
  "Mage",
  "Memory",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
];

export const ELEMENTS = [
  "Fire",
  "Ice",
  "Imaginary",
  "Physical",
  "Quantum",
  "Thunder",
  "Wind",
];

export const DEFAULT_CHAR_CONFIG: CharacterConfigStore = {
  id: 1001,
  rank: 0,
  level: 80,
  promotion: 6,
  lightcone: {
    id: null,
    level: 80,
    promotion: 6,
    rank: 1,
  },
  relics: {
    head: null,
    hand: null,
    body: null,
    feet: null,
    planar: null,
    rope: null,
  },
  sp: 50,
  use_technique: false,
};
