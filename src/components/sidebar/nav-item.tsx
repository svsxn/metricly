"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  name: string;
  href: string;
  children: ReactNode;
};

export default function NavItem({ name, href, children }: Props) {
  const pathname = usePathname();

  const isActive =
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative flex items-center gap-3 rounded-sm px-4 py-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground",
        isActive &&
          "border border-primary/20 bg-primary/15 font-semibold text-foreground",
      )}
    >
      <span
        className={cn(
          "text-muted-foreground transition-colors",
          isActive && "text-primary",
        )}
      >
        {children}
      </span>
      <span className="text-sm">{name}</span>
      {isActive ? (
        <span className="absolute -left-px h-8 w-px bg-primary" />
      ) : null}
    </Link>
  );
}
