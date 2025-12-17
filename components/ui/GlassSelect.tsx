"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, AlertCircle } from "lucide-react";

export interface GlassSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const GlassSelect = React.forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || `select-${React.useId()}`;

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-text-900 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              "glass-input w-full appearance-none pr-10 cursor-pointer",
              error && "ring-2 ring-red-500 focus:ring-red-500",
              className
            )}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {error && (
          <div
            id={`${selectId}-error`}
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

GlassSelect.displayName = "GlassSelect";

export { GlassSelect };

/**
 * Usage Example:
 * 
 * <GlassSelect
 *   label="Country"
 *   options={[
 *     { value: 'bd', label: 'Bangladesh' },
 *     { value: 'pk', label: 'Pakistan' },
 *   ]}
 *   required
 * />
 */












