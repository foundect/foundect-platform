"use client";

import { useState } from "react";
import {
  Search,
  User,
  TrendingUp,
  DollarSign,
  Shield,
  BookOpen,
  AlertCircle,
  Mail,
  MessageCircle,
  Bot,
  ChevronDown,
  ChevronUp,
  Lock,
  Key,
  Smartphone,
  HelpCircle,
  FileText,
  CreditCard,
  Clock,
  Building2,
  CheckCircle2,
  Info,
} from "lucide-react";

// Quick help categories
const quickHelpCards = [
  {
    id: "account",
    icon: User,
    title: "Account & Login",
    description: "Access, passwords, security, and account issues",
    color: "blue",
  },
  {
    id: "investments",
    icon: TrendingUp,
    title: "Investments & Campaigns",
    description: "How investments and fundraising campaigns work",
    color: "green",
  },
  {
    id: "withdrawals",
    icon: DollarSign,
    title: "Withdrawals & Financials",
    description: "Withdrawals, payouts, and financial processes",
    color: "purple",
  },
  {
    id: "kyc",
    icon: Shield,
    title: "KYC & Verification",
    description: "Identity verification and compliance",
    color: "red",
  },
  {
    id: "islamic",
    icon: BookOpen,
    title: "Islamic Finance & Shari'ah",
    description: "Learn how halal investing works",
    color: "teal",
  },
  {
    id: "technical",
    icon: AlertCircle,
    title: "Technical Issues",
    description: "Bugs, performance, and technical problems",
    color: "orange",
  },
];

// FAQ data
const faqSections = [
  {
    id: "account",
    title: "Account & Access",
    icon: User,
    questions: [
      {
        q: "I can't log in to my account. What should I do?",
        a: "First, ensure you're using the correct email address. If you've forgotten your password, click 'Forgot Password' on the login page. Check your spam folder if you don't receive the reset email within 5 minutes. If the issue persists, contact our support team.",
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page, enter your registered email address, and follow the instructions sent to your email. The reset link is valid for 1 hour. Make sure to create a strong password with at least 8 characters.",
      },
      {
        q: "What is Two-Factor Authentication (2FA)?",
        a: "2FA adds an extra layer of security to your account. When enabled, you'll need to enter a code from your phone in addition to your password when logging in. We highly recommend enabling 2FA in your account settings for maximum security.",
      },
    ],
  },
  {
    id: "investments",
    title: "Investing & Campaigns",
    icon: TrendingUp,
    questions: [
      {
        q: "How do Foundect investments work?",
        a: "Foundect connects investors with Shari'ah-compliant business opportunities. You invest in verified businesses through campaigns, and receive profit distributions based on the campaign's performance. All investments are structured according to Islamic finance principles.",
      },
      {
        q: "Are my returns guaranteed?",
        a: "No. All investments carry risk, and returns are not guaranteed. Your profit depends on the business's actual performance. We provide risk ratings and detailed information to help you make informed decisions. Past performance does not guarantee future results.",
      },
      {
        q: "How does profit-sharing work?",
        a: "Profit-sharing is based on the campaign structure (Mudarabah or Musharakah). Profits are distributed according to pre-agreed ratios outlined in the campaign terms. Distribution frequency varies by campaign—typically quarterly or annually. You'll receive notifications when distributions are processed.",
      },
    ],
  },
  {
    id: "withdrawals",
    title: "Withdrawals & Financials",
    icon: DollarSign,
    questions: [
      {
        q: "How do I withdraw my funds?",
        a: "Go to your Dashboard, navigate to the Withdrawals section, and submit a withdrawal request. Ensure your bank account is linked and verified. Withdrawals are processed to your registered bank account only.",
      },
      {
        q: "How long do withdrawals take?",
        a: "Withdrawal requests are typically processed within 3-5 business days. Bank transfer times may vary. You'll receive email notifications at each stage: request received, processing, and completed.",
      },
      {
        q: "Why was my withdrawal rejected?",
        a: "Common reasons include: unverified bank account, insufficient balance, pending KYC verification, or campaign lock-in period not completed. Check your notifications for specific details, or contact support for assistance.",
      },
    ],
  },
  {
    id: "kyc",
    title: "KYC & Compliance",
    icon: Shield,
    questions: [
      {
        q: "Why is KYC mandatory?",
        a: "KYC (Know Your Customer) is required by law to prevent fraud, money laundering, and ensure platform security. It protects both investors and businesses. All financial platforms in Bangladesh must comply with regulatory requirements.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. We use bank-grade encryption and follow strict data protection standards. Your personal information is never shared with third parties without your consent. We comply with Bangladesh's data privacy regulations and international security standards.",
      },
      {
        q: "What documents do I need for verification?",
        a: "For individual investors: National ID (NID) or Passport, and a recent utility bill or bank statement. For businesses: Trade License, TIN Certificate, and authorized signatory documents. All documents must be clear and valid.",
      },
    ],
  },
  {
    id: "islamic",
    title: "Islamic Finance & Shari'ah",
    icon: BookOpen,
    questions: [
      {
        q: "What is Shari'ah-compliant investing?",
        a: "Shari'ah-compliant investing follows Islamic principles: no interest (riba), no gambling (maysir), no excessive uncertainty (gharar), and no investment in prohibited industries (alcohol, gambling, etc.). Profits come from legitimate business activities and risk-sharing.",
      },
      {
        q: "What is Mudarabah?",
        a: "Mudarabah is a profit-sharing partnership where one party provides capital (investor) and the other provides expertise and management (business). Profits are shared according to a pre-agreed ratio. Losses are borne by the capital provider, unless caused by negligence.",
      },
      {
        q: "What is Musharakah?",
        a: "Musharakah is a joint venture where all parties contribute capital and share profits and losses according to their investment ratio or pre-agreed terms. All partners have a say in management, though day-to-day operations may be delegated.",
      },
      {
        q: "What is Murabaha?",
        a: "Murabaha is a cost-plus financing structure. The financier purchases an asset and sells it to the client at a markup. The price and payment terms are agreed upfront. This is commonly used for equipment or inventory financing.",
      },
      {
        q: "Why is interest (riba) avoided?",
        a: "Interest is prohibited in Islam because it creates unfair wealth transfer without productive activity. Islamic finance emphasizes risk-sharing, asset-backed transactions, and ethical business practices. Profit comes from real economic activity, not predetermined interest rates.",
      },
      {
        q: "How does Foundect ensure halal investments?",
        a: "All campaigns are reviewed by our Shari'ah Advisory Board before approval. We verify business activities, contract structures, and ensure compliance with Islamic principles. Businesses must operate in halal industries and follow ethical practices.",
      },
    ],
  },
  {
    id: "business",
    title: "Business Accounts",
    icon: Building2,
    questions: [
      {
        q: "How do I create a campaign?",
        a: "After completing business verification, go to your Business Dashboard and click 'Create Campaign'. You'll need to provide business details, funding goals, campaign structure (Mudarabah/Musharakah/Murabaha), and supporting documents. Our team reviews all campaigns before they go live.",
      },
      {
        q: "How long does campaign approval take?",
        a: "Campaign review typically takes 5-7 business days. We verify your business information, review financial documents, and ensure Shari'ah compliance. You'll receive email updates throughout the process.",
      },
      {
        q: "How do I communicate with investors?",
        a: "You can post campaign updates, respond to investor questions, and share progress reports through your Business Dashboard. Regular communication builds trust and keeps investors informed about their investment.",
      },
    ],
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`faq-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setExpandedFAQ(sectionId);
    }
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string } } = {
      blue: { bg: "bg-blue-100", icon: "text-blue-600" },
      green: { bg: "bg-green-100", icon: "text-green-600" },
      purple: { bg: "bg-purple-100", icon: "text-purple-600" },
      red: { bg: "bg-red-100", icon: "text-red-600" },
      teal: { bg: "bg-teal-100", icon: "text-teal-600" },
      orange: { bg: "bg-orange-100", icon: "text-orange-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1. HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Support Center
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get help, learn about ethical investing, and connect with Foundect
            support.
          </p>
        </div>

        {/* 2. QUICK HELP CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickHelpCards.map((card) => {
            const Icon = card.icon;
            const colors = getColorClasses(card.color);
            return (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-left group"
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </button>
            );
          })}
        </section>

        {/* 3. SEARCH BAR */}
        <section className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </section>

        {/* 4. FAQ SECTIONS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          {faqSections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedFAQ === section.id;
            return (
              <div
                key={section.id}
                id={`faq-${section.id}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-8"
              >
                {/* Section Header */}
                <button
                  onClick={() =>
                    setExpandedFAQ(isExpanded ? null : section.id)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Questions */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-3 border-t border-gray-100">
                    {section.questions.map((item, index) => {
                      const questionId = `${section.id}-${index}`;
                      const isQuestionExpanded = expandedQuestion === questionId;
                      return (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedQuestion(
                                isQuestionExpanded ? null : questionId
                              )
                            }
                            className="w-full p-4 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-start gap-3 flex-1">
                              <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-medium text-gray-900">
                                {item.q}
                              </p>
                            </div>
                            {isQuestionExpanded ? (
                              <ChevronUp className="w-4 h-4 text-gray-600 flex-shrink-0 ml-2" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0 ml-2" />
                            )}
                          </button>
                          {isQuestionExpanded && (
                            <div className="px-4 pb-4 pl-12">
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* 5. CONTACT & SUPPORT OPTIONS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Still need help?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Support */}
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <a
                href="mailto:support@foundect.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                support@foundect.com
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Response within 24 hours
              </p>
            </div>

            {/* Live Chat (Coming Soon) */}
            <div className="text-center p-6 border border-gray-200 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <button
                disabled
                className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed"
              >
                Launching Soon
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Real-time chat support
              </p>
            </div>

            {/* AI Assistant (Coming Soon) */}
            <div className="text-center p-6 border border-gray-200 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI Support Assistant
              </h3>
              <button
                disabled
                className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed"
              >
                Coming Soon
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Instant answers to common questions
              </p>
            </div>
          </div>
        </section>

        {/* 6. SUPPORT REQUEST FORM */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Submit a Support Request
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Account Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select account type</option>
                  <option value="investor">Investor</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Issue Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Category
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a category</option>
                  <option value="account">Account & Login</option>
                  <option value="investment">Investments & Campaigns</option>
                  <option value="withdrawal">Withdrawals & Financials</option>
                  <option value="kyc">KYC & Verification</option>
                  <option value="islamic">Islamic Finance Questions</option>
                  <option value="technical">Technical Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Describe your issue or question in detail..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </section>

        {/* 7. TRUST & SAFETY NOTICE */}
        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-2 text-sm text-blue-900">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Foundect follows strict data protection standards.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  All investments follow Shari'ah-compliant principles.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span className="font-medium">
                  We will never ask for your password or OTP.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}







