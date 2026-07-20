import { Search } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "@/shared/ui/components/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/components/card";
import { Field, FieldLabel } from "@/shared/ui/components/field";
import { Input } from "@/shared/ui/components/input";
import {
  wordFilterOptions,
  type WordBookFilters,
  type WordFilterKey,
} from "./word-filter";

export type WordBookControlsProps = {
  readonly filters: WordBookFilters;
  readonly search: () => void;
  readonly setWord: (word: string) => void;
  readonly toggleFilter: (key: WordFilterKey) => void;
};

export function WordBookControls({
  filters,
  search,
  setWord,
  toggleFilter,
}: WordBookControlsProps) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  return (
    <form onSubmit={submit}>
      <Card className="shadow-sm">
        <CardContent className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="word">Word</FieldLabel>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
                size={18}
              />
              <Input
                className="pl-9"
                id="word"
                name="word"
                onChange={(event) => setWord(event.target.value)}
                placeholder="Search a word"
                value={filters.word}
              />
            </div>
          </Field>
          <div className="flex flex-wrap gap-2">
            {wordFilterOptions.map((option) => (
              <Button
                className="rounded-full"
                key={option.key}
                onClick={() => toggleFilter(option.key)}
                size="sm"
                type="button"
                variant={
                  filters.selected.has(option.key) ? "default" : "outline"
                }
              >
                {option.label}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Search</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
