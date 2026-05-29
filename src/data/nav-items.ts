import { NavItem } from "@/types/general";
import {
  ChartNoAxesColumnIcon,
  CreditCardIcon,
  HomeIcon,
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
