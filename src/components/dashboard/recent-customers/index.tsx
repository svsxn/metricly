import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card";
import CustomersTable from "./customers-table";
import { Button } from "@/components/ui/button";

export default function RecentCustomers() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm">
            View all customers
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CustomersTable />
      </CardContent>
    </Card>
  );
}
