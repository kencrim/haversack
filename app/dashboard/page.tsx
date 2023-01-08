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
    <div className="flex flex-row h-fit">
      <PlayerInventory
        playerId="abc123"
        characterName="Faran Vyshaan"
        playerName="Ken"
        isActivePlayer={true}
        currency={{ platinum: 104, gold: 2230, silver: 37, copper: 2 }}
        items={items}
      />
      <PlayerInventory
        playerId="def456"
        characterName="Ryggs Feegbizz"
        playerName="Brent"
        isActivePlayer={false}
        currency={{ platinum: 244, gold: 130, silver: 357, copper: 0 }}
        items={items}
      />
      <PlayerInventory
        playerId="ghi789"
        characterName="Arthan Reelswood"
        playerName="Reed"
        isActivePlayer={false}
        currency={{ platinum: 0, gold: 0, silver: 37, copper: 24 }}
        items={items}
      />
      <PlayerInventory
        playerId="jkl012"
        characterName="Soszi"
        playerName="Wren"
        isActivePlayer={false}
        currency={{ platinum: 47, gold: 56, silver: 37, copper: 24 }}
        items={items}
      />
    </div>
  );
}
