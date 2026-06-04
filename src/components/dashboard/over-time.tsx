import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Card from "../card";
import ChartArea from "./charts/chart-area";

type Props = {
  title: string;
  color: string;
  seriesLabel: string;
};

export default function OverTime({ title, color, seriesLabel }: Props) {
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
      <ChartArea color={color} seriesLabel={seriesLabel} />
    </Card>
  );
}
