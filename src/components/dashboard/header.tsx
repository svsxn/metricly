import {
  BellIcon,
  DownloadIcon,
  RefreshCwIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-end">
        <h1 className="text-4xl font-semibold">Overview</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back, Sebastin. Here&apos;s what&apos;s happening with your
          business.
        </p>
      </div>
      <div className="flex flex-col items-end gap-8">
        <div className="flex gap-6 items-center">
          <SearchIcon />
          <BellIcon />
          <div className="size-8 rounded-full bg-accent flex items-center justify-center">
            S
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <RefreshCwIcon />
          </Button>
          <Button>
            Export <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
