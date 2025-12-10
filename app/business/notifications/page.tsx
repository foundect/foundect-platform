import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, TrendingUp, AlertCircle, CheckCircle, Users } from "lucide-react";

// Dummy notifications data for business
const notifications = [
  {
    id: 1,
    type: "success",
    title: "New Investment Received",
    message: "Ahmed R. invested ৳25,000 in your Green Textile Manufacturing campaign.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 2,
    type: "milestone",
    title: "Campaign Milestone Reached",
    message: "Your campaign has reached 50% of its funding goal!",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Update Reminder",
    message: "It's been 30 days since your last campaign update. Keep your investors informed!",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "success",
    title: "Campaign Approved",
    message: "Your 'Sustainable Product Line Launch' campaign has been approved and is now live!",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    type: "investors",
    title: "New Investor Question",
    message: "An investor has asked a question about your campaign. Please respond within 24 hours.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 6,
    type: "warning",
    title: "Document Expiring Soon",
    message: "Your Trade License will expire in 30 days. Please upload an updated copy.",
    time: "5 days ago",
    read: true,
  },
];

export default function BusinessNotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "milestone":
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "investors":
        return <Users className="h-5 w-5 text-blue-600" />;
      default:
        return <Bell className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your campaigns and investors</p>
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

