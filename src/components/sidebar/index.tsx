import { ActivityIcon, ChevronsLeftIcon } from "lucide-react";
import Nav from "./nav";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 w-64 border-r px-5 py-4">
      <div className="flex justify-between items-center">
        <div className="border p-2 rounded-sm border-primary/40">
          <div className="relative">
            <ActivityIcon size={24} />
            <ActivityIcon
              size={24}
              color="var(--primary)"
              className="absolute left-px bottom-px"
            />
          </div>
        </div>
        <div className="bg-card px-0.5 py-1 border hover:cursor-pointer rounded-md">
          <ChevronsLeftIcon size={20} />
        </div>
      </div>
      <Nav />
    </aside>
  );
}
