"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "glass-card transition-all",
  {
    variants: {
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
      clickable: {
        true: "cursor-pointer glass-elevated hover:shadow-glass-lg",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      clickable: false,
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  as?: React.ElementType;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, size, clickable, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(glassCardVariants({ size, clickable, className }))}
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GlassCard.displayName = "GlassCard";

const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-4", className)}
    {...props}
  />
));
GlassCardHeader.displayName = "GlassCardHeader";

const GlassCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-text-900", className)}
    {...props}
  />
));
GlassCardTitle.displayName = "GlassCardTitle";

const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
GlassCardDescription.displayName = "GlassCardDescription";

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
GlassCardContent.displayName = "GlassCardContent";

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center mt-4 pt-4 border-t border-white/10", className)}
    {...props}
  />
));
GlassCardFooter.displayName = "GlassCardFooter";

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  glassCardVariants,
};

/**
 * Usage Example:
 * 
 * <GlassCard size="lg" clickable onClick={() => console.log('clicked')}>
 *   <GlassCardHeader>
 *     <GlassCardTitle>Investment Opportunity</GlassCardTitle>
 *     <GlassCardDescription>Halal SME Funding</GlassCardDescription>
 *   </GlassCardHeader>
 *   <GlassCardContent>
 *     <p>Details about the investment...</p>
 *   </GlassCardContent>
 *   <GlassCardFooter>
 *     <GlassButton>Learn More</GlassButton>
 *   </GlassCardFooter>
 * </GlassCard>
 */

