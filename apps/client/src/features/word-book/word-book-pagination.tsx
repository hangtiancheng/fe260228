import { Button } from "@/shared/ui/components/button";

export type WordBookPaginationProps = {
  readonly page: number;
  readonly setPage: (page: number) => void;
  readonly total: number;
  readonly totalPages: number;
};

export function WordBookPagination({
  page,
  setPage,
  total,
  totalPages,
}: WordBookPaginationProps) {
  return (
    <div className="mx-auto flex gap-0">
      <Button
        className="rounded-l-md rounded-r-none"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        type="button"
        variant="outline"
      >
        Previous
      </Button>
      <span className="bg-background dark:border-input dark:bg-input/30 inline-flex h-9 items-center rounded-none border border-x-0 px-4 text-sm">
        Page {page} / {totalPages} · {total} words
      </span>
      <Button
        className="rounded-l-none rounded-r-md"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        type="button"
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
}
