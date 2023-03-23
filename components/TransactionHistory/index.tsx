import { TransactionLogRecord } from "./TransactionLogRecord";

export const TransactionHistory = ({
  transactions
}: {
  transactions: Transaction[];
}) => {
  return (
    <div className="flex h-full p-1 w-1/2">
      <div className="flex flex-col h-full w-full border rounded-md border-amber-500">
        <div className="flex flex-row border-b p-1.5 border-amber-500">
          <div className="flex flex-col">
            <h3 className="text-md">History</h3>
          </div>
        </div>
        <div className="flex flex-col h-11/12 w-full overflow-y-auto p-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-row flex-wrap h-1/12 w-full"
            >
              <TransactionLogRecord transaction={transaction} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
