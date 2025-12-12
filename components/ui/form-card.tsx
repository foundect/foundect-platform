// components/ui/form-card.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  currentStep?: number;
  totalSteps?: number;
  showProgress?: boolean;
}

const FormCard = React.forwardRef<HTMLDivElement, FormCardProps>(
  ({ className, title, subtitle, currentStep, totalSteps, showProgress = true, children, ...props }, ref) => {
    const progressPercentage = currentStep && totalSteps ? (currentStep / totalSteps) * 100 : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl p-8 md:p-10 w-full max-w-2xl mx-auto",
          className
        )}
        {...props}
      >
        {/* Progress Bar */}
        {showProgress && currentStep && totalSteps && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-slate-500">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-accent-1 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Title Section */}
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600">{subtitle}</p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">{children}</div>
      </div>
    );
  }
);
FormCard.displayName = "FormCard";

export { FormCard };


