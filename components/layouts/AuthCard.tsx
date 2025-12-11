import { ReactNode } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

interface AuthCardProps {
  children: ReactNode;
  showBackground?: boolean;
}

export function AuthCard({ children, showBackground = true }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-accent-1/20" />
      
      {/* Decorative Background Image (right side) */}
      {showBackground && (
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/assets/auth_right_bg.png"
              alt=""
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-md lg:max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent mb-2">
                Foundect
              </h1>
              <p className="text-gray-600">Halal SME investing for everyone</p>
            </div>
            
            <GlassCard size="lg">
              {children}
            </GlassCard>
          </div>

          {/* Right: Decorative content (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              <div className="glass-bg rounded-card p-6 animate-float">
                <h3 className="text-xl font-semibold text-text-900 mb-2">
                  100% Shari'ah Compliant
                </h3>
                <p className="text-gray-600">
                  All investments follow Islamic finance principles with no interest or riba.
                </p>
              </div>
              <div className="glass-bg rounded-card p-6 animate-float [animation-delay:0.5s]">
                <h3 className="text-xl font-semibold text-text-900 mb-2">
                  Support Local SMEs
                </h3>
                <p className="text-gray-600">
                  Help Bangladesh businesses grow while earning halal returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

