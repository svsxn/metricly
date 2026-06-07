import { Activity } from "@/types/general";

export const ACTIVITIES: Activity[] = [
  {
    type: "user",
    description: "jessica@example.com",
    time: "2m",
  },
  {
    type: "subscription",
    description: "Pro Plan - $29/month",
    time: "15m",
  },
  {
    type: "payment",
    description: "$129 from Acme Inc.",
    time: "1h",
  },
  {
    type: "plan",
    description: "john@example.com upgraded to Business",
    time: "3h",
  },
  {
    type: "trial",
    description: "marketing@launchapp.dev trial ends in 2 days",
    time: "5h",
  },
];
