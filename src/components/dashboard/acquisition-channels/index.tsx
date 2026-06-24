import { Card, CardContent, CardFooter, CardTitle } from "@/components/card";
import { ArrowRightIcon } from "lucide-react";
import ChartPie from "./chart-pie";

const channels = [
  {
    name: "Direct",
    users: "2,892",
    percentage: "32.1%",
    colorClassName: "bg-chart-1",
  },
  {
    name: "Google Search",
    users: "2,310",
    percentage: "27.2%",
    colorClassName: "bg-chart-2",
  },
  {
    name: "Referral",
    users: "1,640",
    percentage: "19.3%",
    colorClassName: "bg-chart-3",
  },
] as const;

export default function AcquisitionChannels() {
  return (
    <Card className="col-span-4 sm:col-span-2">
      <CardTitle>Top Acquisition Channels</CardTitle>
      <CardContent className="flex flex-col gap-5 xl:flex-row xl:items-center">
        <ChartPie />
        <div className="xl:mx-auto w-full xl:max-w-xs space-y-2 text-sm">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`size-2 shrink-0 rounded-xs ${channel.colorClassName}`}
                />
                <span className="truncate">{channel.name}</span>
              </div>

              <span className="tabular-nums">{channel.users}</span>

              <span className="w-12 text-right tabular-nums text-muted-foreground">
                {channel.percentage}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="group gap-2 hover:cursor">
        <span className="text-primary text-xs">View full report</span>
        <ArrowRightIcon
          color="var(--primary)"
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </CardFooter>
    </Card>
  );
}
