import type { NavItem } from "@/types/general";

export default function NavItem({ Icon, name }: NavItem) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-colors hover:cursor-pointer hover:bg-primary/20">
      <Icon size={20} />
      <span className="text-sm">{name}</span>
    </div>
  );
}
