// hooks/useUploadToSupabase.ts
import { useState } from 'react';
import { uploadFile, getSignedUrl } from '@/lib/supabaseClient';

export interface UseUploadOptions {
  bucket: string;
  folder?: string;
  onProgress?: (progress: number) => void;
}

export function useUploadToSupabase(options: UseUploadOptions) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File, userId?: string): Promise<string> => {
    setIsUploading(true);
    setProgress(0);
    setError(null);

    try {
      // Generate unique file path
      const timestamp = Date.now();
      const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const folder = options.folder || userId || 'uploads';
      const filePath = `${folder}/${fileName}`;

      // Simulate progress (replace with actual progress if Supabase supports it)
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Upload file
      await uploadFile(options.bucket, filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

      clearInterval(progressInterval);
      setProgress(100);

      // Get signed URL for private buckets
      const signedUrl = await getSignedUrl(options.bucket, filePath, 31536000); // 1 year
      
      options.onProgress?.(100);
      setIsUploading(false);
      
      return signedUrl;
    } catch (err: any) {
      setError(err.message || 'Upload failed');
      setIsUploading(false);
      setProgress(0);
      throw err;
    }
  };

  return {
    upload,
    isUploading,
    progress,
    error,
  };
}










