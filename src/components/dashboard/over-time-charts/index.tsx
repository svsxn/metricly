import { Card, CardAction, CardHeader, CardTitle } from "@/components/card";
import PeriodSelect from "./period-select";
import ChartArea from "./chart-area";

type Props = {
  title: string;
  color: string;
  seriesLabel: string;
};

export default function OverTime({ title, color, seriesLabel }: Props) {
  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <PeriodSelect />
        </CardAction>
      </CardHeader>
      <ChartArea color={color} seriesLabel={seriesLabel} />
    </Card>
  );
}
