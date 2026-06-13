import { SelectOption } from "@/types/general";

export const SELECT_OPTIONS = {
  plan: [
    { label: "All plans", value: "all" },
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    { label: "Business", value: "business" },
  ],
  status: [
    { label: "All statuses", value: "all" },
    { label: "Active", value: "active" },
    { label: "Trial", value: "trial" },
    { label: "Past due", value: "past_due" },
    { label: "Past due", value: "past" },
    { label: "Canceled", value: "canceled" },
  ],
  sort: [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ],
} satisfies Record<string, SelectOption[]>;
