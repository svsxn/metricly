import { SelectOption } from "@/types/general";

export const SELECT_OPTIONS = {
  plan: [
    { label: "All plans", value: "all" },
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    { label: "Business", value: "business" },
  ],
} satisfies Record<string, SelectOption[]>;
