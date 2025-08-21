import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  FileText,
  Bot,
  CheckCircle
} from 'lucide-react'

export default function AboutPage() {
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
            <a href="/" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="/chat" className="text-sm font-medium hover:text-primary">
              Chat Widget
            </a>
            <a href="/agent" className="text-sm font-medium hover:text-primary">
              Agent Console
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            About HeliosCS
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Financial-Grade
            <span className="text-primary"> AI Support</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Built for banks, brokerages, and fintechs who demand the highest standards 
            in security, compliance, and customer experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              To revolutionize customer support in the financial industry by providing 
              intelligent, compliant, and auditable AI-powered assistance that enhances 
              customer experience while maintaining the highest security standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Financial-grade security and compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Multi-channel support integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Real-time AI-powered responses</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Comprehensive audit trails</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Security First</CardTitle>
                <CardDescription>
                  Built with enterprise-grade security, PII protection, and regulatory compliance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary" />
                <CardTitle>AI-Powered</CardTitle>
                <CardDescription>
                  Advanced language models with RAG capabilities for accurate, contextual responses.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>Multi-Channel Support</CardTitle>
              <CardDescription>
                Seamless integration across web, mobile, email, and chat platforms.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle>Compliance & Security</CardTitle>
              <CardDescription>
                PII redaction, audit trails, and regulatory compliance built-in.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle>AI-Powered Responses</CardTitle>
              <CardDescription>
                RAG-based answers with citations and confidence scoring.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>Agent Collaboration</CardTitle>
              <CardDescription>
                Seamless escalation with full conversation context.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary" />
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Deflection rates, CSAT scores, and performance metrics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle>Knowledge Management</CardTitle>
              <CardDescription>
                Centralized policy docs, FAQs, and product information.
              </CardDescription>
            </CardHeader>
          </Card>
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
