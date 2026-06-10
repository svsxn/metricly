import { Stat } from "@/types/general";
import {
  CircleDollarSignIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

export const STATS: Stat[] = [
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
];
