import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card";
import CustomersTable from "./customers-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecentCustomers() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/customers">View all customers</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CustomersTable />
      </CardContent>
    </Card>
  );
}
