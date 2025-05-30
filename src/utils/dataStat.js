const mainStatHead = [{ id: 1, name: "HP", base: 112.896, perLv: 1.4, max: 705.6 }];

const mainStatHand = [{ id: 1, name: "ATK", base: 56.448, perLv: 19.7568, max: 352.8 }];

const mainStatBody = [
  { id: 1, name: "HP%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 2, name: "ATK%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 3, name: "DEF%", base: 0.0864, perLv: 0.03024, max: 0.54 },
  { id: 4, name: "Crit Rate", base: 0.05184, perLv: 0.018144, max: 0.324 },
  { id: 5, name: "Crit DMG", base: 0.10368, perLv: 0.036288, max: 0.648 },
  { id: 6, name: "Outgoing Healing", base: 0.055296, perLv: 1.9354, max: 0.345606 },
  { id: 7, name: "Effect HIT Rate", base: 0.06912, perLv: 0.024192, max: 0.432 },
];

const mainStatFeet = [
  { id: 1, name: "HP%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 2, name: "ATK%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 3, name: "DEF%", base: 0.0864, perLv: 0.03024, max: 0.54 },
  { id: 4, name: "Speed", base: 0.04032, perLv: 0.014, max: 25.032 },
];

const mainStatPlanar = [
  { id: 1, name: "HP%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 2, name: "ATK%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 3, name: "DEF%", base: 0.0864, perLv: 0.03024, max: 0.54 },
  { id: 4, name: "Physical Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 5, name: "Fire Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 6, name: "Ice Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 7, name: "Lightning Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 8, name: "Wind Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 9, name: "Quantum Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
  { id: 10, name: "Imaginary Damage", base: 0.062208, perLv: 0.021773, max: 0.388803 },
];

const mainStatLink = [
  { id: 1, name: "Break Effect", base: 0.10368, perLv: 0.036277, max: 0.648 },
  { id: 2, name: "Energy Regeneration Rate", base: 0.031104, perLv: 0.010886, max: 0.194394 },
  { id: 3, name: "HP%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 4, name: "ATK%", base: 0.06912, perLv: 0.024192, max: 0.432 },
  { id: 5, name: "DEF%", base: 0.0864, perLv: 0.03024, max: 0.54 },
];

const subStats = [
  {
    id: 1,
    name: "HP",
    value: [33.87, 38.103755, 42.33751],
  },
  {
    id: 2,
    name: "ATK",
    value: [16.935, 19.051877, 21.168754],
  },
  {
    id: 3,
    name: "DEF",
    value: [16.935, 19.051877, 21.168754],
  },
  {
    id: 4,
    name: "HP%",
    value: [0.03456, 0.03888, 0.0432],
  },
  {
    id: 5,
    name: "ATK%",
    value: [0.03456, 0.03888, 0.0432],
  },
  {
    id: 6,
    name: "DEF%",
    value: [0.0432, 0.0486, 0.054],
  },
  {
    id: 7,
    name: "Speed",
    value: [2, 2.3, 2.6],
  },
  {
    id: 8,
    name: "Crit Rate",
    value: [0.02592, 0.02916, 0.0324],
  },
  {
    id: 9,
    name: "Crit DMG",
    value: [0.05184, 0.05832, 0.0648],
  },
  {
    id: 10,
    name: "Effect HIT Rate",
    value: [0.03456, 0.03888, 0.0432],
  },
  {
    id: 11,
    name: "Effect RES",
    value: [0.03456, 0.03888, 0.0432],
  },
  {
    id: 12,
    name: "Break Effect",
    value: [0.05184, 0.05832, 0.0648],
  },
];

export { mainStatHead, mainStatHand, mainStatBody, mainStatFeet, mainStatPlanar, mainStatLink, subStats };
