import { type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

import { cn } from "@/shared/ui/lib/utils";
import { buttonVariants } from "./button-variants";

type ButtonProps = useRender.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: ButtonProps) {
  return useRender({
    defaultTagName: "button",
    render,
    props: {
      ...mergeProps<"button">(
        { className: cn(buttonVariants({ variant, size }), className) },
        props,
      ),
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
    },
  });
}

export { Button };
