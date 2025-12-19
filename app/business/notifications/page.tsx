"use client";

import { useState } from "react";
import { TrendingUp, AlertCircle, CheckCircle, Users, Info, DollarSign } from "lucide-react";

type NotificationType = "investment" | "milestone" | "system" | "info";

interface Notification {
  id: number;
  category: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  timeGroup: "today" | "week" | "earlier";
  isRead: boolean;
  actionText?: string;
  actionHref?: string;
  icon: any;
  iconColor: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    category: "investment",
    title: "New Investment Received",
    description: "Your campaign received a new investment of ৳25,000 from an investor.",
    timestamp: "1 hour ago",
    timeGroup: "today",
    isRead: false,
    icon: DollarSign,
    iconColor: "text-emerald-600 bg-emerald-50",
  },
  {
    id: 2,
    category: "milestone",
    title: "Funding Milestone Reached",
    description: "Green Textile Manufacturing has reached 50% of its funding goal.",
    timestamp: "5 hours ago",
    timeGroup: "today",
    isRead: false,
    icon: TrendingUp,
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: 3,
    category: "investment",
    title: "New Investor Joined",
    description: "A new investor has joined your Sustainable Packaging campaign.",
    timestamp: "1 day ago",
    timeGroup: "week",
    isRead: true,
    icon: Users,
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: 4,
    category: "system",
    title: "Document Verification Pending",
    description: "Please upload your business verification documents to continue.",
    timestamp: "2 days ago",
    timeGroup: "week",
    isRead: true,
    actionText: "Upload Documents",
    actionHref: "/business/settings",
    icon: AlertCircle,
    iconColor: "text-amber-600 bg-amber-50",
  },
  {
    id: 5,
    category: "milestone",
    title: "Campaign Approved",
    description: "Your Organic Food Distribution campaign has been approved and is now live.",
    timestamp: "3 days ago",
    timeGroup: "week",
    isRead: true,
    icon: CheckCircle,
    iconColor: "text-emerald-600 bg-emerald-50",
  },
  {
    id: 6,
    category: "investment",
    title: "Investment Milestone Reached",
    description: "Your total campaign funding has crossed ৳500,000 across all campaigns.",
    timestamp: "1 week ago",
    timeGroup: "earlier",
    isRead: true,
    icon: TrendingUp,
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: 7,
    category: "info",
    title: "Quarterly Report Due",
    description: "Don't forget to submit your Q3 performance report for your active campaigns.",
    timestamp: "2 weeks ago",
    timeGroup: "earlier",
    isRead: true,
    actionText: "View Report",
    actionHref: "/business/financials",
    icon: Info,
    iconColor: "text-gray-600 bg-gray-50",
  },
];

export default function BusinessNotificationsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | NotificationType>("all");

  // Filter notifications based on selected category
  const filteredNotifications = notifications.filter(
    (notification) => activeFilter === "all" || notification.category === activeFilter
  );

  // Group notifications by time
  const groupedNotifications = {
    today: filteredNotifications.filter((n) => n.timeGroup === "today"),
    week: filteredNotifications.filter((n) => n.timeGroup === "week"),
    earlier: filteredNotifications.filter((n) => n.timeGroup === "earlier"),
  };

  const filters: Array<{ label: string; value: "all" | NotificationType }> = [
    { label: "All", value: "all" },
    { label: "Investments", value: "investment" },
    { label: "Milestones", value: "milestone" },
    { label: "System", value: "system" },
  ];

  const renderNotificationGroup = (title: string, items: Notification[]) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {title}
          </h2>
          <div className="h-px bg-gray-200" />
        </div>
        <div className="space-y-3">
          {items.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`relative bg-white rounded-xl border transition-all hover:shadow-md cursor-pointer ${
                  notification.isRead
                    ? "border-gray-200"
                    : "border-blue-200 bg-blue-50/30"
                }`}
              >
                {/* Unread accent bar */}
                {!notification.isRead && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl" />
                )}

                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${notification.iconColor}`}
                    >
                      <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                        {notification.description}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs text-gray-500">
                          {notification.timestamp}
                        </p>
                        {notification.actionText && (
                          <a
                            href={notification.actionHref}
                            className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log(`Navigate to ${notification.actionHref}`);
                            }}
                          >
                            {notification.actionText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Notifications
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Stay updated with your campaigns
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === filter.value
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Notification Groups */}
      {filteredNotifications.length > 0 ? (
        <div>
          {renderNotificationGroup("Today", groupedNotifications.today)}
          {renderNotificationGroup("This Week", groupedNotifications.week)}
          {renderNotificationGroup("Earlier", groupedNotifications.earlier)}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 sm:py-20">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            You're all caught up
          </h3>
          <p className="text-sm text-gray-600 max-w-sm mx-auto">
            We'll notify you when there's something important to review.
          </p>
        </div>
      )}
    </div>
  );
}
