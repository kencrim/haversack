import { CurrencyView } from "../CurrencyView";
import { InventorySlot } from "../InventorySlot";

interface GroupInventoryProps {
  disabled?: boolean;
  currency: Currency;
  items: Item[];
}

export const GroupInventory = ({
  items,
  currency,
  disabled = false
}: GroupInventoryProps) => {
  const borderColor = disabled ? "border-gray-500" : "border-amber-500";

  return (
    <div className="flex h-full p-1 w-1/2">
      <div className={`flex flex-col h-full border rounded-md ${borderColor}`}>
        <div className={`flex flex-row border-b p-1.5 ${borderColor}`}>
          <div className="flex flex-col">
            <h3 className="text-md">Group Storage</h3>
          </div>
          <div className="flex flex-col pt-1 ml-auto">
            <CurrencyView currency={currency} />
          </div>
        </div>
        <div className="flex flex-wrap p-1.5">
          {items.map((item) => (
            <div key={item.id} className="p-1">
              <InventorySlot key={item.id} view="list" item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
