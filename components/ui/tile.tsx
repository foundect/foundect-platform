"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  href?: string;
  badge?: string;
}

const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ className, icon: Icon, title, description, href, badge, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 p-6 transition-all duration-300 hover:bg-white/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02]",
          href && "cursor-pointer",
          className
        )}
        {...props}
      >
        {badge && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/20 text-blue-600 text-xs font-semibold backdrop-blur-sm border border-blue-500/30">
            {badge}
          </span>
        )}
        
        {Icon && (
          <div className="mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-accent-1/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-accent-1/0 group-hover:from-blue-500/10 group-hover:to-accent-1/10 transition-all duration-300 -z-10" />
      </div>
    );

    if (href) {
      return (
        <a href={href} className="block">
          {content}
        </a>
      );
    }

    return content;
  }
);
Tile.displayName = "Tile";

export { Tile };


