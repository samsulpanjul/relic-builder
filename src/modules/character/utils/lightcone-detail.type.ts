interface StatValue {
  base: number;
  step: number;
}

interface PromotionStats {
  hp: StatValue;
  atk: StatValue;
  def: StatValue;
}

interface RankData {
  id: number;
  skill: string;
  desc: string;
  params: Array<number[]>;
  properties: any[][];
}

export interface LightconeDetails {
  id: number;
  rarity: number;
  path: string;
  preview: string;
  portrait: string;
  rank: RankData;
  promotion: {
    id: number;
    values: PromotionStats[];
  };
  icon: string;
  desc: number;
  name: string;
}

export type LightconeDataList = {
  [key: string]: LightconeDetails;
};
