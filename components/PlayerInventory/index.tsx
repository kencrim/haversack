import CharacterFrame from "~/public/portrait.png";
import { InventorySlot } from "../InventorySlot";

interface PlayerInventoryProps {
  playerId: string;
  playerName: string;
  playerImage?: string;
  characterName?: string;
  items: Item[];
}

export const PlayerInventory = ({
  items,
  playerName,
  playerId,
  characterName,
}: PlayerInventoryProps) => {
  return (
    <div className="w-1/4 border-amber-500 border rounded-md">
      <div className="flex flex-row border-b border-amber-500 -p-1.5">
        <div className="flex flex-col p-1.5">
          <h3 className="text-md">{characterName}</h3>
          <label className="text-xs text-gray-400">{playerName}</label>
        </div>
      </div>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <div className="p-1">
            <InventorySlot key={item.id} view="list" item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
