"use client";
import { useInventorySlotTailwindStyles } from "./inventorySlot.styles";
interface InventorySlotProps {
  item: Item;
  view?: "grid" | "list";
}

export const InventorySlot = ({ item, view = "grid" }: InventorySlotProps) => {
  const styles = useInventorySlotTailwindStyles({ item });

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{`${item?.name}${
        item?.quantity && item.quantity > 1 ? ` (${item?.quantity})` : ""
      }`}</p>
    </div>
  );
};
