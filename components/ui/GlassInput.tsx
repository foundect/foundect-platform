"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface GlassInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  floatingLabel?: boolean;
}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, label, error, floatingLabel = false, id, ...props }, ref) => {
    const inputId = id || `input-${React.useId()}`;
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <div className="relative w-full">
        {label && !floatingLabel && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-900 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <input
            type={type}
            id={inputId}
            className={cn(
              "glass-input w-full",
              error && "ring-2 ring-red-500 focus:ring-red-500",
              floatingLabel && "floating-input pt-6 pb-2",
              className
            )}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : undefined}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={floatingLabel ? " " : props.placeholder}
            {...props}
          />
          
          {floatingLabel && label && (
            <label
              htmlFor={inputId}
              className={cn(
                "floating-label",
                (isFocused || props.value) && "text-xs top-2 text-blue-500"
              )}
            >
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
        </div>

        {error && (
          <div
            id={`${inputId}-error`}
            className="flex items-center gap-1 mt-1 text-sm text-red-500"
            role="alert"
          >
            <AlertCircle className="h-3 w-3" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";

export { GlassInput };

/**
 * Usage Example:
 * 
 * <GlassInput
 *   label="Email Address"
 *   type="email"
 *   placeholder="your@email.com"
 *   required
 * />
 * 
 * <GlassInput
 *   label="Full Name"
 *   floatingLabel
 *   error="Name is required"
 * />
 */












