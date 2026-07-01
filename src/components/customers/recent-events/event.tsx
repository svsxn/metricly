import { CircleChevronUpIcon } from "lucide-react";

export default function Event() {
  return (
    <div className="flex items-center justify-between gap-2 p-1 rounded-sm hover:bg-muted/50">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center size-5.5 bg-primary rounded-sm">
          <CircleChevronUpIcon size={18} />
        </div>
        <p className="text-[13px]">Acme Inc.</p>
        <p className="text-xs text-muted-foreground">
          upgraded to Business plan
        </p>
      </div>
      <p className="text-xs text-muted-foreground/50">2h ago</p>
    </div>
  );
}
