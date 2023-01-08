import { PlayerInventory } from "~/components";

const items: Item[] = [
  { id: "abc", name: "Sword", rarity: "common" },
  { id: "daef", name: "+1 Shield", rarity: "uncommon" },
  { id: "deaf", name: "Ring of Protection", rarity: "rare" },
  { id: "dedf", name: "Ring of the Ram", rarity: "very rare" },
  { id: "deff", name: "Tome of the Stilled Tongue", rarity: "legendary" },
  { id: "degf", name: "The Sword of the Gods", rarity: "artifact" },
];

export default function DashboardPage() {
  return (
    <section>
      <PlayerInventory
        playerId="abc123"
        characterName="Faran Vyshaan"
        playerName="Ken"
        items={items}
      />
    </section>
  );
}
