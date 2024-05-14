import { create } from "zustand";

export const useHeadStore = create((set) => ({
  relicHead: "",
  setRelicHead: (relicHead) => set({ relicHead }),
  mainStatHead: "",
  setMainStatHead: (mainStatHead) => set({ mainStatHead }),
  sub: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStat: (index, stat) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStep: (index) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgrade: state.upgrade + 1,
    })),
  decreaseSubStep: (index) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgrade: state.upgrade - 1,
    })),
  setRoll: (index, roll) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgrade: 0,
  resetHead: () =>
    set({
      relicHead: "",
      mainStatHead: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgrade: 0,
    }),
}));

export const useHandStore = create((set) => ({
  relicHand: "",
  setRelicHand: (relicHand) => set({ relicHand }),
  mainStatHand: "",
  setMainStatHand: (mainStatHand) => set({ mainStatHand }),
  subHand: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStatHand: (index, stat) =>
    set((state) => ({
      subHand: state.subHand.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStepHand: (index) =>
    set((state) => ({
      subHand: state.subHand.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgradeHand: state.upgradeHand + 1,
    })),
  decreaseSubStepHand: (index) =>
    set((state) => ({
      subHand: state.subHand.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgradeHand: state.upgradeHand - 1,
    })),
  setRollHand: (index, roll) =>
    set((state) => ({
      subHand: state.subHand.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgradeHand: 0,
  resetHand: () =>
    set({
      relicHand: "",
      mainStatHand: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgradeHand: 0,
    }),
}));

export const useBodyStore = create((set) => ({
  relicBody: "",
  setRelicBody: (relicBody) => set({ relicBody }),
  mainStatBody: "",
  setMainStatBody: (mainStatBody) => set({ mainStatBody }),
  subBody: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStatBody: (index, stat) =>
    set((state) => ({
      subBody: state.subBody.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStepBody: (index) =>
    set((state) => ({
      subBody: state.subBody.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgradeBody: state.upgradeBody + 1,
    })),
  decreaseSubStepBody: (index) =>
    set((state) => ({
      subBody: state.subBody.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgradeBody: state.upgradeBody - 1,
    })),
  setRollBody: (index, roll) =>
    set((state) => ({
      subBody: state.subBody.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgradeBody: 0,
  resetBody: () =>
    set({
      relicBody: "",
      mainStatBody: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgradeBody: 0,
    }),
}));

export const useFeetStore = create((set) => ({
  relicFeet: "",
  setRelicFeet: (relicFeet) => set({ relicFeet }),
  mainStatFeet: "",
  setMainStatFeet: (mainStatFeet) => set({ mainStatFeet }),
  subFeet: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStatFeet: (index, stat) =>
    set((state) => ({
      subFeet: state.subFeet.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStepFeet: (index) =>
    set((state) => ({
      subFeet: state.subFeet.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgradeFeet: state.upgradeFeet + 1,
    })),
  decreaseSubStepFeet: (index) =>
    set((state) => ({
      subFeet: state.subFeet.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgradeFeet: state.upgradeFeet - 1,
    })),
  setRollFeet: (index, roll) =>
    set((state) => ({
      subFeet: state.subFeet.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgradeFeet: 0,
  resetFeet: () =>
    set({
      relicFeet: "",
      mainStatFeet: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgradeFeet: 0,
    }),
}));

export const usePlanarStore = create((set) => ({
  relicPlanar: "",
  setRelicPlanar: (relicPlanar) => set({ relicPlanar }),
  mainStatPlanar: "",
  setMainStatPlanar: (mainStatPlanar) => set({ mainStatPlanar }),
  subPlanar: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStatPlanar: (index, stat) =>
    set((state) => ({
      subPlanar: state.subPlanar.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStepPlanar: (index) =>
    set((state) => ({
      subPlanar: state.subPlanar.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgradePlanar: state.upgradePlanar + 1,
    })),
  decreaseSubStepPlanar: (index) =>
    set((state) => ({
      subPlanar: state.subPlanar.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgradePlanar: state.upgradePlanar - 1,
    })),
  setRollPlanar: (index, roll) =>
    set((state) => ({
      subPlanar: state.subPlanar.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgradePlanar: 0,
  resetPlanar: () =>
    set({
      relicPlanar: "",
      mainStatPlanar: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgradePlanar: 0,
    }),
}));

export const useRopeStore = create((set) => ({
  relicRope: "",
  setRelicRope: (relicRope) => set({ relicRope }),
  mainStatRope: "",
  setMainStatRope: (mainStatRope) => set({ mainStatRope }),
  subRope: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStatRope: (index, stat) =>
    set((state) => ({
      subRope: state.subRope.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStepRope: (index) =>
    set((state) => ({
      subRope: state.subRope.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgradeRope: state.upgradeRope + 1,
    })),
  decreaseSubStepRope: (index) =>
    set((state) => ({
      subRope: state.subRope.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgradeRope: state.upgradeRope - 1,
    })),
  setRollRope: (index, roll) =>
    set((state) => ({
      subRope: state.subRope.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgradeRope: 0,
  resetRope: () =>
    set({
      relicRope: "",
      mainStatRope: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgradeRope: 0,
    }),
}));

export const useRelicStore = create((set) => ({
  relic: "",
  setRelic: (relic) => set({ relic, piece: 1 }),
  piece: 1,
  setPiece: (piece) => set({ piece }),
  mainStat: "",
  setMainStat: (mainStat) => set({ mainStat }),
  sub: [
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
    {
      stat: "",
      step: 1,
      roll: 1,
    },
  ],
  setSubStat: (index, stat) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, stat: stat } : subItem)),
    })),
  increaseSubStep: (index) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step + 1 } : subItem)),
      upgrade: state.upgrade + 1,
    })),
  decreaseSubStep: (index) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, step: subItem.step - 1 } : subItem)),
      upgrade: state.upgrade - 1,
    })),
  setRoll: (index, roll) =>
    set((state) => ({
      sub: state.sub.map((subItem, i) => (i === index ? { ...subItem, roll: roll } : subItem)),
    })),
  upgrade: 0,
  reset: () =>
    set({
      relic: "",
      piece: 1,
      mainStat: "",
      sub: [
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
        { stat: "", step: 1, roll: 1 },
      ],
      upgrade: 0,
    }),
}));
