import { NAV_ITEMS, NAV_ITEMS_2 } from "@/data/nav-items";
import NavItem from "./nav-item";
import { Separator } from "../ui/separator";

export default function Nav() {
  return (
    <nav className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ name, href, Icon }) => (
          <NavItem key={href} name={name} href={href}>
            <Icon className="size-5" aria-hidden="true" />
          </NavItem>
        ))}
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        {NAV_ITEMS_2.map(({ name, href, Icon }) => (
          <NavItem key={href} name={name} href={href}>
            <Icon className="size-5" aria-hidden="true" />
          </NavItem>
        ))}
      </div>
    </nav>
  );
}
