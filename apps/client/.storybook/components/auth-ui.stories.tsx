import type { Meta, StoryObj } from "@storybook/react-vite";
import { StorybookServices } from "./storybook-services";
import { LoginForm } from "../../src/features/auth-ui/login-form";
import { Card, CardContent } from "../../src/shared/ui/components/card";

const meta = {
  title: "Features/Auth",
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Login: Story = {
  render: () => (
    <Card className="max-w-md shadow-lg">
      <CardContent>
        <StorybookServices>
          <LoginForm close={() => undefined} setMode={() => undefined} />
        </StorybookServices>
      </CardContent>
    </Card>
  ),
};
