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
import { Customer } from "@/types/general";
import { cn } from "@/lib/utils";

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

type Column = {
  header: string;
  headClassName?: string;
  cellClassName?: string;
  render: (customer: Customer) => React.ReactNode;
};

const columns: Column[] = [
  {
    header: "Customer",
    cellClassName: "font-medium",
    render: (customer) => customer.name,
  },
  {
    header: "Email",
    cellClassName: "text-muted-foreground",
    render: (customer) => customer.email,
  },
  {
    header: "Plan",
    render: (customer) => (
      <Badge variant="outline" className={planClassName[customer.plan]}>
        {customer.plan}
      </Badge>
    ),
  },
  {
    header: "Status",
    render: (customer) => (
      <Badge variant="outline" className={statusClassName[customer.status]}>
        {customer.status}
      </Badge>
    ),
  },
  {
    header: "MRR",
    render: (customer) => `$${customer.mrr}.00`,
  },
  {
    header: "Joined",
    cellClassName: "text-muted-foreground",
    render: (customer) => customer.joined,
  },
  {
    header: "Actions",
    headClassName: "text-right",
    cellClassName: "text-right",
    render: () => "...",
  },
];

export default function CustomersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              key={column.header}
              className={cn(
                "h-8 px-1 text-muted-foreground",
                column.headClassName,
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {CUSTOMERS.map((customer) => (
          <TableRow key={customer.email}>
            {columns.map((column) => (
              <TableCell
                key={column.header}
                className={cn("p-1", column.cellClassName)}
              >
                {column.render(customer)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
