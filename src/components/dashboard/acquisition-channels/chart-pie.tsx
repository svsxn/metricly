"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function ChartPie() {
  return (
    <ChartContainer
      config={chartConfig}
      className="relative aspect-square w-full max-w-56 min-w-0"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius="75%"
          outerRadius="95%"
          cornerRadius="5%"
          paddingAngle={4}
        />
      </PieChart>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Users</span>
          <span className="text-2xl font-semibold">12,450</span>
          <span className="text-xs text-muted-foreground">Total</span>
        </div>
      </div>
    </ChartContainer>
  );
}
