import Stats from "@/components/stats";
import Header from "@/components/header";
import RecentActivity from "@/components/dashboard/recent-activity";
import { STATS } from "@/data/stats";
import RecentCustomers from "@/components/dashboard/recent-customers";
import OverTime from "@/components/dashboard/over-time-charts";
import AcquisitionChannels from "@/components/dashboard/acquisition-channels";

export default function Page() {
  return (
    <div className="p-6">
      <Header
        title="Overview"
        description="Welcome back, Sebastian. Here's what's happening with your
      business."
      />
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Stats data={STATS.dashboard} />
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
