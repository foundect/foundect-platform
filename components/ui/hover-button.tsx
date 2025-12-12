"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const hoverButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default:
          "bg-white/40 backdrop-blur-xl border border-white/30 text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0",
        outline:
          "bg-transparent border-2 border-white/40 text-slate-900 backdrop-blur-sm hover:bg-white/20 hover:border-white/60",
        ghost:
          "bg-transparent text-slate-900 hover:bg-white/20 backdrop-blur-sm",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface HoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof hoverButtonVariants> {
  asChild?: boolean;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(hoverButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HoverButton.displayName = "HoverButton";

export { HoverButton, hoverButtonVariants };


