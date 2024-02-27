import { mainStatBody, mainStatFeet, mainStatLink, mainStatPlanar } from "./dataStat.js";

const relic = [
  {
    id: 1,
    relic: true,
    name: "Passerby of Wandering Cloud",
    img: "relic-sets/71000.webp",
    pc2: "2-Pc: Increases Outgoing Healing by 10%.",
    pc4: "4-Pc: At the start of the battle, immediately regenerates 1 Skill Point.",
    set: [
      { id: 1, relicId: 61011, name: "Head", img: "relics/IconRelic_101_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61012, name: "Hands", img: "relics/IconRelic_101_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61013,
        name: "Body",
        img: "relics/IconRelic_101_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61014,
        name: "Feet",
        img: "relics/IconRelic_101_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 2,
    relic: true,
    name: "Musketeer of Wild Wheat",
    img: "relic-sets/71001.webp",
    pc2: "2-Pc: ATK increases by 12%.",
    pc4: "4-Pc: The wearer's SPD increases by 6% and Basic ATK DMG increases by 10%.",
    set: [
      { id: 1, relicId: 61021, name: "Head", img: "relics/IconRelic_102_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61022, name: "Hands", img: "relics/IconRelic_102_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61023,
        name: "Body",
        img: "relics/IconRelic_102_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61024,
        name: "Feet",
        img: "relics/IconRelic_102_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 3,
    relic: true,
    name: "Knight of Purity Palace",
    img: "relic-sets/71002.webp",
    pc2: "2-Pc: Increases DEF by 15%.",
    pc4: "4-Pc: Increases the max DMG that can be absorbed by the Shield created by the wearer by 20%.",
    set: [
      { id: 1, relicId: 61031, name: "Head", img: "relics/IconRelic_103_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61032, name: "Hands", img: "relics/IconRelic_103_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61033,
        name: "Body",
        img: "relics/IconRelic_103_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61034,
        name: "Feet",
        img: "relics/IconRelic_103_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 4,
    relic: true,
    name: "Hunter of Glacial Forest",
    img: "relic-sets/71003.webp",
    pc2: "2-Pc: Increases Ice DMG by 10%.",
    pc4: "4-Pc: After the wearer uses their Ultimate, their CRIT DMG increases by 25% for 2 turn(s).",
    set: [
      { id: 1, relicId: 61041, name: "Head", img: "relics/IconRelic_104_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61042, name: "Hands", img: "relics/IconRelic_104_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61043,
        name: "Body",
        img: "relics/IconRelic_104_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61044,
        name: "Feet",
        img: "relics/IconRelic_104_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 5,
    relic: true,
    name: "Champion of Streetwise Boxing",
    img: "relic-sets/71004.webp",
    pc2: "2-Pc: Increases Physical DMG by 10%.",
    pc4: "4-Pc: After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s).",
    set: [
      { id: 1, relicId: 61051, name: "Head", img: "relics/IconRelic_105_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61052, name: "Hands", img: "relics/IconRelic_105_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61053,
        name: "Body",
        img: "relics/IconRelic_105_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61054,
        name: "Feet",
        img: "relics/IconRelic_105_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 6,
    relic: true,
    name: "Guard of Wuthering Snow",
    img: "relic-sets/71005.webp",
    pc2: "2-Pc: Reduces DMG taken by 8%.",
    pc4: "4-Pc: At the beginning of the turn, if the wearer's HP is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy.",
    set: [
      { id: 1, relicId: 61061, name: "Head", img: "relics/IconRelic_106_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61062, name: "Hands", img: "relics/IconRelic_106_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61063,
        name: "Body",
        img: "relics/IconRelic_106_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61064,
        name: "Feet",
        img: "relics/IconRelic_106_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 7,
    relic: true,
    name: "Firesmith of Lava-Forging",
    img: "relic-sets/71006.webp",
    pc2: "2-Pc: Increases Fire DMG by 10%.",
    pc4: "4-Pc: Increases the wearer's Skill DMG by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for the next attack.",
    set: [
      { id: 1, relicId: 61071, name: "Head", img: "relics/IconRelic_107_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61072, name: "Hands", img: "relics/IconRelic_107_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61073,
        name: "Body",
        img: "relics/IconRelic_107_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61074,
        name: "Feet",
        img: "relics/IconRelic_107_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 8,
    relic: true,
    name: "Genius of Brilliant Stars",
    img: "relic-sets/71007.webp",
    pc2: "2-Pc: Increases Quantum DMG by 10%.",
    pc4: "4-Pc: When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF.",
    set: [
      { id: 1, relicId: 61081, name: "Head", img: "relics/IconRelic_108_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61082, name: "Hands", img: "relics/IconRelic_108_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61083,
        name: "Body",
        img: "relics/IconRelic_108_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61084,
        name: "Feet",
        img: "relics/IconRelic_108_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 9,
    relic: true,
    name: "Band of Sizzling Thunder",
    img: "relic-sets/71008.webp",
    pc2: "2-Pc: Increases Lightning DMG by 10%.",
    pc4: "4-Pc: When the wearer uses their Skill, increases the wearer's ATK by 20% for 1 turn(s).",
    set: [
      { id: 1, relicId: 61091, name: "Head", img: "relics/IconRelic_109_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61092, name: "Hands", img: "relics/IconRelic_109_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61093,
        name: "Body",
        img: "relics/IconRelic_109_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61094,
        name: "Feet",
        img: "relics/IconRelic_109_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 10,
    relic: true,
    name: "Eagle of Twilight Line",
    img: "relic-sets/71009.webp",
    pc2: "2-Pc: Increases Wind DMG by 10%.",
    pc4: "4-Pc: After the wearer uses their Ultimate, their action is Advanced Forward by 25%.",
    set: [
      { id: 1, relicId: 61101, name: "Head", img: "relics/IconRelic_110_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61102, name: "Hands", img: "relics/IconRelic_110_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61103,
        name: "Body",
        img: "relics/IconRelic_110_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61104,
        name: "Feet",
        img: "relics/IconRelic_110_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 11,
    relic: true,
    name: "Thief of Shooting Meteor",
    img: "relic-sets/71010.webp",
    pc2: "2-Pc: Increases Break Effect by 16%.",
    pc4: "4-Pc: Increases the wearer's Break Effect by 16%. After the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy.",
    set: [
      { id: 1, relicId: 61111, name: "Head", img: "relics/IconRelic_111_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61112, name: "Hands", img: "relics/IconRelic_111_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61113,
        name: "Body",
        img: "relics/IconRelic_111_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61114,
        name: "Feet",
        img: "relics/IconRelic_111_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 12,
    relic: true,
    name: "Wastelander of Banditry Desert",
    img: "relic-sets/71011.webp",
    pc2: "2-Pc: Increases Imaginary DMG by 10%.",
    pc4: "4-Pc: When attacking debuffed enemies, the wearer's CRIT Rate increases by 10%, and their CRIT DMG increases by 20% against Imprisoned enemies.",
    set: [
      { id: 1, relicId: 61121, name: "Head", img: "relics/IconRelic_112_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61122, name: "Hands", img: "relics/IconRelic_112_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61123,
        name: "Body",
        img: "relics/IconRelic_112_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61124,
        name: "Feet",
        img: "relics/IconRelic_112_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 13,
    relic: false,
    name: "Space Sealing Station",
    img: "relic-sets/71012.webp",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD reaches 120 or higher, the wearer's ATK increases by an extra 12%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63015,
        name: "Planar Sphere",
        img: "relics/IconRelic_301_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63016,
        name: "Link Rope",
        img: "relics/IconRelic_301_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 14,
    relic: false,
    name: "Fleet of the Ageless",
    img: "relic-sets/71013.webp",
    pc2: "2-Pc: Increases the wearer's Max HP by 12%. When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63025,
        name: "Planar Sphere",
        img: "relics/IconRelic_302_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63026,
        name: "Link Rope",
        img: "relics/IconRelic_302_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 15,
    relic: false,
    name: "Pan-Cosmic Commercial Enterprise",
    img: "relic-sets/71014.webp",
    pc2: "2-Pc: Increases the wearer's Effect Hit Rate by 10%. Meanwhile, the wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate, up to a maximum of 25%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63035,
        name: "Planar Sphere",
        img: "relics/IconRelic_303_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63036,
        name: "Link Rope",
        img: "relics/IconRelic_303_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 16,
    relic: false,
    name: "Belobog of the Architects",
    img: "relic-sets/71015.webp",
    pc2: "2-Pc: Increases the wearer's DEF by 15%. When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63045,
        name: "Planar Sphere",
        img: "relics/IconRelic_304_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63046,
        name: "Link Rope",
        img: "relics/IconRelic_304_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 17,
    relic: false,
    name: "Celestial Differentiator",
    img: "relic-sets/71016.webp",
    pc2: "2-Pc: Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63055,
        name: "Planar Sphere",
        img: "relics/IconRelic_305_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63056,
        name: "Link Rope",
        img: "relics/IconRelic_305_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 18,
    relic: false,
    name: "Inert Salsotto",
    img: "relic-sets/71017.webp",
    pc2: "2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 50% or higher, the wearer's Ultimate and follow-up attack DMG increases by 15%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63065,
        name: "Planar Sphere",
        img: "relics/IconRelic_306_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63066,
        name: "Link Rope",
        img: "relics/IconRelic_306_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 19,
    relic: false,
    name: "Talia: Kingdom of Banditry",
    img: "relic-sets/71018.webp",
    pc2: "2-Pc: Increases the wearer's Break Effect by 16%. When the wearer's SPD reaches 145 or higher, the wearer's Break Effect increases by an extra 20%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63075,
        name: "Planar Sphere",
        img: "relics/IconRelic_307_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63076,
        name: "Link Rope",
        img: "relics/IconRelic_307_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 20,
    relic: false,
    name: "Sprightly Vonwacq",
    img: "relic-sets/71019.webp",
    pc2: "2-Pc: Increases the wearer's Energy Regeneration Rate by 5%. When the wearer's SPD reaches 120 or higher, the wearer's action is Advanced Forward by 40% immediately upon entering battle.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63085,
        name: "Planar Sphere",
        img: "relics/IconRelic_308_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63086,
        name: "Link Rope",
        img: "relics/IconRelic_308_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 21,
    relic: true,
    name: "Longevous Disciple",
    img: "relic-sets/71020.webp",
    pc2: "2-Pc: Increases Max HP by 12%.",
    pc4: "4-Pc: When the wearer is hit or has their HP consumed by an ally or themselves, their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks.",
    set: [
      { id: 1, relicId: 61131, name: "Head", img: "relics/IconRelic_113_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61132, name: "Hands", img: "relics/IconRelic_113_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61133,
        name: "Body",
        img: "relics/IconRelic_113_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61134,
        name: "Feet",
        img: "relics/IconRelic_113_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 22,
    relic: true,
    name: "Messenger Traversing Hackerspace",
    img: "relic-sets/71021.webp",
    pc2: "2-Pc: Increases SPD by 6%.",
    pc4: "4-Pc: When the wearer uses their Ultimate on an ally, SPD for all allies increases by 12% for 1 turn(s). This effect cannot be stacked.",
    set: [
      { id: 1, relicId: 61141, name: "Head", img: "relics/IconRelic_114_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61142, name: "Hands", img: "relics/IconRelic_114_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61143,
        name: "Body",
        img: "relics/IconRelic_114_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61144,
        name: "Feet",
        img: "relics/IconRelic_114_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 23,
    relic: false,
    name: "Rutilant Arena",
    img: "relic-sets/71022.webp",
    pc2: "2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 70% or higher, the wearer's Basic ATK and Skill DMG increase by 20%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63095,
        name: "Planar Sphere",
        img: "relics/IconRelic_309_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63096,
        name: "Link Rope",
        img: "relics/IconRelic_309_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 24,
    relic: false,
    name: "Broken Keel",
    img: "relic-sets/71023.webp",
    pc2: "2-Pc: Increases the wearer's Effect RES by 10%. When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63105,
        name: "Planar Sphere",
        img: "relics/IconRelic_310_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63106,
        name: "Link Rope",
        img: "relics/IconRelic_310_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 25,
    relic: true,
    name: "The Ashblazing Grand Duke",
    img: "relic-sets/71024.webp",
    pc2: "2-Pc: Increases the DMG dealt by follow-up attacks by 20%.",
    pc4: "4-Pc: When the wearer uses follow-up attacks, increases the wearer's ATK by 6% for every time the follow-up attack deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a follow-up attack.",
    set: [
      { id: 1, relicId: 61151, name: "Head", img: "relics/IconRelic_115_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61152, name: "Hands", img: "relics/IconRelic_115_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61153,
        name: "Body",
        img: "relics/IconRelic_115_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61154,
        name: "Feet",
        img: "relics/IconRelic_115_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 26,
    relic: true,
    name: "Prisoner in Deep Confinement",
    img: "relic-sets/71025.webp",
    pc2: "2-Pc: ATK increases by 12%.",
    pc4: "4-Pc: For every DoT the target enemy is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs.",
    set: [
      { id: 1, relicId: 61161, name: "Head", img: "relics/IconRelic_116_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61162, name: "Hands", img: "relics/IconRelic_116_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61163,
        name: "Body",
        img: "relics/IconRelic_116_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61164,
        name: "Feet",
        img: "relics/IconRelic_116_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 27,
    relic: false,
    name: "Firmament Frontline: Glamoth",
    img: "relic-sets/71026.webp",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD is equal to or higher than 135/160, the wearer deals 12%/18% more DMG.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63115,
        name: "Planar Sphere",
        img: "relics/IconRelic_311_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63116,
        name: "Link Rope",
        img: "relics/IconRelic_311_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 28,
    relic: false,
    name: "Penacony, Land of the Dreams",
    img: "relic-sets/71027.webp",
    pc2: "2-Pc: Increases wearer's Energy Regeneration Rate by 5%. Increases DMG by 10% for all other allies that are of the same Type as the wearer.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63125,
        name: "Planar Sphere",
        img: "relics/IconRelic_312_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63126,
        name: "Link Rope",
        img: "relics/IconRelic_312_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 29,
    relic: true,
    name: "Pioneer Diver of Dead Waters",
    img: "relic-sets/71028.webp",
    pc2: "2-Pc: Increases DMG dealt to enemies with debuff by 12%.",
    pc4: "4-Pc: Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s).",
    set: [
      { id: 1, relicId: 61171, name: "Head", img: "relics/IconRelic_117_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61172, name: "Hands", img: "relics/IconRelic_117_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61173,
        name: "Body",
        img: "relics/IconRelic_117_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61174,
        name: "Feet",
        img: "relics/IconRelic_117_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 30,
    relic: true,
    name: "Watchmaker, Master of Dream Machinations",
    img: "relic-sets/71029.webp",
    pc2: "2-Pc: Increases Break Effect by 16%.",
    pc4: "4-Pc: When the wearer uses their Ultimate on an ally, all allies' Break Effect increases by 30% for 2 turn(s). This effect cannot be stacked.",
    set: [
      { id: 1, relicId: 61181, name: "Head", img: "relics/IconRelic_118_1.webp", mainStat: [{ id: 1, name: "HP", value: 112 }] },
      { id: 2, relicId: 61182, name: "Hands", img: "relics/IconRelic_118_2.webp", mainStat: [{ id: 1, name: "ATK", value: 56 }] },
      {
        id: 3,
        relicId: 61183,
        name: "Body",
        img: "relics/IconRelic_118_3.webp",
        mainStat: mainStatBody,
      },
      {
        id: 4,
        relicId: 61184,
        name: "Feet",
        img: "relics/IconRelic_118_4.webp",
        mainStat: mainStatFeet,
      },
    ],
  },
  {
    id: 31,
    relic: false,
    name: "Sigonia, the Unclaimed Desolation",
    img: "relic-sets/71030.webp",
    pc2: "2-Pc: When enemies are defeated, the wearer's CRIT DMG increases by 4%, up to 10 times.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63135,
        name: "Planar Sphere",
        img: "relics/IconRelic_313_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63136,
        name: "Link Rope",
        img: "relics/IconRelic_313_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
  {
    id: 32,
    relic: false,
    name: "Izumo Gensei and Takama Divine Realm",
    img: "relic-sets/71031.webp",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When entering battle, if at least one other ally follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12%.",
    pc4: "",
    set: [
      {
        id: 1,
        relicId: 63145,
        name: "Planar Sphere",
        img: "relics/IconRelic_314_5.webp",
        mainStat: mainStatPlanar,
      },
      {
        id: 2,
        relicId: 63146,
        name: "Link Rope",
        img: "relics/IconRelic_314_6.webp",
        mainStat: mainStatLink,
      },
    ],
  },
];

export default relic;
