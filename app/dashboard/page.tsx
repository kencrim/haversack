import { InventorySlot } from "~/components";

const items: Item[] = [
  { id: "abc", name: "Sword", rarity: "common" },
  { id: "def", name: "+1 Shield", rarity: "uncommon" },
  { id: "def", name: "Ring of Protection", rarity: "rare" },
  { id: "def", name: "Ring of the Ram", rarity: "very rare" },
  { id: "def", name: "Tome of the Stilled Tongue", rarity: "legendary" },
  { id: "def", name: "The Sword of the Gods", rarity: "artifact" },
];

export default function DashboardPage() {
  return (
    <section>
      {items.map((item) => (
        <div className="m-5">
          <InventorySlot item={item} />
        </div>
      ))}

      {items.map((item) => (
        <div className="m-5">
          <InventorySlot view="list" item={item} />
        </div>
      ))}
    </section>
  );
}
