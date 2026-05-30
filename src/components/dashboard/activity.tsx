import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
  time: string;
};

export default function Activity({ title, description, Icon, time }: Props) {
  return (
    <div className="flex items-center justify-between hover:bg-primary/20 transition-all rounded-md p-1 hover:px-2 hover:cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="p-1.5 rounded-full bg-primary">
          <Icon size={20} />
        </div>
        <div className="leading-tight">
          <span className="text-sm">{title}</span>
          <p className="text-muted-foreground text-[13px]">{description}</p>
        </div>
      </div>
      <span className="text-muted-foreground text-xs">{time} ago</span>
    </div>
  );
}
