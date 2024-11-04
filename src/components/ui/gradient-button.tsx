import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { ButtonProps, buttonVariants } from "./button";

export const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <div className="relative w-full h-14">
        <Comp
          ref={ref}
          {...props}
          className={cn(
            buttonVariants({ size, className }),
            "hover:shadow-[0_0_12px_#b45ab680] text-text-sec transition-shadow duration-500 bg-primary/5 hover:bg-primary/5 py-4 px-6 border border-primary/10 gradient-btn"
          )}
        >
          {children}
        </Comp>
      </div>
    );
  }
);
