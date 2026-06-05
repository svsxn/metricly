import Card from "../card";
import CustomersTable from "./customers-table";

export default function RecentCustomers() {
  return (
    <Card header={{ title: "Recent Customers" }} className="col-span-4">
      <CustomersTable />
    </Card>
  );
}
