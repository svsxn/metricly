import { Card, CardContent, CardFooter, CardTitle } from "@/components/card";
import { ArrowRightIcon } from "lucide-react";
import ChartPie from "./chart-pie";
import Legend from "./legend";

export default function AcquisitionChannels() {
  return (
    <Card className="col-span-4 sm:col-span-2">
      <CardTitle>Top Acquisition Channels</CardTitle>
      <CardContent className="flex flex-col gap-5 xl:flex-row xl:items-center">
        <ChartPie />
        <Legend />
      </CardContent>
      <CardFooter className="group gap-2 hover:cursor-pointer">
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
