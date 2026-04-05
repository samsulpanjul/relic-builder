export const SLOT_MAP: Record<number, string> = {
  1: "HEAD",
  2: "HAND",
  3: "BODY",
  4: "FOOT",
  5: "NECK",
  6: "OBJECT",
};

export const REVERSE_SLOT_MAP: Record<string, string> = {
  HEAD: "1",
  HAND: "2",
  BODY: "3",
  FOOT: "4",
  NECK: "5",
  OBJECT: "6",
};

export const STAT_TYPE_TO_ID: Record<string, number> = {
  HPDelta: 1,
  AttackDelta: 2,
  DefenceDelta: 3,
  HPAddedRatio: 4,
  AttackAddedRatio: 5,
  DefenceAddedRatio: 6,
  SpeedDelta: 7,
  CriticalChanceBase: 8,
  CriticalDamageBase: 9,
  StatusProbabilityBase: 10,
  StatusResistanceBase: 11,
  BreakDamageAddedRatioBase: 12,
};

export const MAIN_AFFIX_MAP: Record<number, Record<string, number>> = {
  51: { HPDelta: 1 },
  52: { AttackDelta: 1 },
  53: {
    HPAddedRatio: 1,
    AttackAddedRatio: 2,
    DefenceAddedRatio: 3,
    CriticalChanceBase: 4,
    CriticalDamageBase: 5,
    HealRatioBase: 6,
    StatusProbabilityBase: 7,
  },
  54: {
    HPAddedRatio: 1,
    AttackAddedRatio: 2,
    DefenceAddedRatio: 3,
    SpeedDelta: 4,
  },
  55: {
    HPAddedRatio: 1,
    AttackAddedRatio: 2,
    DefenceAddedRatio: 3,
    PhysicalAddedRatio: 4,
    FireAddedRatio: 5,
    IceAddedRatio: 6,
    ThunderAddedRatio: 7,
    WindAddedRatio: 8,
    QuantumAddedRatio: 9,
    ImaginaryAddedRatio: 10,
  },
  56: {
    BreakDamageAddedRatioBase: 1,
    SPRatioBase: 2,
    HPAddedRatio: 3,
    AttackAddedRatio: 4,
    DefenceAddedRatio: 5,
  },
};

export const TYPE_TO_GROUP: Record<number, number> = {
  1: 51,
  2: 52,
  3: 53,
  4: 54,
  5: 55,
  6: 56,
};
