type rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "very rare"
  | "legendary"
  | "artifact";

interface Item {
  id: string;
  name: string;
  rarity: rarity;
  img?: string;
  quantity?: number;
  [key: string]: number | string;
}

interface Currency {
  copper: number;
  silver: number;
  gold: number;
  platinum: number;
}
