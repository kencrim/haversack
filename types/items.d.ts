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
  img?: string;
  rarity: rarity;
  [key: string]: number | string;
}