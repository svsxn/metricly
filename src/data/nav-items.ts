import { NavItem } from "@/types/general";
import {
  ChartNoAxesColumnIcon,
  CreditCardIcon,
  FileTextIcon,
  HomeIcon,
  PlugIcon,
  SettingsIcon,
  Users2Icon,
} from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    Icon: HomeIcon,
    name: "Overview",
    href: "/dashboard",
  },
  {
    Icon: ChartNoAxesColumnIcon,
    name: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    Icon: Users2Icon,
    name: "Customers",
    href: "/dashboard/customers",
  },
  {
    Icon: CreditCardIcon,
    name: "Subscriptions",
    href: "/dashboard/subscriptions",
  },
];

export const NAV_ITEMS_2: NavItem[] = [
  {
    Icon: SettingsIcon,
    name: "Settings",
    href: "/dashboard/settings",
  },
  {
    Icon: PlugIcon,
    name: "Integrations",
    href: "/dashboard/integrations",
  },
  {
    Icon: FileTextIcon,
    name: "Billing",
    href: "/dashboard/billing",
  },
];
