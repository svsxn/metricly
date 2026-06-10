import { ACTIVITIES } from "@/data/activities";
import Activity from "./activity";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardTitle } from "@/components/card";

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
      <div className="group flex gap-2 hover:cursor-pointer w-fit">
        <span className="text-primary text-xs">View all activity</span>
        <ArrowRightIcon
          color="var(--primary)"
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Card>
  );
}
