import { Customer } from "@/types/general";

export const CUSTOMERS: Customer[] = [
  {
    name: "Acme Inc.",
    email: "billing@acme.com",
    plan: "Business",
    status: "Active",
    mrr: 499,
    joined: "May 29, 2026",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    plan: "Pro",
    status: "Active",
    mrr: 29,
    joined: "May 28, 2026",
  },
  {
    name: "Software House",
    email: "hello@softwarehouse.io",
    plan: "Pro",
    status: "Trial",
    mrr: 29,
    joined: "May 26, 2026",
  },
  {
    name: "Marketing Group",
    email: "team@marketinggroup.com",
    plan: "Business",
    status: "Active",
    mrr: 499,
    joined: "May 24, 2026",
  },
  {
    name: "Tech Corp",
    email: "contact@techcorp.com",
    plan: "Basic",
    status: "Canceled",
    mrr: 0,
    joined: "May 20, 2026",
  },
  {
    name: "Launch App",
    email: "hi@launchapp.dev",
    plan: "Pro",
    status: "Active",
    mrr: 29,
    joined: "May 18, 2026",
  },
];
