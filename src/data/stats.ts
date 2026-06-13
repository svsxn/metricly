import { Stat } from "@/types/general";
import {
  CircleDollarSignIcon,
  Clock4Icon,
  ShieldCheckIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  TriangleAlertIcon,
  UsersIcon,
} from "lucide-react";

export const STATS = {
  dashboard: [
    {
      Icon: CircleDollarSignIcon,
      label: "Monthly Revenue",
      amount: "$24,820",
    },
    {
      Icon: UsersIcon,
      label: "Active Users",
      amount: "8,492",
    },
    {
      Icon: TrendingUpIcon,
      label: "Conversion Rate",
      amount: "6.84%",
    },
    {
      Icon: TrendingDownIcon,
      label: "Churn Rate",
      amount: "2.3%",
    },
  ],
  customers: [
    {
      Icon: UsersIcon,
      label: "Total Customers",
      amount: "2,486",
    },
    {
      Icon: ShieldCheckIcon,
      label: "Active Subscriptions",
      amount: "1,924",
    },
    {
      Icon: Clock4Icon,
      label: "Trial Customers",
      amount: "312",
    },
    {
      Icon: TriangleAlertIcon,
      label: "At Risk",
      amount: "86",
    },
  ],
} satisfies Record<string, Stat[]>;
