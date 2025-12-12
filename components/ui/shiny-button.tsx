"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const shinyButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 ease-out relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(67,56,202,0.4)] hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0",
        premium:
          "bg-gradient-to-r from-black via-indigo-800 to-black text-white shadow-[0_8px_32px_rgba(67,56,202,0.3)] hover:from-indigo-900 hover:via-indigo-700 hover:to-indigo-900 hover:shadow-[0_12px_40px_rgba(67,56,202,0.5)] hover:scale-105",
        glow:
          "bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white shadow-[0_0_20px_rgba(14,115,249,0.4)] hover:shadow-[0_0_30px_rgba(14,115,249,0.6)] hover:scale-105",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shinyButtonVariants> {
  asChild?: boolean;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(shinyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      </button>
    );
  }
);
ShinyButton.displayName = "ShinyButton";

export { ShinyButton, shinyButtonVariants };


