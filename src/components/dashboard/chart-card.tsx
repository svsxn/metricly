import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Chart from "./chart";
import Card from "../card";

type Props = {
  title: string;
  // color: string;
};

export default function ChartCard({ title }: Props) {
  return (
    <Card
      header={{
        title: title,
        action: (
          <Select defaultValue="monthly">
            <SelectTrigger className="w-full max-w-24 rounded-sm border-border/70 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ),
      }}
      className="col-span-4 lg:col-span-2"
    >
      <Chart />
    </Card>
  );
}
