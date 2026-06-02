import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-card border rounded-sm px-6 py-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
