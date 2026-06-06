import Nav from "./nav";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-svh shrink-0 hidden lg:flex flex-col gap-6 w-64 border-r px-5 py-4 bg-card">
      <div className="flex items-center gap-2 hover:cursor-pointer w-fit">
        <Image src="/logo.svg" alt="Metricly" width={32} height={32} priority />
        <span className="text-2xl font-medium">Metricly</span>
      </div>
      <Nav />
    </aside>
  );
}
