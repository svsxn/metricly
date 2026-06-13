import { SearchIcon } from "lucide-react";
import { Card } from "../card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

export default function Toolbar() {
  return (
    <Card className="flex-row justify-between col-span-4">
      <div>
        <InputGroup className="rounded-sm border-border bg-card!">
          <InputGroupInput
            placeholder="Search customers..."
            className="placeholder:text-muted-foreground/50"
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground/50" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div>Export</div>
    </Card>
  );
}
