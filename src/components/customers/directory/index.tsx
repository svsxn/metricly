import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import CustomersTable from "./customers-table";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ColumnsIcon,
} from "lucide-react";

export default function Directory() {
  return (
    <Card className="col-span-12">
      <CardHeader>
        <CardTitle>Customer Directory</CardTitle>
        <CardAction className="flex items-center gap-6">
          <Button variant="outline" size="sm" className="rounded-sm">
            <ColumnsIcon />
            Columns
          </Button>
          <button className="group flex gap-2 hover:cursor-pointer w-fit">
            <span className="text-primary text-xs">View archived</span>
            <ArrowRightIcon
              color="var(--primary)"
              size={16}
              className="opacity-0 w-0 scale-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:w-4 group-hover:scale-100 group-hover:translate-x-0"
            />
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CustomersTable />
      </CardContent>
      <CardFooter className="justify-between">
        <p className="text-muted-foreground text-[13px]">
          Showing 1 to 6 of 2,486 customers
        </p>
        <div className="flex gap-2">
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm">
            <ChevronLeftIcon className="size-4 text-muted-foreground/60" />
          </div>
          <div className="flex items-center justify-center h-7 w-9 border border-primary/60 bg-primary/30 rounded-sm text-sm">
            1
          </div>
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm text-sm">
            2
          </div>
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm text-sm">
            3
          </div>
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm text-muted-foreground/60">
            ...
          </div>
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm text-sm">
            415
          </div>
          <div className="flex items-center justify-center h-7 w-9 border rounded-sm">
            <ChevronRightIcon className="size-4" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
