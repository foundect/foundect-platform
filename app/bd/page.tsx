import Link from "next/link";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, TrendingUp, Shield, Users } from "lucide-react";

export default function BangladeshLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <PublicHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Halal SME Investing for Everyone in Bangladesh
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with Shari'ah-compliant investment opportunities. Support local businesses, earn halal returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="w-full sm:w-auto">
                Start Investing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is Foundect Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Foundect?</h2>
          <p className="text-lg text-gray-600">
            Foundect is Bangladesh's first Shari'ah-aligned digital platform connecting SMEs with micro-investors. 
            We facilitate halal funding without interest (riba), enabling ethical wealth growth for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>100% Halal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All investments are Shari'ah-compliant with no interest, no riba, and no conventional lending.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Support SMEs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Help local businesses grow while earning expected profit shares from their success.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Transparent Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Clear projected returns with full transparency on how your funds are being used.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Investors Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Investors</h2>
              <p className="text-lg text-gray-600 mb-6">
                Start investing with as little as ৳1,000. Diversify your portfolio across multiple halal campaigns 
                and earn expected profit shares aligned with Islamic finance principles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Low minimum investment amounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Vetted Shari'ah-compliant opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Track your portfolio in real-time</span>
                </li>
              </ul>
              <Link href="/auth">
                <Button size="lg">
                  Start as Investor <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-8 h-80 flex items-center justify-center">
              <Users className="h-32 w-32 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8 h-80 flex items-center justify-center order-2 md:order-1">
              <Building2 className="h-32 w-32 text-blue-600 opacity-50" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Businesses / SMEs</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access halal funding for your business growth without conventional loans. 
                Raise capital through profit-sharing arrangements that align with Islamic principles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>No interest-based loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexible profit-sharing terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Connect with ethical investors</span>
                </li>
              </ul>
              <Link href="/auth">
                <Button size="lg">
                  List Your Business <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-2">Foundect</p>
          <p className="text-gray-400 text-sm">
            Halal SME investing for Bangladesh
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/explore" className="hover:text-primary transition-colors">
              Explore
            </Link>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            © 2024 Foundect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

