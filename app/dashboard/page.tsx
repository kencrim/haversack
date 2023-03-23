"use client";
import {
  PlayerInventory,
  GroupInventory,
  TransactionHistory
} from "~/components";

const items: Item[] = [
  { id: "abc", name: "Sword", rarity: "common", quantity: 2 },
  { id: "daef", name: "+1 Shield", rarity: "uncommon" },
  { id: "deaf", name: "Ring of Protection", rarity: "rare" },
  { id: "dedf", name: "Ring of the Ram", rarity: "very rare" },
  { id: "deff", name: "Tome of the Stilled Tongue", rarity: "legendary" },
  { id: "degf", name: "The Sword of the Gods", rarity: "artifact" }
];

const transactions: Transaction[] = [
  {
    id: "abc123",
    timestamp: new Date(1679585771492).valueOf(),
    actor: "Faran Vyshaan",
    recipient: "Ryggs Feegbizz",
    action: "transfer",
    items: [{ id: "abc", name: "Sword", rarity: "common", quantity: 2 }],
    currency: { platinum: 20, gold: 54, silver: 3, copper: 222 }
  },
  {
    id: "abc1f23",
    timestamp: new Date(1679585771492).valueOf(),
    actor: "Faran Vyshaan",
    action: "transfer",
    recipient: "Ryggs Feegbizz",
    currency: { platinum: 20, gold: 54, silver: 3, copper: 222 }
  },
  {
    id: "abcfaf1f23",
    timestamp: new Date(1679585771492).valueOf(),
    actor: "Max (DM)",
    action: "remove",
    recipient: "Arthan Reelswood",
    currency: { platinum: 20, gold: 54, silver: 3, copper: 222 }
  },
  {
    id: "abcfafsfaf1f23",
    timestamp: new Date(1679585771492).valueOf(),
    actor: "Ryggs Feegbizz",
    action: "remove",
    recipient: "Ryggs Feegbizz",
    currency: { platinum: 20, gold: 54, silver: 3, copper: 222 }
  }
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row h-2/5">
        <GroupInventory
          currency={{ platinum: 104, gold: 2230, silver: 37, copper: 2 }}
          items={items}
        />
        <TransactionHistory transactions={transactions} />
      </div>
      <div className="flex flex-row h-2/5 flex-wrap">
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
        <PlayerInventory
          playerId="jkl012"
          characterName="Kiel"
          playerName="Ian"
          isActivePlayer={false}
          currency={{ platinum: 5, gold: 526, silver: 337, copper: 24 }}
          items={items}
        />
      </div>
    </div>
  );
}
