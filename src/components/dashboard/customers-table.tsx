import { CUSTOMERS } from "@/data/customers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const tableHeads = [
  "Customer",
  "Email",
  "Plan",
  "Status",
  "MRR",
  "Joined",
  "Actions",
] as const;

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
            <TableCell>{customer.plan}</TableCell>
            <TableCell>{customer.status}</TableCell>
            <TableCell>${customer.mmr}.00</TableCell>
            <TableCell>{customer.joined}</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
