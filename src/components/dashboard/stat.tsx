import type { Stat } from "@/types/general";
import { ArrowUpIcon } from "lucide-react";
import { Card, CardHeader } from "../card";
import { Area, AreaChart } from "recharts";
import StatSparkline from "../stat-sparkline";

type Props = Stat & {
  index: number;
};

const colorMap: Record<number, { bg: string; icon: string }> = {
  1: { bg: "bg-chart-1/20", icon: "var(--chart-1)" },
  2: { bg: "bg-chart-2/20", icon: "var(--chart-2)" },
  3: { bg: "bg-chart-3/20", icon: "var(--chart-3)" },
  4: { bg: "bg-chart-5/20", icon: "var(--chart-5)" },
};

const revenueSparkline = [
  { value: 12 },
  { value: 14 },
  { value: 13 },
  { value: 17 },
  { value: 15 },
  { value: 21 },
  { value: 19 },
  { value: 24 },
];

export default function Stat({ index, Icon, label, amount }: Props) {
  const styles = colorMap[index + 1];

  return (
    <Card className="col-span-2 xl:col-span-1 gap-1.5">
      <CardHeader
        icon={{
          Icon: Icon,
          color: styles.icon,
          background: styles.bg,
        }}
      >
        <div>
          <p className="text-sm text-muted-foreground leading-tight">{label}</p>
          <p className="text-[28px] font-medium tabular-nums">{amount}</p>
        </div>
      </CardHeader>
      <div className="flex items-end justify-between -mt-8">
        <div className="flex text-xs gap-2 flex-wrap">
          <div className="flex gap-1 text-emerald-500">
            <ArrowUpIcon size={16} />
            <span>+18.4%</span>
          </div>
          <span className="text-muted-foreground">vs Apr 1 - Apr 30</span>
        </div>
        <StatSparkline data={revenueSparkline} color={styles.icon} />
      </div>
    </Card>
  );
}
