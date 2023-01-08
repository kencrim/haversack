import CharacterFrame from "~/public/portrait.png";
import { CurrencyView } from "../CurrencyView";
import { InventorySlot } from "../InventorySlot";

interface PlayerInventoryProps {
  playerId: string;
  playerName: string;
  currency: Currency;
  playerImage?: string;
  characterName?: string;
  items: Item[];
}

export const PlayerInventory = ({
  items,
  playerName,
  currency,
  playerId,
  characterName,
}: PlayerInventoryProps) => {
  return (
    <div className="flex flex-col h-full m-5 w-1/4 border-amber-500 border rounded-md">
      <div className="flex flex-row border-b border-amber-500 p-1.5">
        <div className="flex flex-col">
          <h3 className="text-md">{characterName}</h3>
          <label className="text-xs text-gray-400">{playerName}</label>
        </div>
        <div className="flex flex-col pt-1 ml-auto">
          <CurrencyView currency={currency} />
        </div>
      </div>
      <div className="flex flex-wrap p-1.5">
        {items.map((item) => (
          <div className="p-1">
            <InventorySlot key={item.id} view="list" item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
