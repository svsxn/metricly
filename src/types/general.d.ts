import { LucideIcon } from "lucide-react";

type Stat = {
  Icon: LucideIcon;
  label: string;
  amount: string;
};

type NavItem = {
  Icon: LucideIcon;
  name: string;
  href: string;
};

type Activity = {
  type: "user" | "subscription" | "payment" | "plan" | "trial";
  description: string;
  time: string;
};

type Customer = {
  name: string;
  email: string;
  plan: "Business" | "Pro" | "Basic";
  status: "Active" | "Trial" | "Canceled";
  mrr: number;
  joined: string;
};

type SelectOption = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type Channel = {
  name: string;
  amount: number;
  color: string;
};
