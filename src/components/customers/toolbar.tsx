import { SearchIcon } from "lucide-react";
import { Card } from "../card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Toolbar() {
  return (
    <Card className="flex-row justify-between col-span-4">
      <div className="flex gap-3">
        <InputGroup className="rounded-sm border-border bg-card!">
          <InputGroupInput
            placeholder="Search customers..."
            className="placeholder:text-muted-foreground/50"
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground/50" />
          </InputGroupAddon>
        </InputGroup>
        <Select defaultValue="all">
          <SelectTrigger className="w-45 shrink-0 border-border bg-card! rounded-sm">
            <div className="flex gap-2">
              <span className="text-muted-foreground">Plan:</span>
              <SelectValue placeholder="All plans" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All plans</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>Export</div>
    </Card>
  );
}
