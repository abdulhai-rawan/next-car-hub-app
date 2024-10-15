import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp className={cn("custom-btn", className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export default Button;
