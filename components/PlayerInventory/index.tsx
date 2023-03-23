import { CurrencyView } from "../CurrencyView";
import { InventorySlot } from "../InventorySlot";

interface PlayerInventoryProps {
  playerId: string;
  isActivePlayer: boolean;
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
  isActivePlayer
}: PlayerInventoryProps) => {
  const borderColor = isActivePlayer ? "border-amber-500" : "border-gray-500";

  return (
    <div className="flex p-1 w-1/4 h-full">
      <div className={`flex flex-col border rounded-md ${borderColor}`}>
        <div className={`flex flex-row border-b p-1.5 ${borderColor}`}>
          <div className="flex flex-col">
            <h3 className="text-md">{characterName}</h3>
            <label className="text-xs text-gray-400">{playerName}</label>
          </div>
          <div className="flex flex-col pt-1 ml-auto">
            <CurrencyView currency={currency} />
          </div>
        </div>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <div key={item.id} className="p-1">
              <InventorySlot item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
