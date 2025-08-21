import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings, 
  Shield, 
  Zap,
  Bot,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">HeliosCS Dashboard</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="/" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="/chat" className="text-sm font-medium hover:text-primary">
              Chat Widget
            </a>
            <a href="/agent" className="text-sm font-medium hover:text-primary">
              Agent Console
            </a>
            <a href="/analytics" className="text-sm font-medium hover:text-primary">
              Analytics
            </a>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to HeliosCS</h1>
          <p className="text-muted-foreground">
            Financial-grade customer support chatbot dashboard
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +12% from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deflection Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                +5% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3s</div>
              <p className="text-xs text-muted-foreground">
                -0.5s from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2/5</div>
              <p className="text-xs text-muted-foreground">
                +0.3 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild className="h-auto flex-col space-y-2 p-6">
              <a href="/chat">
                <MessageSquare className="h-8 w-8" />
                <span>Chat Widget</span>
                <span className="text-xs text-muted-foreground">Customer Interface</span>
              </a>
            </Button>

            <Button asChild variant="outline" className="h-auto flex-col space-y-2 p-6">
              <a href="/agent">
                <Users className="h-8 w-8" />
                <span>Agent Console</span>
                <span className="text-xs text-muted-foreground">Support Dashboard</span>
              </a>
            </Button>

            <Button asChild variant="outline" className="h-auto flex-col space-y-2 p-6">
              <a href="/analytics">
                <BarChart3 className="h-8 w-8" />
                <span>Analytics</span>
                <span className="text-xs text-muted-foreground">Performance Metrics</span>
              </a>
            </Button>

            <Button asChild variant="outline" className="h-auto flex-col space-y-2 p-6">
              <a href="/settings">
                <Settings className="h-8 w-8" />
                <span>Settings</span>
                <span className="text-xs text-muted-foreground">Configuration</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>
                Latest customer interactions and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <div>
                      <p className="text-sm font-medium">Account Inquiry</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Resolved</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-warning"></div>
                    <div>
                      <p className="text-sm font-medium">Technical Issue</p>
                      <p className="text-xs text-muted-foreground">5 minutes ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <p className="text-sm font-medium">Trading Hours</p>
                      <p className="text-xs text-muted-foreground">8 minutes ago</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Resolved</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>
                Current system health and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">API Service</span>
                  </div>
                  <Badge variant="secondary">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Database</span>
                  </div>
                  <Badge variant="secondary">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">AI Models</span>
                  </div>
                  <Badge variant="secondary">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-4 w-4 text-warning" />
                    <span className="text-sm">Redis Cache</span>
                  </div>
                  <Badge variant="outline">Degraded</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
