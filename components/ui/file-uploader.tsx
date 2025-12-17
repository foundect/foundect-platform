// components/ui/file-uploader.tsx
"use client";

import * as React from "react";
import { Upload, X, Camera, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploaderProps {
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
  value?: string; // URL of uploaded file
  onChange?: (url: string) => void;
  onUpload?: (file: File) => Promise<string>; // Returns URL
  error?: string;
  required?: boolean;
  allowCamera?: boolean;
  className?: string;
}

export function FileUploader({
  label,
  accept = "image/*,application/pdf",
  maxSize = 5,
  value,
  onChange,
  onUpload,
  error,
  required = false,
  allowCamera = false,
  className,
}: FileUploaderProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const cameraInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Validate file type
    const acceptedTypes = accept.split(",").map((t) => t.trim());
    const isValidType = acceptedTypes.some((type) => {
      if (type.endsWith("/*")) {
        const baseType = type.split("/")[0];
        return file.type.startsWith(baseType + "/");
      }
      return file.type === type;
    });

    if (!isValidType) {
      setUploadError(`File type not supported. Accepted: ${accept}`);
      return;
    }

    setUploadError(null);
    setIsUploading(true);
    setUploadProgress(0);

    try {
      if (!onUpload) {
        throw new Error("Upload handler not provided");
      }

      // Simulate progress (replace with actual progress tracking if available)
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const url = await onUpload(file);
      clearInterval(progressInterval);
      setUploadProgress(100);
      onChange?.(url);
    } catch (err: any) {
      setUploadError(err.message || "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleCameraCapture = () => {
    cameraInputRef.current?.click();
  };

  const handleRemove = () => {
    onChange?.("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const displayError = error || uploadError;

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-slate-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {value ? (
        <div className="relative rounded-xl bg-white/20 border border-white/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">File uploaded</p>
                <p className="text-xs text-slate-500 truncate">{value}</p>
              </div>
            </div>
            <button
              onClick={handleRemove}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Remove file"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "relative rounded-xl border-2 border-dashed transition-all",
            isDragging
              ? "border-blue-500 bg-blue-500/10"
              : "border-white/30 bg-white/10",
            displayError && "border-red-500",
            "p-6 text-center cursor-pointer hover:bg-white/20"
          )}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileInputChange}
            className="hidden"
            aria-label={label || "Upload file"}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {isUploading ? (
            <div className="space-y-2">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-slate-600">Uploading... {uploadProgress}%</p>
            </div>
          ) : (
            <div className="space-y-3">
              <Upload className="h-10 w-10 text-slate-400 mx-auto" />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Drag & drop or click to upload
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Max size: {maxSize}MB • {accept}
                </p>
              </div>
              {allowCamera && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCameraCapture();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-sm font-medium"
                >
                  <Camera className="h-4 w-4" />
                  Capture Photo
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {displayError && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{displayError}</span>
        </div>
      )}
    </div>
  );
}










