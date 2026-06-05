"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  DotProps,
  XAxis,
  YAxis,
} from "recharts";
import { useId } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function ChartDot({ cx, cy }: DotProps) {
  if (typeof cx !== "number" || typeof cy !== "number") {
    return null;
  }

  return (
    <circle cx={cx} cy={cy} r={3} fill="var(--chart-color)" stroke="none" />
  );
}

const chartData = [
  { month: "June", amount: 12400 },
  { month: "July", amount: 15100 },
  { month: "August", amount: 9800 },
  { month: "September", amount: 18600 },
  { month: "October", amount: 22400 },
  { month: "November", amount: 14200 },
  { month: "December", amount: 19500 },
  { month: "January", amount: 11200 },
  { month: "February", amount: 16800 },
  { month: "March", amount: 21300 },
  { month: "April", amount: 20963 },
  { month: "May", amount: 24820 },
];

const chartConfig = {
  amount: {
    label: "Amount",
    color: "var(--chart-color)",
  },
} satisfies ChartConfig;

type Props = {
  color: string;
  seriesLabel: string;
};

export default function ChartArea({ color, seriesLabel }: Props) {
  const gradientId = useId();

  const formatYAxis = (value: number) => {
    if (value === 0) return "$0";
    return `$${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div style={{ "--chart-color": color } as React.CSSProperties}>
      <div className="flex items-center gap-1.5 text-muted-foreground text-[13px]">
        <div className="h-1 w-4 shrink-0 rounded-full bg-(--chart-color)" />
        {seriesLabel}
      </div>
      <ChartContainer config={chartConfig} className="max-h-48 w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 2,
            right: 12,
            top: 18,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={formatYAxis}
            width={40}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--chart-color)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--chart-color)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <Area
            dataKey="amount"
            type="linear"
            fill={`url(#${gradientId})`}
            fillOpacity={0.4}
            stroke="var(--chart-color)"
            stackId="a"
            strokeWidth={1.25}
            dot={<ChartDot />}
            activeDot={{
              r: 4,
              fill: "#fff",
              stroke: "var(--chart-color)",
              strokeWidth: 2.5,
            }}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
