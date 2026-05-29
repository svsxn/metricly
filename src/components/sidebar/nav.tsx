import { NAV_ITEMS } from "@/data/nav-items";
import NavItem from "./nav-item";
import { FileQuestionMarkIcon } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex flex-col gap-2">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.name} Icon={item.Icon} name={item.name} href="" />
      ))}
      <div className="relative flex items-center gap-3 px-4 py-2.5 bg-primary/15 border border-primary/20 hover:cursor-pointer rounded-sm">
        <FileQuestionMarkIcon size={20} color="var(--primary)" />
        <span className="text-sm font-semibold">Test</span>
        <div className="absolute w-px h-8 -left-px bg-primary" />
      </div>
    </nav>
  );
}
