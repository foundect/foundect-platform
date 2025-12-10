import { PublicHeader } from "@/components/layouts/PublicHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Foundect</h1>
          <p className="text-xl text-gray-600">
            Building Bangladesh's first Shari'ah-aligned platform for ethical SME investing
          </p>
        </div>

        {/* Our Mission */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Foundect exists to democratize access to halal investment opportunities while empowering 
                SMEs across Bangladesh. We believe that ethical, Shari'ah-compliant finance should be 
                accessible to everyone – from micro-investors seeking halal returns to small businesses 
                needing growth capital without resorting to interest-based loans.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Shari'ah-compliant */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Shari'ah-Compliant?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>No Riba (Interest)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our funding mechanisms are structured to avoid interest-based transactions, 
                  adhering strictly to Islamic finance principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ethical Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We only list businesses that operate in halal sectors and follow ethical 
                  business practices aligned with Islamic values.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Profit Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Returns are based on profit-sharing arrangements (Mudarabah/Musharakah), 
                  where investors share in the actual business outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every investment supports local businesses, creates jobs, and contributes 
                  to the economic development of Bangladesh.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How Foundect Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How Foundect Works</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. For Investors</h3>
                  <p className="text-gray-600">
                    Sign up, browse vetted campaigns, and invest in businesses you believe in. 
                    Track your portfolio and receive profit shares as businesses grow.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. For Businesses</h3>
                  <p className="text-gray-600">
                    Apply to list your funding campaign, undergo our Shari'ah compliance review, 
                    and connect with ethical investors who want to support your growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Transparent Process</h3>
                  <p className="text-gray-600">
                    All campaigns include detailed business information, projected returns, 
                    and regular updates. We ensure full transparency throughout the investment lifecycle.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This is an MVP (Minimum Viable Product). 
                    Payment processing is simulated, and we're currently focused on Bangladesh. 
                    Full functionality including Supabase integration and real transactions will be added in future releases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  We operate with complete transparency and honesty in all our dealings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Making halal investing accessible to everyone, regardless of investment size.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  Building a community of ethical investors and entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

