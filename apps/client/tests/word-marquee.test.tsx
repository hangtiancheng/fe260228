import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { StorybookServices } from "../.storybook/components/storybook-services";
import { WordMarquee } from "../src/features/word-marquee/word-marquee";

describe("WordMarquee", () => {
  test("renders fallback English words while the mock feed loads", async () => {
    render(
      <StorybookServices>
        <WordMarquee />
      </StorybookServices>,
    );

    expect(
      screen.getByRole("region", { name: /english word marquee/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("fluent").length).toBeGreaterThan(0);
    expect(screen.getByText(/msw powered mock feed/i)).toBeInTheDocument();
  });
});
