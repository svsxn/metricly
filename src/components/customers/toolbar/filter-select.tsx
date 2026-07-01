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
          "w-45 shrink-0 border-border bg-card! rounded-sm [&_span>svg]:hidden",
          className,
        )}
      >
        <div className="flex gap-2">
          <span className="text-muted-foreground">{label}:</span>
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="w-(--radix-select-trigger-width) rounded-sm shadow-xl"
      >
        <div className="p-1.5">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-sm px-3 py-2"
              >
                <Icon className="size-4 text-muted-foreground" />
                <span>{option.label}</span>
              </SelectItem>
            );
          })}
        </div>
      </SelectContent>
    </Select>
  );
}
