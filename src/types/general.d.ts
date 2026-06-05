import { LucideIcon } from "lucide-react";

type Stat = {
  Icon: LucideIcon;
  title: string;
  amount: string;
};

type NavItem = {
  Icon: LucideIcon;
  name: string;
  href: string;
};

type Activity = {
  Icon: LucideIcon;
  title: string;
  description: string;
  time: string;
};

type Customer = {
  name: string;
  email: string;
  plan: "Business" | "Pro";
  status: "Active" | "Trial" | "Canceled";
  mrr: number;
  joined: string;
};
