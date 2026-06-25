import { SelectOption } from "@/types/general";
import {
  BriefcaseIcon,
  CheckCircle2Icon,
  Clock3Icon,
  CrownIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UserIcon,
  XCircleIcon,
} from "lucide-react";

export const SELECT_OPTIONS = {
  plan: [
    { label: "All plans", value: "all", icon: BriefcaseIcon },
    { label: "Free", value: "free", icon: UserIcon },
    { label: "Pro", value: "pro", icon: CheckCircle2Icon },
    { label: "Business", value: "business", icon: CrownIcon },
  ],
  status: [
    { label: "All statuses", value: "all", icon: BriefcaseIcon },
    { label: "Active", value: "active", icon: CheckCircle2Icon },
    { label: "Trial", value: "trial", icon: Clock3Icon },
    { label: "Past due", value: "past_due", icon: Clock3Icon },
    { label: "Canceled", value: "canceled", icon: XCircleIcon },
  ],
  sort: [
    { label: "Newest", value: "newest", icon: TrendingUpIcon },
    { label: "Oldest", value: "oldest", icon: TrendingDownIcon },
  ],
} satisfies Record<string, SelectOption[]>;
