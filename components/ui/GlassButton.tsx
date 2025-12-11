"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "glass-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-white/20 text-text-900 hover:text-blue-500 hover:bg-white/30 shadow-glow",
        secondary: "bg-white/10 text-text-900 hover:bg-white/20",
        ghost: "bg-transparent border-none shadow-none hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, icon, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-label="Loading" />
        ) : icon ? (
          <span className="w-4 h-4" aria-hidden="true">{icon}</span>
        ) : null}
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };

/**
 * Usage Example:
 * 
 * <GlassButton variant="primary" icon={<ArrowRight />}>
 *   Get Started
 * </GlassButton>
 * 
 * <GlassButton variant="secondary" loading>
 *   Processing...
 * </GlassButton>
 * 
 * <GlassButton variant="ghost" size="sm">
 *   Cancel
 * </GlassButton>
 */

