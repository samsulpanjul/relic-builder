const dataRelic = [
  {
    id: 71000,
    type: "relic",
    name: "Passerby of Wandering Cloud",
    pc2: "2-Pc: Increases Outgoing Healing by 10%.",
    pc4: "4-Pc: At the start of the battle, immediately regenerates 1 Skill Point.",
    set: [
      { id: 101_1, relicId: 61011, name: "Head" },
      { id: 101_2, relicId: 61012, name: "Hands" },
      {
        id: 101_3,
        relicId: 61013,
        name: "Body",
      },
      {
        id: 101_4,
        relicId: 61014,
        name: "Feet",
      },
    ],
  },
  {
    id: 71001,
    type: "relic",
    name: "Musketeer of Wild Wheat",
    pc2: "2-Pc: ATK increases by 12%.",
    pc4: "4-Pc: The wearer's SPD increases by 6% and Basic ATK DMG increases by 10%.",
    set: [
      { id: 102_1, relicId: 61021, name: "Head" },
      { id: 102_2, relicId: 61022, name: "Hands" },
      {
        id: 102_3,
        relicId: 61023,
        name: "Body",
      },
      {
        id: 102_4,
        relicId: 61024,
        name: "Feet",
      },
    ],
  },
  {
    id: 71002,
    type: "relic",
    name: "Knight of Purity Palace",
    pc2: "2-Pc: Increases DEF by 15%.",
    pc4: "4-Pc: Increases the max DMG that can be absorbed by the Shield created by the wearer by 20%.",
    set: [
      { id: 103_1, relicId: 61031, name: "Head" },
      { id: 103_2, relicId: 61032, name: "Hands" },
      {
        id: 103_3,
        relicId: 61033,
        name: "Body",
      },
      {
        id: 103_4,
        relicId: 61034,
        name: "Feet",
      },
    ],
  },
  {
    id: 71003,
    type: "relic",
    name: "Hunter of Glacial Forest",
    pc2: "2-Pc: Increases Ice DMG by 10%.",
    pc4: "4-Pc: After the wearer uses their Ultimate, their CRIT DMG increases by 25% for 2 turn(s).",
    set: [
      { id: 104_1, relicId: 61041, name: "Head" },
      { id: 104_2, relicId: 61042, name: "Hands" },
      {
        id: 104_3,
        relicId: 61043,
        name: "Body",
      },
      {
        id: 104_4,
        relicId: 61044,
        name: "Feet",
      },
    ],
  },
  {
    id: 71004,
    type: "relic",
    name: "Champion of Streetwise Boxing",
    pc2: "2-Pc: Increases Physical DMG by 10%.",
    pc4: "4-Pc: After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s).",
    set: [
      { id: 105_1, relicId: 61051, name: "Head" },
      { id: 105_2, relicId: 61052, name: "Hands" },
      {
        id: 105_3,
        relicId: 61053,
        name: "Body",
      },
      {
        id: 105_4,
        relicId: 61054,
        name: "Feet",
      },
    ],
  },
  {
    id: 71005,
    type: "relic",
    name: "Guard of Wuthering Snow",
    pc2: "2-Pc: Reduces DMG taken by 8%.",
    pc4: "4-Pc: At the beginning of the turn, if the wearer's HP is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy.",
    set: [
      { id: 106_1, relicId: 61061, name: "Head" },
      { id: 106_2, relicId: 61062, name: "Hands" },
      {
        id: 106_3,
        relicId: 61063,
        name: "Body",
      },
      {
        id: 106_4,
        relicId: 61064,
        name: "Feet",
      },
    ],
  },
  {
    id: 71006,
    type: "relic",
    name: "Firesmith of Lava-Forging",
    pc2: "2-Pc: Increases Fire DMG by 10%.",
    pc4: "4-Pc: Increases the wearer's Skill DMG by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for the next attack.",
    set: [
      { id: 107_1, relicId: 61071, name: "Head" },
      { id: 107_2, relicId: 61072, name: "Hands" },
      {
        id: 107_3,
        relicId: 61073,
        name: "Body",
      },
      {
        id: 107_4,
        relicId: 61074,
        name: "Feet",
      },
    ],
  },
  {
    id: 71007,
    type: "relic",
    name: "Genius of Brilliant Stars",
    pc2: "2-Pc: Increases Quantum DMG by 10%.",
    pc4: "4-Pc: When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF.",
    set: [
      { id: 108_1, relicId: 61081, name: "Head" },
      { id: 108_2, relicId: 61082, name: "Hands" },
      {
        id: 108_3,
        relicId: 61083,
        name: "Body",
      },
      {
        id: 108_4,
        relicId: 61084,
        name: "Feet",
      },
    ],
  },
  {
    id: 71008,
    type: "relic",
    name: "Band of Sizzling Thunder",
    pc2: "2-Pc: Increases Lightning DMG by 10%.",
    pc4: "4-Pc: When the wearer uses their Skill, increases the wearer's ATK by 20% for 1 turn(s).",
    set: [
      { id: 109_1, relicId: 61091, name: "Head" },
      { id: 109_2, relicId: 61092, name: "Hands" },
      {
        id: 109_3,
        relicId: 61093,
        name: "Body",
      },
      {
        id: 109_4,
        relicId: 61094,
        name: "Feet",
      },
    ],
  },
  {
    id: 71009,
    type: "relic",
    name: "Eagle of Twilight Line",
    pc2: "2-Pc: Increases Wind DMG by 10%.",
    pc4: "4-Pc: After the wearer uses their Ultimate, their action is Advanced Forward by 25%.",
    set: [
      { id: 110_1, relicId: 61101, name: "Head" },
      { id: 110_2, relicId: 61102, name: "Hands" },
      {
        id: 110_3,
        relicId: 61103,
        name: "Body",
      },
      {
        id: 110_4,
        relicId: 61104,
        name: "Feet",
      },
    ],
  },
  {
    id: 71010,
    type: "relic",
    name: "Thief of Shooting Meteor",
    pc2: "2-Pc: Increases Break Effect by 16%.",
    pc4: "4-Pc: Increases the wearer's Break Effect by 16%. After the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy.",
    set: [
      { id: 111_1, relicId: 61111, name: "Head" },
      { id: 111_2, relicId: 61112, name: "Hands" },
      {
        id: 111_3,
        relicId: 61113,
        name: "Body",
      },
      {
        id: 111_4,
        relicId: 61114,
        name: "Feet",
      },
    ],
  },
  {
    id: 71011,
    type: "relic",
    name: "Wastelander of Banditry Desert",
    pc2: "2-Pc: Increases Imaginary DMG by 10%.",
    pc4: "4-Pc: When attacking debuffed enemies, the wearer's CRIT Rate increases by 10%, and their CRIT DMG increases by 20% against Imprisoned enemies.",
    set: [
      { id: 112_1, relicId: 61121, name: "Head" },
      { id: 112_2, relicId: 61122, name: "Hands" },
      {
        id: 112_3,
        relicId: 61123,
        name: "Body",
      },
      {
        id: 112_4,
        relicId: 61124,
        name: "Feet",
      },
    ],
  },
  {
    id: 71012,
    type: "planar",
    name: "Space Sealing Station",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD reaches 120 or higher, the wearer's ATK increases by an extra 12%.",
    pc4: "",
    set: [
      {
        id: 301_5,
        relicId: 63015,
        name: "Planar Sphere",
      },
      {
        id: 301_6,
        relicId: 63016,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71013,
    type: "planar",
    name: "Fleet of the Ageless",
    pc2: "2-Pc: Increases the wearer's Max HP by 12%. When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8%.",
    pc4: "",
    set: [
      {
        id: 302_5,
        relicId: 63025,
        name: "Planar Sphere",
      },
      {
        id: 302_6,
        relicId: 63026,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71014,
    type: "planar",
    name: "Pan-Cosmic Commercial Enterprise",
    pc2: "2-Pc: Increases the wearer's Effect Hit Rate by 10%. Meanwhile, the wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate, up to a maximum of 25%.",
    pc4: "",
    set: [
      {
        id: 303_5,
        relicId: 63035,
        name: "Planar Sphere",
      },
      {
        id: 303_6,
        relicId: 63036,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71015,
    type: "planar",
    name: "Belobog of the Architects",
    pc2: "2-Pc: Increases the wearer's DEF by 15%. When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF.",
    pc4: "",
    set: [
      {
        id: 304_5,
        relicId: 63045,
        name: "Planar Sphere",
      },
      {
        id: 304_6,
        relicId: 63046,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71016,
    type: "planar",
    name: "Celestial Differentiator",
    pc2: "2-Pc: Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack.",
    pc4: "",
    set: [
      {
        id: 305_5,
        relicId: 63055,
        name: "Planar Sphere",
      },
      {
        id: 305_6,
        relicId: 63056,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71017,
    type: "planar",
    name: "Inert Salsotto",
    pc2: "2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 50% or higher, the wearer's Ultimate and follow-up attack DMG increases by 15%.",
    pc4: "",
    set: [
      {
        id: 306_5,
        relicId: 63065,
        name: "Planar Sphere",
      },
      {
        id: 306_6,
        relicId: 63066,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71018,
    type: "planar",
    name: "Talia: Kingdom of Banditry",
    pc2: "2-Pc: Increases the wearer's Break Effect by 16%. When the wearer's SPD reaches 145 or higher, the wearer's Break Effect increases by an extra 20%.",
    pc4: "",
    set: [
      {
        id: 307_5,
        relicId: 63075,
        name: "Planar Sphere",
      },
      {
        id: 307_6,
        relicId: 63076,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71019,
    type: "planar",
    name: "Sprightly Vonwacq",
    pc2: "2-Pc: Increases the wearer's Energy Regeneration Rate by 5%. When the wearer's SPD reaches 120 or higher, the wearer's action is Advanced Forward by 40% immediately upon entering battle.",
    pc4: "",
    set: [
      {
        id: 308_5,
        relicId: 63085,
        name: "Planar Sphere",
      },
      {
        id: 308_6,
        relicId: 63086,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71020,
    type: "relic",
    name: "Longevous Disciple",
    pc2: "2-Pc: Increases Max HP by 12%.",
    pc4: "4-Pc: When the wearer is hit or has their HP consumed by an ally or themselves, their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks.",
    set: [
      { id: 113_1, relicId: 61131, name: "Head" },
      { id: 113_2, relicId: 61132, name: "Hands" },
      {
        id: 113_3,
        relicId: 61133,
        name: "Body",
      },
      {
        id: 113_4,
        relicId: 61134,
        name: "Feet",
      },
    ],
  },
  {
    id: 71021,
    type: "relic",
    name: "Messenger Traversing Hackerspace",
    pc2: "2-Pc: Increases SPD by 6%.",
    pc4: "4-Pc: When the wearer uses their Ultimate on an ally, SPD for all allies increases by 12% for 1 turn(s). This effect cannot be stacked.",
    set: [
      { id: 114_1, relicId: 61141, name: "Head" },
      { id: 114_2, relicId: 61142, name: "Hands" },
      {
        id: 114_3,
        relicId: 61143,
        name: "Body",
      },
      {
        id: 114_4,
        relicId: 61144,
        name: "Feet",
      },
    ],
  },
  {
    id: 71022,
    type: "planar",
    name: "Rutilant Arena",
    pc2: "2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 70% or higher, the wearer's Basic ATK and Skill DMG increase by 20%.",
    pc4: "",
    set: [
      {
        id: 309_5,
        relicId: 63095,
        name: "Planar Sphere",
      },
      {
        id: 309_6,
        relicId: 63096,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71023,
    type: "planar",
    name: "Broken Keel",
    pc2: "2-Pc: Increases the wearer's Effect RES by 10%. When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10%.",
    pc4: "",
    set: [
      {
        id: 310_5,
        relicId: 63105,
        name: "Planar Sphere",
      },
      {
        id: 310_6,
        relicId: 63106,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71024,
    type: "relic",
    name: "The Ashblazing Grand Duke",
    pc2: "2-Pc: Increases the DMG dealt by follow-up attacks by 20%.",
    pc4: "4-Pc: When the wearer uses follow-up attacks, increases the wearer's ATK by 6% for every time the follow-up attack deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a follow-up attack.",
    set: [
      { id: 115_1, relicId: 61151, name: "Head" },
      { id: 115_2, relicId: 61152, name: "Hands" },
      {
        id: 115_3,
        relicId: 61153,
        name: "Body",
      },
      {
        id: 115_4,
        relicId: 61154,
        name: "Feet",
      },
    ],
  },
  {
    id: 71025,
    type: "relic",
    name: "Prisoner in Deep Confinement",
    pc2: "2-Pc: ATK increases by 12%.",
    pc4: "4-Pc: For every DoT the target enemy is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs.",
    set: [
      { id: 116_1, relicId: 61161, name: "Head" },
      { id: 116_2, relicId: 61162, name: "Hands" },
      {
        id: 116_3,
        relicId: 61163,
        name: "Body",
      },
      {
        id: 116_4,
        relicId: 61164,
        name: "Feet",
      },
    ],
  },
  {
    id: 71026,
    type: "planar",
    name: "Firmament Frontline: Glamoth",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD is equal to or higher than 135/160, the wearer deals 12%/18% more DMG.",
    pc4: "",
    set: [
      {
        id: 311_5,
        relicId: 63115,
        name: "Planar Sphere",
      },
      {
        id: 311_6,
        relicId: 63116,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71027,
    type: "planar",
    name: "Penacony, Land of the Dreams",
    pc2: "2-Pc: Increases wearer's Energy Regeneration Rate by 5%. Increases DMG by 10% for all other allies that are of the same Type as the wearer.",
    pc4: "",
    set: [
      {
        id: 312_5,
        relicId: 63125,
        name: "Planar Sphere",
      },
      {
        id: 312_6,
        relicId: 63126,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71028,
    type: "relic",
    name: "Pioneer Diver of Dead Waters",
    pc2: "2-Pc: Increases DMG dealt to enemies with debuff by 12%.",
    pc4: "4-Pc: Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s).",
    set: [
      { id: 117_1, relicId: 61171, name: "Head" },
      { id: 117_2, relicId: 61172, name: "Hands" },
      {
        id: 117_3,
        relicId: 61173,
        name: "Body",
      },
      {
        id: 117_4,
        relicId: 61174,
        name: "Feet",
      },
    ],
  },
  {
    id: 71029,
    type: "relic",
    name: "Watchmaker, Master of Dream Machinations",
    pc2: "2-Pc: Increases Break Effect by 16%.",
    pc4: "4-Pc: When the wearer uses their Ultimate on an ally, all allies' Break Effect increases by 30% for 2 turn(s). This effect cannot be stacked.",
    set: [
      { id: 118_1, relicId: 61181, name: "Head" },
      { id: 118_2, relicId: 61182, name: "Hands" },
      {
        id: 118_3,
        relicId: 61183,
        name: "Body",
      },
      {
        id: 118_4,
        relicId: 61184,
        name: "Feet",
      },
    ],
  },
  {
    id: 71030,
    type: "planar",
    name: "Sigonia, the Unclaimed Desolation",
    pc2: "2-Pc: When enemies are defeated, the wearer's CRIT DMG increases by 4%, up to 10 times.",
    pc4: "",
    set: [
      {
        id: 313_5,
        relicId: 63135,
        name: "Planar Sphere",
      },
      {
        id: 313_6,
        relicId: 63136,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71031,
    type: "planar",
    name: "Izumo Gensei and Takama Divine Realm",
    pc2: "2-Pc: Increases the wearer's ATK by 12%. When entering battle, if at least one other ally follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12%.",
    pc4: "",
    set: [
      {
        id: 314_5,
        relicId: 63145,
        name: "Planar Sphere",
      },
      {
        id: 314_6,
        relicId: 63146,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71032,
    type: "relic",
    name: "Iron Cavalry Against the Scourge",
    pc2: "2-Pc: Increases Break Effect by 16%.",
    pc4: "4-Pc: If the wearer's Break Effect is 150%/250% or higher, ignores 10%/18% of the enemy target's DEF when dealing Break DMG to them.",
    set: [
      { id: 119_1, relicId: 61191, name: "Head" },
      { id: 119_2, relicId: 61192, name: "Hands" },
      {
        id: 119_3,
        relicId: 61193,
        name: "Body",
      },
      {
        id: 119_4,
        relicId: 61194,
        name: "Feet",
      },
    ],
  },
  {
    id: 71033,
    type: "relic",
    name: "The Wind-Soaring Valorous",
    pc2: "2-Pc: ATK increases by 12%.",
    pc4: "4-Pc: When the wearer uses an Ultimate or launches follow-up attacks, increases the wearer's DMG dealt by 20%. This effect stacks up to 2 time(s) and will be dispelled at the end of the wearer's turn.",
    set: [
      { id: 120_1, relicId: 61201, name: "Head" },
      { id: 120_2, relicId: 61202, name: "Hands" },
      {
        id: 120_3,
        relicId: 61203,
        name: "Body",
      },
      {
        id: 120_4,
        relicId: 61204,
        name: "Feet",
      },
    ],
  },
  {
    id: 71034,
    type: "planar",
    name: "Duran, Dynasty of Running Wolves",
    pc2: "2-Pc: When allies use follow-up attacks, the wearer receives 1 stack of Merit, stacking up to 6 times. Every stack of Merit increases the DMG dealt by the wearer's follow-up attacks by 4%. When there are 6 stacks, additionally increases the wearer's CRIT DMG by 24%.",
    pc4: "",
    set: [
      {
        id: 315_5,
        relicId: 63155,
        name: "Planar Sphere",
      },
      {
        id: 315_6,
        relicId: 63156,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71035,
    type: "planar",
    name: "Forge of the Kalpagni Lantern",
    pc2: "2-Pc: Increase the wearer's SPD by 6%. When the wearer hits enemy targets with Fire Weakness, the wearer's Break Effect increases by 40%, lasting for 1 turn(s).",
    pc4: "",
    set: [
      {
        id: 316_5,
        relicId: 63165,
        name: "Planar Sphere",
      },
      {
        id: 316_6,
        relicId: 63166,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71038,
    type: "relic",
    name: "Sacerdos' Relived Ordeal",
    pc2: "2-Pc: Increases SPD by 6%.",
    pc4: "4-Pc: When using Skill or Ultimate on one ally target, increases the ability target's CRIT DMG by 18%, lasting for 2 turn(s). This effect can stack up to 2 time(s).",
    set: [
      { id: 121_1, relicId: 61211, name: "Head" },
      { id: 121_2, relicId: 61212, name: "Hands" },
      { id: 120_3, relicId: 61213, name: "Body" },
      { id: 120_4, relicId: 61214, name: "Feet" },
    ],
  },
  {
    id: 71039,
    type: "relic",
    name: "Scholar Lost in Erudition",
    pc2: "2-Pc: Increases CRIT Rate by 8%.",
    pc4: "4-Pc: Increases DMG dealt by Skill and Ultimate by 20%. After using Ultimate, additionally increases the DMG dealt by the next Skill by 25%.",
    set: [
      { id: 122_1, relicId: 61221, name: "Head" },
      { id: 122_2, relicId: 61222, name: "Hands" },
      {
        id: 122_3,
        relicId: 61223,
        name: "Body",
      },
      {
        id: 122_4,
        relicId: 61224,
        name: "Feet",
      },
    ],
  },
  {
    id: 71040,
    type: "relic",
    name: "Hero of Triumphant Song",
    pc2: "2-Pc: Increases ATK by 12%.",
    pc4: "4-Pc: While the wearer's memosprite is on the field, increases the wearer's SPD by 6%. When the wearer's memosprite attacks, increases the wearer's and memosprite's CRIT DMG by 30%, lasting for 2 turn(s).",
    set: [
      { id: 123_1, relicId: 61231, name: "Head" },
      { id: 123_2, relicId: 61232, name: "Hands" },
      {
        id: 123_3,
        relicId: 61233,
        name: "Body",
      },
      {
        id: 123_4,
        relicId: 61234,
        name: "Feet",
      },
    ],
  },
  {
    id: 71041,
    type: "relic",
    name: "Poet of Mourning Collapse",
    pc2: "2-Pc: Increases Quantum DMG by 10%.",
    pc4: "4-Pc: Decreases the wearer's SPD by 8%. Before entering battle, if the wearer's SPD is lower than 110/95, increases the wearer's CRIT Rate by 20%/32%. This effect applies to the wearer's memosprite at the same time.",
    set: [
      { id: 122_1, relicId: 61221, name: "Head" },
      { id: 122_2, relicId: 61222, name: "Hands" },
      {
        id: 122_3,
        relicId: 61223,
        name: "Body",
      },
      {
        id: 122_4,
        relicId: 61224,
        name: "Feet",
      },
    ],
  },
  {
    id: 71036,
    type: "planar",
    name: "Lushaka, the Sunken Seas",
    pc2: "2-Pc: Increases the wearer's Energy Regeneration Rate by 5%. If the wearer is not the first character in the team lineup, then increases the ATK of the first character in the team lineup by 12%.",
    pc4: "",
    set: [
      {
        id: 317_5,
        relicId: 63175,
        name: "Planar Sphere",
      },
      {
        id: 317_6,
        relicId: 63176,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71037,
    type: "planar",
    name: "The Wondrous BananAmusement Park",
    pc2: "2-Pc: Increases the wearer's CRIT DMG by 16%. When a target summoned by the wearer is on the field, CRIT DMG additionally increases by 32%.",
    pc4: "",
    set: [
      {
        id: 317_5,
        relicId: 63175,
        name: "Planar Sphere",
      },
      {
        id: 317_6,
        relicId: 63176,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71042,
    type: "planar",
    name: "Bone Collection's Serene Demesne",
    pc2: "2-Pc: Increases the wearer's Max HP by 12%. When the wearer's Max HP is 5000 or higher, increases the wearer's and their memosprite's CRIT DMG by 28%.",
    pc4: "",
    set: [
      {
        id: 319_5,
        relicId: 63195,
        name: "Planar Sphere",
      },
      {
        id: 319_6,
        relicId: 63196,
        name: "Link Rope",
      },
    ],
  },
  {
    id: 71043,
    type: "planar",
    name: "Giant Tree of Rapt Brooding",
    pc2: "2-Pc: Increases the wearer's SPD by 6%. When the wearer's SPD is 135/180 or higher, the wearer and their memosprite's Outgoing Healing increases by 12%/20%.",
    pc4: "",
    set: [
      {
        id: 320_5,
        relicId: 63205,
        name: "Planar Sphere",
      },
      {
        id: 320_6,
        relicId: 63206,
        name: "Link Rope",
      },
    ],
  },
]

export default dataRelic
