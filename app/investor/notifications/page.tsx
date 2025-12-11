import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { Bell, TrendingUp, AlertCircle, CheckCircle, Info } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Investment Successful",
    message: "Your investment of ৳50,000 in Green Textile Manufacturing has been confirmed.",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    type: "profit",
    title: "Profit Share Received",
    message: "You received ৳2,500 profit share from Tech Solutions Hub.",
    time: "1 day ago",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    type: "alert",
    title: "KYC Verification Pending",
    message: "Complete your KYC to unlock higher investment limits.",
    time: "2 days ago",
    icon: AlertCircle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: 4,
    type: "info",
    title: "New Campaign Available",
    message: "E-commerce Platform campaign is now open for investment.",
    time: "3 days ago",
    icon: Info,
    color: "text-gray-500",
    bgColor: "bg-gray-50",
  },
  {
    id: 5,
    type: "success",
    title: "Campaign Fully Funded",
    message: "Halal Restaurant Chain Expansion has reached its funding goal!",
    time: "5 days ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

export default function InvestorNotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-7 w-7 text-blue-500" />
          <h1 className="text-3xl font-bold text-text-900">Notifications</h1>
        </div>
        <p className="text-gray-600">Stay updated with your investments</p>
      </div>

      <GlassCard className="animate-fade-in animation-delay-500">
        <GlassCardContent className="p-0">
          <div className="divide-y divide-white/20">
            {notifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="p-5 hover:glass-bg transition-all cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-pill glass-bg flex items-center justify-center flex-shrink-0 ${notification.bgColor}`}>
                      <Icon className={`h-5 w-5 ${notification.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-900 mb-1">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCardContent>
      </GlassCard>

      <div className="text-center">
        <p className="text-sm text-gray-500">You're all caught up! 🎉</p>
      </div>
    </div>
  );
}
