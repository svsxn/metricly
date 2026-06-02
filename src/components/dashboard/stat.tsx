import type { Stat } from "@/types/general";
import { ArrowUpIcon } from "lucide-react";
import Card from "../card";

type Props = Stat & {
  index: number;
};

const colorMap: Record<number, { bg: string; icon: string }> = {
  1: { bg: "bg-chart-1/20", icon: "var(--chart-1)" },
  2: { bg: "bg-chart-2/20", icon: "var(--chart-2)" },
  3: { bg: "bg-chart-3/20", icon: "var(--chart-3)" },
  4: { bg: "bg-chart-5/20", icon: "var(--chart-5)" },
};

export default function Stat({ index, Icon, title, amount }: Props) {
  const styles = colorMap[index + 1];
  return (
    <Card
      header={{
        title: title,
        icon: {
          Icon: Icon,
          color: styles.icon,
          background: styles.bg,
        },
      }}
      className="col-span-2 xl:col-span-1"
    >
      <span className="text-3xl font-medium">{amount}</span>
      <div className="flex text-xs gap-2">
        <div className="flex gap-1 text-emerald-500">
          <ArrowUpIcon size={16} />
          <span>+18.4%</span>
        </div>
        <span className="text-muted-foreground">vs Apr 1 - Apr 30</span>
      </div>
    </Card>
  );
}
