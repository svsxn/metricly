import { Card } from "@/components/card";
import CustomersTable from "./customers-table";

export default function Directory() {
  return (
    <Card className="col-span-4">
      <CustomersTable />
    </Card>
  );
}
