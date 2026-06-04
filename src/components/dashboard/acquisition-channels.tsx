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
      <ChartPie />
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
