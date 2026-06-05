import Card from "../card";
import { Button } from "../ui/button";
import CustomersTable from "./customers-table";

export default function RecentCustomers() {
  return (
    <Card
      header={{
        title: "Recent Customers",
        action: (
          <Button variant="outline" size="sm">
            View all customers
          </Button>
        ),
      }}
      className="col-span-4"
    >
      <CustomersTable />
    </Card>
  );
}
