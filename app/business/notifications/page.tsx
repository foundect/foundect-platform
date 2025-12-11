import { GlassCard, GlassCardContent } from "@/components/ui/GlassCard";
import { Bell, TrendingUp, AlertCircle, CheckCircle, Users } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "New Investment Received",
    message: "Your campaign received a new investment of ৳25,000 from an investor.",
    time: "1 hour ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    type: "milestone",
    title: "Funding Milestone Reached",
    message: "Green Textile Manufacturing has reached 50% of its funding goal!",
    time: "5 hours ago",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    type: "investor",
    title: "New Investor Joined",
    message: "A new investor has joined your Sustainable Packaging campaign.",
    time: "1 day ago",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: 4,
    type: "alert",
    title: "Document Verification Pending",
    message: "Please upload your business verification documents to continue.",
    time: "2 days ago",
    icon: AlertCircle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: 5,
    type: "success",
    title: "Campaign Approved",
    message: "Your Organic Food Distribution campaign has been approved and is now live!",
    time: "3 days ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

export default function BusinessNotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-7 w-7 text-blue-500" />
          <h1 className="text-3xl font-bold text-text-900">Notifications</h1>
        </div>
        <p className="text-gray-600">Stay updated with your campaigns</p>
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
