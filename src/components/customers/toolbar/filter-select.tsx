import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOption } from "@/types/general";

type Props = {
  label: string;
  placeholder: string;
  defaultValue: string;
  options: SelectOption[];
};

export default function FilterSelect({
  label,
  placeholder,
  defaultValue,
  options,
}: Props) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-45 shrink-0 border-border bg-card! rounded-sm">
        <div className="flex gap-2">
          <span className="text-muted-foreground">{label}:</span>
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
