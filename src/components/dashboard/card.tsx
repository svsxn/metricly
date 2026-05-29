import type { Card } from "@/types/general";
import { ArrowUpIcon } from "lucide-react";

type Props = Card & {
  index: number;
};

const colorMap: Record<number, { bg: string; icon: string }> = {
  1: { bg: "bg-chart-1/20", icon: "var(--chart-1)" },
  2: { bg: "bg-chart-2/20", icon: "var(--chart-2)" },
  3: { bg: "bg-chart-3/20", icon: "var(--chart-3)" },
  4: { bg: "bg-chart-5/20", icon: "var(--chart-5)" },
};

export default function Card({ index, Icon, title, amount }: Props) {
  const styles = colorMap[index + 1];
  return (
    <div className="flex flex-col gap-3 bg-card rounded-md px-4 py-3 border">
      <div className="flex items-center gap-3">
        <div className={`${styles.bg} p-1.5 rounded-md`}>
          <Icon color={styles.icon} />
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
