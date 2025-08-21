import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings, 
  Shield, 
  Zap,
  ArrowRight,
  Bot,
  FileText,
  Activity
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">HeliosCS</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/chat" className="text-sm font-medium hover:text-primary">
              Chat Widget
            </Link>
            <Link href="/agent" className="text-sm font-medium hover:text-primary">
              Agent Console
            </Link>
            <Link href="/analytics" className="text-sm font-medium hover:text-primary">
              Analytics
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Financial-Grade AI Support
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Intelligent Customer Support
            <span className="text-primary"> Chatbot</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Resolve client queries across channels with compliant, auditable answers. 
            Built for banks, brokerages, and fintechs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/chat">
                Try Chat Widget
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/agent">
                Agent Console
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary" />
              <CardTitle>Multi-Channel Support</CardTitle>
              <CardDescription>
                Web, mobile, email, and chat integration with seamless handoffs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle>Compliance & Security</CardTitle>
              <CardDescription>
                PII redaction, audit trails, and regulatory compliance built-in
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle>AI-Powered Responses</CardTitle>
              <CardDescription>
                RAG-based answers with citations and confidence scoring
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>Agent Collaboration</CardTitle>
              <CardDescription>
                Seamless escalation with full conversation context
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary" />
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Deflection rates, CSAT scores, and performance metrics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle>Knowledge Management</CardTitle>
              <CardDescription>
                Centralized policy docs, FAQs, and product information
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quick Access */}
      <section className="container py-20">
        <h2 className="mb-8 text-center text-3xl font-bold">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/chat">
            <Card className="cursor-pointer transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold">Chat Widget</h3>
                <p className="text-sm text-muted-foreground">Customer interface</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/agent">
            <Card className="cursor-pointer transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold">Agent Console</h3>
                <p className="text-sm text-muted-foreground">Support dashboard</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/analytics">
            <Card className="cursor-pointer transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Activity className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold">Analytics</h3>
                <p className="text-sm text-muted-foreground">Performance metrics</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/settings">
            <Card className="cursor-pointer transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Settings className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold">Settings</h3>
                <p className="text-sm text-muted-foreground">Configuration</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 HeliosCS. Financial-grade customer support chatbot.</p>
        </div>
      </footer>
    </div>
  )
}
