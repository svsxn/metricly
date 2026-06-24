import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import type { ElementType, ReactNode } from "react";

function Card<TElement extends ElementType = "div">({
  as,
  children,
  className,
}: {
  as?: TElement;
  children: ReactNode;
  className?: string;
}) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "flex flex-col gap-3 bg-card border rounded-sm p-4 sm:px-6 sm:py-5",
        className,
      )}
    >
      {children}
    </Component>
  );
}

function CardHeader({
  icon,
  children,
}: {
  icon?: {
    Icon: LucideIcon;
    color: string;
    background: string;
  };
  children: ReactNode;
}) {
  const Icon = icon?.Icon;

  return (
    <div className="flex justify-between">
      {Icon ? (
        <div className="flex items-start gap-5">
          <div className={cn("p-2 rounded-md", icon.background)}>
            <Icon color={icon.color} size={28} />
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}

function CardAction({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("shrink-0", className)}>{children}</div>;
}

function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("flex items-center", className)}>{children}</div>;
}

export { Card, CardHeader, CardTitle, CardAction, CardFooter };
