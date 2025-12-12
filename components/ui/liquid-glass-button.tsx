"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidGlassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 ease-out relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-white/30 backdrop-blur-2xl border border-white/40 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0",
        primary:
          "bg-gradient-to-r from-blue-500/20 to-accent-1/20 backdrop-blur-2xl border border-blue-500/30 text-blue-600 font-bold shadow-[0_8px_32px_rgba(14,115,249,0.2)] hover:from-blue-500/30 hover:to-accent-1/30 hover:shadow-[0_12px_40px_rgba(14,115,249,0.3)] hover:scale-105 hover:-translate-y-1",
        secondary:
          "bg-white/20 backdrop-blur-2xl border border-white/30 text-slate-800 shadow-inner hover:bg-white/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
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

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidGlassButtonVariants> {
  asChild?: boolean;
}

const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(liquidGlassButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
LiquidGlassButton.displayName = "LiquidGlassButton";

export { LiquidGlassButton, liquidGlassButtonVariants };


