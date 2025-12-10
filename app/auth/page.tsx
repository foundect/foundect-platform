"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/layouts/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, Loader2 } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [showSignupForm, setShowSignupForm] = useState<"investor" | "business" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login submitted");
    
    // TODO: Implement Supabase authentication
    // Simulated login - redirect to investor dashboard after 1 second
    setTimeout(() => {
      alert("Login successful! (Simulated)\n\nRedirecting to Investor Dashboard...");
      router.push("/investor/home");
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent, type: "investor" | "business") => {
    e.preventDefault();
    setIsLoading(true);
    console.log(`${type} signup submitted`);
    
    // TODO: Implement Supabase authentication with role assignment
    // Simulated signup - redirect based on role after 1 second
    setTimeout(() => {
      const destination = type === "investor" ? "/investor/home" : "/business/home";
      alert(`Signup successful! (Simulated)\n\nAccount type: ${type}\nRedirecting to ${type} dashboard...`);
      router.push(destination);
    }, 1000);
  };

  return (
    <AuthCard>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup" onClick={() => setShowSignupForm(null)}>
            Sign Up
          </TabsTrigger>
        </TabsList>

        {/* Login Tab */}
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {/* TODO: Add forgot password functionality */}
              <a href="#" className="hover:text-primary">Forgot password?</a>
            </p>
          </form>
        </TabsContent>

        {/* Sign Up Tab */}
        <TabsContent value="signup">
          {!showSignupForm ? (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Choose your account type:
              </p>

              <Card
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => setShowSignupForm("investor")}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Individual Investor</CardTitle>
                      <CardDescription>
                        Invest in halal SME campaigns
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => setShowSignupForm("business")}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Business / SME</CardTitle>
                      <CardDescription>
                        Raise halal funding for your business
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ) : (
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSignupForm(null)}
                className="mb-4"
              >
                ← Back
              </Button>

              <h3 className="text-lg font-semibold mb-4">
                Sign up as {showSignupForm === "investor" ? "Investor" : "Business"}
              </h3>

              <form onSubmit={(e) => handleSignup(e, showSignupForm)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">
                    {showSignupForm === "investor" ? "Full Name" : "Business Name"}
                  </Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder={showSignupForm === "investor" ? "John Doe" : "Your Business Ltd."}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-phone">Phone</Label>
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By signing up, you agree to our Terms & Conditions
                </p>
              </form>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </AuthCard>
  );
}

