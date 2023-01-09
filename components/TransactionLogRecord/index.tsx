import { useMemo } from "react";
import platIcon from "~/public/platinum.svg";
import goldIcon from "~/public/gold.svg";
import silverIcon from "~/public/silver.svg";
import copperIcon from "~/public/copper.svg";

export const TransactionLogRecord = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  const { timestamp, actor, recipient, currency, items, action } = transaction;

  const TimestampLabel = useMemo(
    () => (
      <p className="text-xs font-bold text-gray-500">
        {new Date(timestamp).toLocaleString()}
      </p>
    ),
    [timestamp]
  );

  const ActorLabel = useMemo(
    () => <p className="text-xs font-bold text-amber-500">{actor}</p>,
    [actor]
  );
  const RecipientLabel = useMemo(
    () => (
      <p className="text-xs font-bold text-cyan-500">
        {actor === recipient ? "themselves" : recipient}
      </p>
    ),
    [recipient]
  );

  const ItemsLabel = useMemo(
    () =>
      items?.length ? (
        <div>
          {items?.map((item) => (
            <p className="text-xs font-bold text-gray-500">
              {`${item.quantity && `${item.quantity} `}${item.name}${
                item?.quantity && item.quantity > 1 ? "s" : ""
              }`}
            </p>
          ))}
        </div>
      ) : null,
    [items]
  );

  const CurrencyLabel = useMemo(
    () => (
      <div className="flex flex-row">
        {[
          { name: "platinum", value: currency?.platinum ?? 0, icon: platIcon },
          { name: "gold", value: currency?.gold ?? 0, icon: goldIcon },
          { name: "silver", value: currency?.silver ?? 0, icon: silverIcon },
          { name: "copper", value: currency?.copper ?? 0, icon: copperIcon },
        ].reduce((acc, { name, value, icon }) => {
          if (value > 0)
            acc.push(
              <div key={name} className="flex flex-row items-center">
                <img src={icon.src} className={"h-3 w-3"} />
                <label className={"text-xs"}>{value}</label>
              </div>
            );
          return acc;
        }, [] as JSX.Element[])}
      </div>
    ),
    [currency]
  );

  const ValueLabel = ItemsLabel ?? CurrencyLabel;

  const ActionLabel = useMemo(
    () => (
      <p className="text-xs">
        {{ remove: "removed", transfer: "gave", add: "added" }[action]}
      </p>
    ),
    [action]
  );

  const Preposition = useMemo(
    () => (
      <p className="text-xs">
        {{ remove: "from", transfer: "to", add: "to" }[action]}
      </p>
    ),
    [action, actor, recipient]
  );

  return (
    <div className="flex flex-row gap-x-1">
      {TimestampLabel} {ActorLabel} {ActionLabel} {ValueLabel} {Preposition}{" "}
      {RecipientLabel}
    </div>
  );
};
