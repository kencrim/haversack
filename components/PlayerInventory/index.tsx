interface PlayerInventoryProps {
  playerId: string;
  playerName: string;
  playerImage?: string;
  items: Item[];
}

export const PlayerInventory = ({ items }: PlayerInventoryProps) => {};
