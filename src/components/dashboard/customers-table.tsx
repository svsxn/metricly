import { CUSTOMERS } from "@/data/customers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const tableHeads = [
  "Customer",
  "Email",
  "Plan",
  "Status",
  "MRR",
  "Joined",
  "Actions",
] as const;

const planClassName = {
  Business: "border-primary/30 bg-primary/10 text-primary",
  Pro: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Basic: "border-muted-foreground/30 bg-muted/40 text-muted-foreground",
} as const;

const statusClassName = {
  Active: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Trial: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Canceled: "border-red-500/30 bg-red-500/10 text-red-400",
} as const;

export default function CustomersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeads.map((head) => (
            <TableHead key={head} className="text-muted-foreground">
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {CUSTOMERS.map((customer) => (
          <TableRow key={customer.email}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>
              <Badge variant="outline" className={planClassName[customer.plan]}>
                {customer.plan}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={statusClassName[customer.status]}
              >
                {customer.status}
              </Badge>
            </TableCell>
            <TableCell>${customer.mmr}.00</TableCell>
            <TableCell>{customer.joined}</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
