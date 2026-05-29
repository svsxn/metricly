import Card from "@/components/dashboard/card";
import Header from "@/components/dashboard/header";
import { CARDS } from "@/data/cards";

export default function Home() {
  return (
    <div className="p-6">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-8">
        {CARDS.map((card) => (
          <Card
            key={card.title}
            Icon={card.Icon}
            title={card.title}
            amount={card.amount}
          />
        ))}
      </div>
    </div>
  );
}
