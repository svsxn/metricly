"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ACQUISITION_CHANNELS } from "@/data/acquisition-channels";
import { Pie, PieChart } from "recharts";

const chartData = ACQUISITION_CHANNELS.map((channel) => ({
  name: channel.name,
  value: channel.amount,
  fill: channel.color,
}));

const totalUsers = ACQUISITION_CHANNELS.reduce(
  (sum, channel) => sum + channel.amount,
  0,
);

const chartConfig = Object.fromEntries(
  ACQUISITION_CHANNELS.map((channel) => [
    channel.name,
    {
      label: channel.name,
      color: channel.color,
    },
  ]),
) satisfies ChartConfig;

export default function ChartPie() {
  return (
    <ChartContainer
      config={chartConfig}
      className="relative aspect-square w-full max-w-56 min-w-0"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          wrapperStyle={{ zIndex: 50 }}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius="75%"
          outerRadius="95%"
          cornerRadius={5}
          paddingAngle={4}
        />
      </PieChart>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Users</span>
          <span className="text-2xl font-semibold tabular-nums">
            {totalUsers.toLocaleString("en-US")}
          </span>
          <span className="text-xs  text-muted-foreground">Total</span>
        </div>
      </div>
    </ChartContainer>
  );
}
