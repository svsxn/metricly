import { ACQUISITION_CHANNELS } from "@/data/acquisition-channels";

const totalUsers = ACQUISITION_CHANNELS.reduce(
  (sum, channel) => sum + channel.amount,
  0,
);

export default function Legend() {
  return (
    <div className="xl:mx-auto w-full xl:max-w-xs space-y-2 text-sm">
      {ACQUISITION_CHANNELS.map((channel) => (
        <div
          key={channel.name}
          className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="size-2 shrink-0 rounded-xs"
              style={{ backgroundColor: channel.color }}
            />
            <span className="truncate">{channel.name}</span>
          </div>
          <span className="tabular-nums">
            {channel.amount.toLocaleString("en-US")}
          </span>
          <span className="w-12 text-right tabular-nums text-muted-foreground">
            {((channel.amount / totalUsers) * 100).toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  );
}
