"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface GlassTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundImage?: string;
  badge?: string;
  href?: string;
}

const GlassTile = React.forwardRef<HTMLDivElement, GlassTileProps>(
  ({ title, description, icon, backgroundImage, badge, href, className, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn(
          "glass-tile group cursor-pointer transition-all duration-300 hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        {/* Background Image with Overlay */}
        {backgroundImage ? (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-card">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-30"
              onError={(e) => {
                // Hide image on error, fallback to gradient
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-200/10" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/20 via-accent-1/15 to-blue-200/10 rounded-card" />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with Icon and Badge */}
          <div className="flex items-start justify-between mb-4">
            {icon && (
              <div className="p-3 rounded-glass bg-white/10 backdrop-blur-sm">
                {icon}
              </div>
            )}
            {badge && (
              <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-700 rounded-pill backdrop-blur-sm">
                {badge}
              </span>
            )}
          </div>

          {/* Title and Description */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-900 mb-2 group-hover:text-blue-500 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Hover Arrow */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
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

GlassTile.displayName = "GlassTile";

export { GlassTile };

/**
 * Usage Example:
 * 
 * <GlassTile
 *   title="100% Halal"
 *   description="All investments are Shari'ah-compliant with no interest"
 *   icon={<Shield className="h-6 w-6 text-blue-500" />}
 *   backgroundImage="/assets/tile_blue_ref_1.png"
 *   badge="NEW"
 * />
 * 
 * <GlassTile
 *   title="Support SMEs"
 *   description="Help local businesses grow"
 *   icon={<Building2 className="h-6 w-6 text-blue-500" />}
 *   href="/explore"
 * />
 */

