import { ActivityIcon } from "lucide-react";
import Nav from "./nav";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-6 w-64 border-r px-5 py-4 bg-card">
      <div className="border p-2 rounded-sm border-primary/40 max-w-fit">
        <div className="relative">
          <ActivityIcon size={24} />
          <ActivityIcon
            size={24}
            color="var(--primary)"
            className="absolute left-px bottom-px"
          />
        </div>
      </div>
      <Nav />
    </aside>
  );
}
