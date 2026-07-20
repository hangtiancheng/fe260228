import { homeStats } from "./home-stats";

export type HomeStatGridProps = {
  readonly values?: readonly string[];
};

export function HomeStatGrid({ values }: HomeStatGridProps) {
  return (
    <section
      aria-label="Learning platform statistics"
      className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {homeStats.map((stat, index) => {
        const Icon = stat.icon;
        const value = values?.[index] ?? stat.displayValue;

        return (
          <div
            className="bg-card flex items-center justify-between gap-4 rounded-lg border p-5 shadow-sm"
            key={stat.label}
          >
            <div className="flex flex-col gap-1">
              <span
                className="home-stat-value font-display text-3xl font-bold tabular-nums"
                data-suffix={stat.suffix}
                data-target={stat.target}
              >
                {value}
              </span>
              <span className="text-muted-foreground text-sm">
                {stat.label}
              </span>
            </div>
            <Icon
              aria-hidden="true"
              className="text-primary size-7 shrink-0"
              size={28}
            />
          </div>
        );
      })}
    </section>
  );
}
