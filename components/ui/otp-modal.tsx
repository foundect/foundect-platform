// components/ui/otp-modal.tsx
"use client";

import * as React from "react";
import { X, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiquidGlassButton } from "./liquid-glass-button";

export interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => Promise<void>;
  phoneNumber?: string;
  email?: string;
  onResend?: () => Promise<void>;
  resendCooldown?: number; // seconds
}

export function OTPModal({
  isOpen,
  onClose,
  onVerify,
  phoneNumber,
  email,
  onResend,
  resendCooldown = 60,
}: OTPModalProps) {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [cooldown, setCooldown] = React.useState(0);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  React.useEffect(() => {
    if (isOpen) {
      // Focus first input
      inputRefs.current[0]?.focus();
      // Reset OTP
      setOtp(["", "", "", "", "", ""]);
      setError(null);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only last character
    setOtp(newOtp);
    setError(null);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all filled
    if (newOtp.every((digit) => digit !== "") && newOtp.join("").length === 6) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
      handleVerify(pastedData);
    }
  };

  const handleVerify = async (code: string) => {
    if (code.length !== 6) return;

    setIsVerifying(true);
    setError(null);

    try {
      await onVerify(code);
    } catch (err: any) {
      setError(err.message || "Invalid OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0 || !onResend) return;

    setCooldown(resendCooldown);
    try {
      await onResend();
    } catch (err: any) {
      setError(err.message || "Failed to resend OTP. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="otp-modal-title"
    >
      <div
        className="rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="otp-modal-title" className="text-2xl font-bold text-slate-900">
            Verify OTP
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-slate-600 mb-6">
          Enter the 6-digit code sent to{" "}
          {phoneNumber ? (
            <span className="font-semibold">{phoneNumber}</span>
          ) : email ? (
            <span className="font-semibold">{email}</span>
          ) : (
            "your device"
          )}
        </p>

        <div className="flex gap-2 mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={cn(
                "w-12 h-14 text-center text-2xl font-bold rounded-xl",
                "bg-white/40 border-2 border-white/30",
                "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                "transition-all",
                error && "border-red-500"
              )}
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <LiquidGlassButton
            onClick={() => handleVerify(otp.join(""))}
            disabled={isVerifying || otp.some((d) => !d)}
            className="flex-1"
            variant="primary"
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </LiquidGlassButton>

          {onResend && (
            <button
              onClick={handleResend}
              disabled={cooldown > 0}
              className={cn(
                "px-4 py-3 rounded-xl font-medium transition-all",
                "bg-white/20 border border-white/30",
                "hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed",
                "flex items-center gap-2"
              )}
            >
              <RefreshCw className={cn("h-4 w-4", cooldown > 0 && "animate-spin")} />
              {cooldown > 0 ? `${cooldown}s` : "Resend"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


