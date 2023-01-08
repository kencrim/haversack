import platIcon from "~/public/platinum.svg";
import goldIcon from "~/public/gold.svg";
import silverIcon from "~/public/silver.svg";
import copperIcon from "~/public/copper.svg";

interface CurrencyViewProps {
  currency: Currency;
}

export const CurrencyView = ({ currency }: CurrencyViewProps) => {
  const { platinum = 0, gold = 0, silver = 0, copper = 0 } = currency;

  const currencies = [
    { name: "platinum", value: platinum, icon: platIcon },
    { name: "gold", value: gold, icon: goldIcon },
    { name: "silver", value: silver, icon: silverIcon },
    { name: "copper", value: copper, icon: copperIcon },
  ];

  return (
    <div className="flex flex-row space-x-1">
      {currencies.map(({ value, icon, name }) => (
        <div key={name} className="flex flex-row">
          <img src={icon.src} className={"h-4 w-4"} />
          <label className={"text-sm"}>{value}</label>
        </div>
      ))}
    </div>
  );
};
