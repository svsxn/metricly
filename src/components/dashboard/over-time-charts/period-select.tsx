import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PeriodSelect() {
  return (
    <Select defaultValue="monthly">
      <SelectTrigger className="w-24 rounded-sm border-border bg-card! text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="min-w-0 w-(--radix-select-trigger-width) rounded-sm"
      >
        <SelectGroup className="space-y-1">
          <SelectItem
            value="monthly"
            className="rounded-sm pr-2 text-xs data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span:first-child]:hidden"
          >
            Monthly
          </SelectItem>
          <SelectItem
            value="yearly"
            className="rounded-sm pr-2 text-xs data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span:first-child]:hidden"
          >
            Yearly
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
