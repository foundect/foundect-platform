import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AuthCardProps {
  children: ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">Foundect</h1>
          <p className="text-sm text-muted-foreground">Halal SME investing for everyone</p>
        </div>
        
        <Card className="p-6">
          {children}
        </Card>
      </div>
    </div>
  );
}

