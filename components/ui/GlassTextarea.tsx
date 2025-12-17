"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface GlassTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const GlassTextarea = React.forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || `textarea-${React.useId()}`;

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-900 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          className={cn(
            "glass-input w-full min-h-[120px] resize-y",
            error && "ring-2 ring-red-500 focus:ring-red-500",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />

        {error && (
          <div
            id={`${textareaId}-error`}
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

GlassTextarea.displayName = "GlassTextarea";

export { GlassTextarea };

/**
 * Usage Example:
 * 
 * <GlassTextarea
 *   label="Message"
 *   placeholder="Tell us about your business..."
 *   rows={5}
 *   required
 * />
 */












