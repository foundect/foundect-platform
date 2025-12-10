import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

// Dummy notifications data
const notifications = [
  {
    id: 1,
    type: "success",
    title: "Investment Successful",
    message: "Your investment of ৳50,000 in Green Textile Manufacturing has been confirmed.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "profit",
    title: "Profit Share Received",
    message: "You received ৳2,500 profit share from Tech Solutions Hub.",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Campaign Update",
    message: "Organic Food Distribution has posted a new quarterly update.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    type: "warning",
    title: "KYC Reminder",
    message: "Complete your KYC verification to increase your investment limits.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    type: "success",
    title: "Campaign Fully Funded",
    message: "Sustainable Packaging Solutions has reached its funding goal!",
    time: "5 days ago",
    read: true,
  },
  {
    id: 6,
    type: "info",
    title: "New Campaign Available",
    message: "A new halal investment opportunity is now available in the Technology sector.",
    time: "1 week ago",
    read: true,
  },
];

export default function InvestorNotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "profit":
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Bell className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your investments</p>
        </div>
        <Badge variant="destructive" className="h-6">
          {notifications.filter(n => !n.read).length} New
        </Badge>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={notification.read ? "opacity-60" : "border-primary"}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getIcon(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{notification.title}</h3>
                    {!notification.read && (
                      <Badge variant="default" className="ml-2">New</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TODO: Add pagination or infinite scroll for older notifications */}
      {/* TODO: Add mark as read/unread functionality */}
      {/* TODO: Add notification preferences */}
    </div>
  );
}

