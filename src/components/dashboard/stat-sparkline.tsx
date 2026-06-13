"use client";

import { useId } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

type SparklinePoint = {
  value: number;
};

type StatSparklineProps = {
  data: SparklinePoint[];
  color?: string;
};

export default function StatSparkline({
  data,
  color = "var(--primary)",
}: StatSparklineProps) {
  const gradientId = useId();

  return (
    <div className="h-12 w-32 shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
      </ResponsiveContainer>
    </div>
  );
}
