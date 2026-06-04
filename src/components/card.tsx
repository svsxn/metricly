import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type IconProps = {
  Icon: LucideIcon;
  color: string;
  background: string;
};

type HeaderProps = {
  title: string;
  icon?: IconProps;
  action?: React.ReactNode;
};

type Props = {
  header: HeaderProps;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ header, children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-card border rounded-sm p-4 sm:px-6 sm:py-5",
        className,
      )}
    >
      <div className="flex justify-between">
        {header.icon ? (
          <div className="flex items-center gap-3">
            <div className={cn("p-1.5 rounded-md", header.icon.background)}>
              <header.icon.Icon color={header.icon.color} />
            </div>
            <h2 className="text-sm md:text-base leading-tight">
              {header.title}
            </h2>
          </div>
        ) : (
          <h2>{header.title}</h2>
        )}
        {header.action && header.action}
      </div>
      {children}
    </div>
  );
}
