export const useInventorySlotTailwindStyles = ({ item }: { item?: Item }) => {
  const baseIconStyles = `flex bg-black box-border h-5 rounded-md relative hover:bg-gray-900`;

  const beforeIconStyles = `before:content-'' before:absolute before:-z-10 before:-m-px before:top-0 before:left-0 
    before:bottom-0 before:right-0 before:rounded-md`;

  const rarity = item?.rarity || "common";

  const iconRarityGradient = {
    common: "before:bg-gradient-to-tr before:from-gray-500 before:to-gray-300",
    uncommon:
      "before:bg-gradient-to-tr before:from-green-500 before:to-green-300",
    rare: "before:bg-gradient-to-tr before:from-blue-500 before:to-blue-300",
    "very rare":
      "before:bg-gradient-to-tr before:from-purple-500 before:to-purple-300",
    legendary:
      "before:bg-gradient-to-tr before:from-yellow-500 before:to-yellow-300",
    artifact: "before:bg-gradient-to-tr before:from-red-500 before:to-red-300",
  }[rarity];

  const rarityColor = {
    common: "text-gray-300",
    uncommon: "text-green-300",
    rare: "text-blue-300",
    "very rare": "text-purple-300",
    legendary: "text-yellow-300",
    artifact: "text-red-300",
  }[rarity];

  return {
    icon: `${baseIconStyles} ${beforeIconStyles} ${iconRarityGradient}`,
    name: `${rarityColor} whitespace-nowrap px-1 text-sm`,
  };
};
