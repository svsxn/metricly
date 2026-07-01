import { DownloadIcon, SearchIcon } from "lucide-react";
import { Card } from "../../card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import FilterSelect from "./filter-select";
import { SELECT_OPTIONS } from "@/data/select-options";
import { Button } from "@/components/ui/button";

export default function Toolbar() {
  return (
    <Card className="flex-row justify-between col-span-12">
      <div className="flex gap-3">
        <InputGroup className="w-68 rounded-sm border-border bg-card!">
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
        <FilterSelect
          label="Sort"
          placeholder="Newest"
          defaultValue="newest"
          options={SELECT_OPTIONS.sort}
          className="w-43"
        />
      </div>
      <Button variant="outline" className="rounded-sm bg-card! gap-3 px-3">
        <DownloadIcon />
        Export
      </Button>
    </Card>
  );
}
