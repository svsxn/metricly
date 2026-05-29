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
    href: "",
  },
  {
    Icon: ChartNoAxesColumnIcon,
    name: "Analytics",
    href: "",
  },
  {
    Icon: Users2Icon,
    name: "Customers",
    href: "",
  },
  {
    Icon: CreditCardIcon,
    name: "Subscriptions",
    href: "",
  },
];

export const NAV_ITEMS_2: NavItem[] = [
  {
    Icon: SettingsIcon,
    name: "Settings",
    href: "",
  },
  {
    Icon: PlugIcon,
    name: "Integrations",
    href: "",
  },
  {
    Icon: FileTextIcon,
    name: "Billing",
    href: "",
  },
];
