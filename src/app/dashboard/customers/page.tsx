import Header from "@/components/header";
import Stats from "@/components/stats";
import { STATS } from "@/data/stats";

export default function Page() {
  return (
    <div className="p-6">
      <Header
        title="Customers"
        description="Manage customer accounts, subscriptions, and lifecycle status."
      />
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Stats data={STATS.customers} />
        {/*{STATS.map((card, index) => (
          <Stat
            key={index}
            index={index}
            Icon={card.Icon}
            label={card.label}
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
        <RecentCustomers />*/}
      </div>
    </div>
  );
}
