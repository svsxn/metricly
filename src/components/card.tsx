import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import type { ElementType, ReactNode } from "react";

// type IconProps = {
//   Icon: LucideIcon;
//   color: string;
//   background: string;
// };

// type HeaderProps = {
//   title: string;
//   icon?: IconProps;
//   action?: React.ReactNode;
// };

// type Props = {
//   header: HeaderProps;
//   children: React.ReactNode;
//   className?: string;
// };

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
        <div className="flex items-center gap-3">
          <div className={cn("p-1.5 rounded-md", icon.background)}>
            <Icon color={icon.color} />
          </div>
          {/*<h2 className="text-sm md:text-base leading-tight">{children}</h2>*/}
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

function CardAction({ children }: { children: ReactNode }) {
  return <div className="shrink-0">{children}</div>;
}

// function Card({ header, children, className }: Props) {
//   return (
//     <div
//       className={cn(
//         "flex flex-col gap-3 bg-card border rounded-sm p-4 sm:px-6 sm:py-5",
//         className,
//       )}
//     >
//       <div className="flex justify-between">
//         {header.icon ? (
//           <div className="flex items-center gap-3">
//             <div className={cn("p-1.5 rounded-md", header.icon.background)}>
//               <header.icon.Icon color={header.icon.color} />
//             </div>
//             <h2 className="text-sm md:text-base leading-tight">
//               {header.title}
//             </h2>
//           </div>
//         ) : (
//           <h2>{header.title}</h2>
//         )}
//         {header.action && header.action}
//       </div>
//       {children}
//     </div>
//   );
// }

export { Card, CardHeader, CardTitle, CardAction };
