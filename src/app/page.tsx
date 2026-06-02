import Stat from "@/components/dashboard/stat";
import ChartCard from "@/components/dashboard/chart-card";
import Header from "@/components/dashboard/header";
import RecentActivity from "@/components/dashboard/recent-activity";
import { STATS } from "@/data/stats";

export default function Home() {
  return (
    <div className="p-6">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-7">
        {STATS.map((card, index) => (
          <Stat
            key={card.title}
            index={index}
            Icon={card.Icon}
            title={card.title}
            amount={card.amount}
          />
        ))}
        <ChartCard title="Revenue Over Time" />
        <ChartCard title="Active Users Over Time" />
        <RecentActivity />
        <div className="min-h-fit col-span-2 bg-card border rounded-sm"></div>
        <div className="h-64 col-span-4 bg-card border rounded-sm"></div>
      </div>
    </div>
  );
}
