import { Activity as Props } from "@/types/general";
import {
  BadgeCheckIcon,
  Clock4Icon,
  CreditCardIcon,
  DollarSignIcon,
  LucideIcon,
  UserIcon,
} from "lucide-react";

type ActivityConfig = {
  Icon: LucideIcon;
  title: string;
  classes: string;
};

const activityMap: Record<Props["type"], ActivityConfig> = {
  user: {
    Icon: UserIcon,
    title: "New user singed up",
    classes: "bg-accent-violet",
  },
  subscription: {
    Icon: CreditCardIcon,
    title: "New subscription",
    classes: "bg-accent-blue",
  },
  payment: {
    Icon: DollarSignIcon,
    title: "Payment received",
    classes: "bg-accent-teal",
  },
  plan: {
    Icon: BadgeCheckIcon,
    title: "Plan upgraded",
    classes: "bg-accent-amber",
  },
  trial: {
    Icon: Clock4Icon,
    title: "Trial ending soon",
    classes: "bg-accent-rose",
  },
};

export default function Activity({ type, description, time }: Props) {
  const Icon = activityMap[type].Icon;

  return (
    <div className="flex items-center justify-between hover:bg-primary/20 transition-all rounded-md p-1 hover:px-2 hover:cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className={`p-1.5 rounded-full ${activityMap[type].classes}`}>
          <Icon size={20} />
        </div>
        <div className="leading-tight">
          <span className="text-sm">{activityMap[type].title}</span>
          <p className="text-muted-foreground text-[13px]">{description}</p>
        </div>
      </div>
      <span className="text-muted-foreground text-xs">{time} ago</span>
    </div>
  );
}
