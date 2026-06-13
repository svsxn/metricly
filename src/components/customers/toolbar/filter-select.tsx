import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectOption } from "@/types/general";

type Props = {
  label: string;
  placeholder: string;
  defaultValue: string;
  options: SelectOption[];
  className?: string;
};

export default function FilterSelect({
  label,
  placeholder,
  defaultValue,
  options,
  className,
}: Props) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger
        className={cn(
          "w-45 shrink-0 border-border bg-card! rounded-sm",
          className,
        )}
      >
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
