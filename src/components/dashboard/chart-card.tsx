"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  title: string;
  // color: string;
};

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
  { month: "April", amount: 13500 },
  { month: "May", amount: 24820 },
];

const chartConfig = {
  amount: {
    label: "Amount",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartCard({ title }: Props) {
  const formatYAxis = (value: number) => {
    if (value === 0) return "$0";
    return `$${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div className="col-span-4 lg:col-span-2 bg-card border rounded-sm p-4">
      <div className="flex justify-between">
        <h2>{title}</h2>
        {/*<span className="text-sm">Monthly</span>*/}
        <Select defaultValue="monthly">
          <SelectTrigger className="w-full max-w-24 rounded-sm border-border/70 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
              {/*<SelectItem></SelectItem>*/}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground text-[13px]">
        <div className="h-1 w-4 shrink-0 rounded-full bg-primary" />
        Revenue
      </div>
      <ChartContainer config={chartConfig} className="max-h-56 w-full">
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
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
          </linearGradient>
          <Area
            dataKey="amount"
            type="linear"
            fill="url(#fill)"
            fillOpacity={0.4}
            stroke="var(--chart-1)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
