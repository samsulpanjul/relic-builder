export type CharacterType = {
  id: string;
  name: string;
  icon: string;
  miniIcon: string;
  rarity: number;
  element: {
    name: string;
    id: string;
    icon: string;
    bigIcon: string;
  };
  path: {
    name: string;
    id: string;
    icon: string;
    smallIcon: string;
  };
};
