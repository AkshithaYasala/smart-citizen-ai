import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle2, Clock, FileCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Application {
  id: string;
  name: string;
  service_type: string;
  status: string;
  created_at: string;
}

export const NotificationsPanel = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApplications();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('applications-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'applications'
        },
        () => {
          fetchApplications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching applications:", error);
      } else {
        setApplications(data || []);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle2 className="h-4 w-4 text-secondary" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-primary" />;
      case 'Under Review':
        return <FileCheck className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Pending':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Under Review':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Rejected':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="shadow-[var(--shadow-medium)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Recent Applications
        </CardTitle>
        <CardDescription>
          Track your submitted applications in real-time
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-20 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Bell className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No applications submitted yet</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {applications.map((app) => (
              <div
                key={app.id}
                className="p-4 border rounded-lg hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm">{app.name}</h4>
                    <p className="text-sm text-muted-foreground">{app.service_type}</p>
                  </div>
                  <Badge className={getStatusColor(app.status)} variant="outline">
                    <span className="flex items-center gap-1">
                      {getStatusIcon(app.status)}
                      {app.status}
                    </span>
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Submitted: {new Date(app.created_at).toLocaleDateString()} at{' '}
                  {new Date(app.created_at).toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
