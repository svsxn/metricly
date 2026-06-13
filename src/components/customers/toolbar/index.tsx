import { SearchIcon } from "lucide-react";
import { Card } from "../../card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import FilterSelect from "./filter-select";
import { SELECT_OPTIONS } from "@/data/select-options";

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
        <FilterSelect
          label="Plan"
          placeholder="All plans"
          defaultValue="all"
          options={SELECT_OPTIONS.plan}
        />
        <FilterSelect
          label="Status"
          placeholder="All statuses"
          defaultValue="all"
          options={SELECT_OPTIONS.status}
          className="w-54"
        />
      </div>
      <div>Export</div>
    </Card>
  );
}
