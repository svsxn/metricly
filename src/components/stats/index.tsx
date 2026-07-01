import type { Stat } from "@/types/general";
import Item from "./item";

type Props = {
  data: Stat[];
  itemClassName?: string;
};

export default function Stats({ data, itemClassName }: Props) {
  return (
    <>
      {data.map((card, index) => (
        <Item
          key={index}
          index={index}
          Icon={card.Icon}
          label={card.label}
          amount={card.amount}
          className={itemClassName}
        />
      ))}
    </>
  );
}
