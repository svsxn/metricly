import Stat from "@/components/dashboard/stat";
import Header from "@/components/dashboard/header";
import RecentActivity from "@/components/dashboard/recent-activity";
import { STATS } from "@/data/stats";
import OverTime from "@/components/dashboard/over-time";
import AcquisitionChannels from "@/components/dashboard/acquisition-channels";
import RecentCustomers from "@/components/dashboard/recent-customers";

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
        <OverTime
          title="Revenue Over Time"
          color="var(--chart-1)"
          seriesLabel="Revenue"
        />
        <OverTime
          title="Active Users Over Time"
          color="var(--chart-2)"
          seriesLabel="Users"
        />
        <RecentActivity />
        <AcquisitionChannels />
        <RecentCustomers />
      </div>
    </div>
  );
}
