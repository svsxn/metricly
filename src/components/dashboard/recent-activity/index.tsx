import { ACTIVITIES } from "@/data/activities";
import Activity from "./activity";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardFooter, CardTitle } from "@/components/card";

export default function RecentActivity() {
  return (
    <Card className="col-span-4 sm:col-span-2">
      <CardTitle>Recent Activity</CardTitle>
      <div className="flex flex-col">
        {ACTIVITIES.map((activity, index) => (
          <Activity
            key={index}
            type={activity.type}
            description={activity.description}
            time={activity.time}
          />
        ))}
      </div>
      <CardFooter className="group gap-2 hover:cursor-pointer">
        <span className="text-primary text-xs">View all activity</span>
        <ArrowRightIcon
          color="var(--primary)"
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </CardFooter>
    </Card>
  );
}
