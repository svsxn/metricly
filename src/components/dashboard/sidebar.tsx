import { ActivityIcon, ChevronsLeftIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r px-5 py-4">
      <div className="flex justify-between items-center">
        <ActivityIcon size={32} color="var(--primary)" />
        <div className="bg-card px-0.5 py-1 border hover:cursor-pointer rounded-md">
          <ChevronsLeftIcon size={20} />
        </div>
      </div>
    </aside>
  );
}
