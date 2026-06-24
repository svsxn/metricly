"use client";

import { CUSTOMERS } from "@/data/customers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Customer } from "@/types/general";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const badgeBaseClassName = "p-1 rounded-[3px] font-semibold";

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
    render: (customer) => (
      <div className="flex items-center gap-2 leading-tight">
        <div className="flex items-center justify-center text-xs size-7 bg-primary rounded-full">
          XY
        </div>
        <div>
          <p>{customer.name}</p>
          <p className="text-muted-foreground">{customer.email}</p>
        </div>
      </div>
    ),
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
    header: "Usage",
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 rounded-full bg-muted"></div>
        <p className="text-[13px] text-muted-foreground">0%</p>
      </div>
    ),
  },
  {
    header: "Joined",
    headClassName: "hidden md:table-cell",
    cellClassName: "hidden md:table-cell text-muted-foreground",
    render: (customer) => customer.joined,
  },
  {
    header: "Last active",
    render: () => (
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-emerald-500"></div>
        <p className="text-[13px] text-muted-foreground">2h ago</p>
      </div>
    ),
  },
  {
    header: "Actions",
    headClassName: "hidden sm:table-cell text-right",
    cellClassName: "hidden sm:table-cell text-right",
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-5">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function CustomersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
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
                className={cn("py-1", column.cellClassName)}
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
