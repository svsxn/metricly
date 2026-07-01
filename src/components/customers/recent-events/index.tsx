import { Card, CardContent, CardFooter, CardTitle } from "@/components/card";
import { ArrowRightIcon } from "lucide-react";
import Event from "./event";

export default function RecentEvents() {
  return (
    <Card className="col-span-4">
      <CardTitle>Recent Customer Events</CardTitle>
      <CardContent className="flex flex-col gap-1">
        <Event />
        <Event />
        <Event />
        <Event />
      </CardContent>
      <CardFooter className="group gap-2 hover:cursor-pointer w-fit">
        <span className="text-primary text-xs">View all events</span>
        <ArrowRightIcon
          color="var(--primary)"
          size={16}
          className="opacity-0 w-0 scale-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:w-4 group-hover:scale-100 group-hover:translate-x-0"
        />
      </CardFooter>
    </Card>
  );
}
