import { ArrowRightIcon } from "lucide-react";
import Card from "../card";
import ChartPie from "./charts/chart-pie";

export default function AcquisitionChannels() {
  return (
    <Card
      header={{
        title: "Top Acquisition Channels",
      }}
      className="col-span-4 sm:col-span-2"
    >
      <div className="flex">
        <ChartPie />
        <div className="mx-auto flex flex-col justify-center gap-2 text-sm">
          <div className="flex justify-between gap-24">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-chart-1 rounded-xs" />
              <span>Direct</span>
            </div>
            <div className="flex gap-12">
              <span>2,892</span>
              <span className="text-muted-foreground">32.1%</span>
            </div>
          </div>
          <div className="flex justify-between gap-24">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-chart-2 rounded-xs" />
              <span>Google Search</span>
            </div>
            <div className="flex gap-12">
              <span>2,310</span>
              <span className="text-muted-foreground">27.2%</span>
            </div>
          </div>
          <div className="flex justify-between gap-24">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-chart-3 rounded-xs" />
              <span>Referall</span>
            </div>
            <div className="flex gap-12">
              <span>1,640</span>
              <span className="text-muted-foreground">19.3%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="group flex gap-2 hover:cursor-pointer">
        <span className="text-primary text-xs">View full report</span>
        <ArrowRightIcon
          color="var(--primary)"
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Card>
  );
}
