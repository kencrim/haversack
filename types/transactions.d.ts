interface Transaction {
  id: string;
  timestamp: number;
  actor: string;
  recipient: string;
  action: "add" | "remove" | "transfer";
  reason?: string;
  items?: Item[];
  currency?: Currency;
}
