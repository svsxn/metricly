import Card from "@/components/dashboard/card";
import ChartCard from "@/components/dashboard/chart-card";
import Header from "@/components/dashboard/header";
import { CARDS } from "@/data/cards";

export default function Home() {
  return (
    <div className="p-6">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-7">
        {CARDS.map((card, index) => (
          <Card
            key={card.title}
            index={index}
            Icon={card.Icon}
            title={card.title}
            amount={card.amount}
          />
        ))}
        <ChartCard title="Revenue Over Time" />
        <ChartCard title="Active Users Over Time" />
        <div className="h-64 col-span-2 bg-card border rounded-sm"></div>
        <div className="h-64 col-span-2 bg-card border rounded-sm"></div>
        <div className="h-64 col-span-4 bg-card border rounded-sm"></div>
      </div>
    </div>
  );
}
