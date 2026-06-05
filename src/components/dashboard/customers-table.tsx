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

const badgeBaseClassName = "p-1 rounded-xs font-semibold";

const planClassName = {
  Business: "bg-primary/25 text-primary",
  Pro: "bg-blue-500/25 text-blue-400",
  Basic: "bg-muted/65 text-muted-foreground",
} as const;

const statusClassName = {
  Active: "bg-emerald-500/25 text-emerald-400",
  Trial: "bg-amber-500/25 text-amber-400",
  Canceled: "bg-red-500/25 text-red-400",
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
    headClassName: "hidden md:table-cell",
    cellClassName: "hidden md:table-cell text-muted-foreground",
    render: (customer) => customer.email,
  },
  {
    header: "Plan",
    render: (customer) => (
      <Badge className={cn(badgeBaseClassName, planClassName[customer.plan])}>
        {customer.plan}
      </Badge>
    ),
  },
  {
    header: "Status",
    render: (customer) => (
      <Badge
        className={cn(badgeBaseClassName, statusClassName[customer.status])}
      >
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
    headClassName: "hidden md:table-cell",
    cellClassName: "hidden md:table-cell text-muted-foreground",
    render: (customer) => customer.joined,
  },
  {
    header: "Actions",
    headClassName: "hidden sm:table-cell text-right",
    cellClassName: "hidden sm:table-cell text-right",
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
