import { Spinner } from "@/shared/ui/components/spinner";

export function LoadingState() {
  return (
    <div className="flex min-h-72 items-center justify-center">
      <Spinner className="text-primary size-8" />
    </div>
  );
}
