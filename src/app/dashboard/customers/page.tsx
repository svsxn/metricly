import Directory from "@/components/customers/directory";
import RecentEvents from "@/components/customers/recent-events";
import Toolbar from "@/components/customers/toolbar";
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
      <div className="grid grid-cols-12 gap-4 mt-6">
        <Stats
          data={STATS.customers}
          itemClassName="col-span-6 xl:col-span-3"
        />
        <Toolbar />
        <Directory />
        <RecentEvents />
      </div>
    </div>
  );
}
