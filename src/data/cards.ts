import { Card } from "@/types/general";
import {
  ActivityIcon,
  CircleDollarSignIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

export const CARDS: Card[] = [
  {
    Icon: CircleDollarSignIcon,
    title: "Monthly Revenue",
    amount: "$24,820",
  },
  {
    Icon: UsersIcon,
    title: "Active Users",
    amount: "8,492",
  },
  {
    Icon: TrendingUpIcon,
    title: "Conversion Rate",
    amount: "6.84%",
  },
  {
    Icon: ActivityIcon,
    title: "Churn Rate",
    amount: "2.3%",
  },
];
