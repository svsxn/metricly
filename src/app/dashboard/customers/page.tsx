import Toolbar from "@/components/customers/toolbar";
import RecentCustomers from "@/components/dashboard/recent-customers";
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
        <Toolbar />
        <RecentCustomers />
      </div>
    </div>
  );
}
