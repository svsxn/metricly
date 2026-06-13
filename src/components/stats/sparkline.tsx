"use client";

import { useId } from "react";
import { Area, AreaChart } from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";

type SparklinePoint = {
  value: number;
};

type Props = {
  data: SparklinePoint[];
  color?: string;
};

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export default function Sparkline({ data, color = "var(--primary)" }: Props) {
  const gradientId = useId();

  return (
    <ChartContainer config={chartConfig} className="h-10 w-32">
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>

        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          dot={false}
          activeDot={false}
          isAnimationActive
          animationDuration={700}
        />
      </AreaChart>
    </ChartContainer>
  );
}
