import type { Card } from "@/types/general";

export default function Card({ Icon, title, amount }: Card) {
  return (
    <div className="flex flex-col gap-3 bg-card rounded-md px-4 py-3 border">
      <div className="flex items-center gap-3">
        <div className="bg-background/30 p-1.5 rounded-md">
          <Icon />
        </div>
        <h2>{title}</h2>
      </div>
      <span className="text-3xl font-medium">{amount}</span>
    </div>
  );
}
