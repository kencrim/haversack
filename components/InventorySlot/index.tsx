import { useInventorySlotTailwindStyles } from "./inventorySlot.styles";

interface InventorySlotProps {
  item?: Item;
  view?: "grid" | "list";
}

export const InventorySlot = ({ item, view = "grid" }: InventorySlotProps) => {
  const styles = useInventorySlotTailwindStyles({ item });

  return (
    <div className="flex space-x-1.5 row-auto align-middle items-center">
      <div className={styles.icon}>
        <p className={styles.name}>{`${item?.name}${
          item?.quantity && item.quantity > 1 ? ` (${item?.quantity})` : ""
        }`}</p>
      </div>
    </div>
  );
};
