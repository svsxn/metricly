import type { Card } from "@/types/general";
import { ArrowUpIcon } from "lucide-react";

export default function Card({ Icon, title, amount }: Card) {
  return (
    <div className="flex flex-col gap-3 bg-card rounded-md px-4 py-3 border">
      <div className="flex items-center gap-3">
        <div className="bg-primary/20 p-1.5 rounded-md">
          <Icon color="var(--primary)" />
        </div>
        <h2>{title}</h2>
      </div>
      <span className="text-3xl font-medium">{amount}</span>
      <div className="flex text-xs gap-2">
        <div className="flex gap-1 text-emerald-500">
          <ArrowUpIcon size={16} />
          <span>+18.4%</span>
        </div>
        <span className="text-muted-foreground">vs Apr 1 - Apr 30</span>
      </div>
    </div>
  );
}
