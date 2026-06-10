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
      <SelectTrigger className="w-full max-w-24 rounded-sm border-border/70 text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
