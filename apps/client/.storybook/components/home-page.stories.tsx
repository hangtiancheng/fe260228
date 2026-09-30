import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeFeatureGrid } from "../../src/app/pages/home-feature-grid";
import { HomeStatGrid } from "../../src/app/pages/home-stat-grid";
import { Badge } from "../../src/shared/ui/components/badge";

const meta = {
  title: "Features/Home",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const LandingSections: Story = {
  render: () => (
    <div className="flex max-w-5xl flex-col gap-8">
      <section className="text-center">
        <Badge className="bg-primary/10 text-primary mb-4" variant="secondary">
          Why fe260228
        </Badge>
        <h1 className="font-display text-4xl font-bold tracking-tight">
          A sharper way to practice
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-8">
          Redesigned sections keep the legacy value proposition while GSAP home
          motion restores stat counters and scroll-triggered feature entry.
        </p>
      </section>
      <HomeStatGrid />
      <HomeFeatureGrid />
    </div>
  ),
};
