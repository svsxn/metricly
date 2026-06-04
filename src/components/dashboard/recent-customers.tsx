import { CUSTOMERS } from "@/data/customers";
import Card from "../card";

export default function RecentCustomers() {
  return (
    <Card header={{ title: "Recent Customers" }} className="col-span-4">
      {CUSTOMERS.map((customer) => (
        <div key={customer.email} className="flex w-full text-sm leading-none">
          <span className="min-w-42">{customer.name}</span>
          <span className="text-muted-foreground min-w-64">
            {customer.email}
          </span>
          <span className="min-w-36">{customer.plan}</span>
          <span className="min-w-32">{customer.status}</span>
          <span className="text-muted-foreground min-w-36">
            ${customer.mmr}.00
          </span>
          <span className="text-muted-foreground">{customer.joined}</span>
        </div>
      ))}
    </Card>
  );
}
