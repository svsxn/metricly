import { Customer } from "@/types/general";

export const CUSTOMERS: Customer[] = [
  {
    name: "Acme Inc.",
    email: "billing@acme.com",
    plan: "Business",
    status: "Active",
    mmr: 499,
    joined: "May 29, 2026",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    plan: "Pro",
    status: "Active",
    mmr: 29,
    joined: "May 28, 2026",
  },
  {
    name: "Software House",
    email: "hello@softwarehouse.io",
    plan: "Pro",
    status: "Trial",
    mmr: 29,
    joined: "May 26, 2026",
  },
];
