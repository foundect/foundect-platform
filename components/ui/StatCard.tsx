"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { TrendingUp, TrendingDown } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  icon?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, change, icon, className, animated = true }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(animated ? 0 : value);

    React.useEffect(() => {
      if (!animated || typeof value !== "number") {
        setDisplayValue(value);
        return;
      }

      const duration = 1000; // 1 second
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value, animated]);

    return (
      <GlassCard ref={ref} className={cn("relative overflow-hidden", className)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-text-900">
              {displayValue}
            </p>
            {change && (
              <div className={cn(
                "flex items-center gap-1 mt-2 text-sm font-medium",
                change.trend === "up" ? "text-green-600" : "text-red-600"
              )}>
                {change.trend === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{Math.abs(change.value)}%</span>
              </div>
            )}
          </div>
          {icon && (
            <div className="p-3 rounded-glass bg-blue-50 text-blue-500">
              {icon}
            </div>
          )}
        </div>
      </GlassCard>
    );
  }
);

StatCard.displayName = "StatCard";

export { StatCard };

/**
 * Usage Example:
 * 
 * <StatCard
 *   title="Total Invested"
 *   value="৳2,50,000"
 *   change={{ value: 12.5, trend: "up" }}
 *   icon={<DollarSign className="h-6 w-6" />}
 * />
 * 
 * <StatCard
 *   title="Active Campaigns"
 *   value={5}
 *   animated
 * />
 */




