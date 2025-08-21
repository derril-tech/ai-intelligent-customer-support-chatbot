// Core domain types for HeliosCS frontend

// User and Authentication
export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  tenant_id: string
  created_at: string
  updated_at: string
  last_login?: string
  is_active: boolean
}

export type UserRole = 'admin' | 'agent' | 'supervisor' | 'viewer'

export interface AuthTokens {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  tokens: AuthTokens
}

// Session Management
export interface Session {
  id: string
  customer_id: string
  status: SessionStatus
  channel: ChannelType
  created_at: string
  ended_at?: string
  metadata: Record<string, any>
  agent_id?: string
  escalation_reason?: string
}

export type SessionStatus = 'active' | 'ended' | 'escalated' | 'waiting'

export type ChannelType = 'web' | 'mobile' | 'email' | 'chat' | 'phone'

// Customer Management
export interface Customer {
  id: string
  email: string
  name: string
  phone?: string
  tier: CustomerTier
  account_type: AccountType
  created_at: string
  updated_at: string
  metadata: Record<string, any>
}

export type CustomerTier = 'basic' | 'premium' | 'enterprise'

export type AccountType = 'trading' | 'savings' | 'checking' | 'investment'

// Message and Chat
export interface Message {
  id: string
  session_id: string
  content: string
  message_type: MessageType
  timestamp: string
  status: MessageStatus
  metadata: Record<string, any>
  citations?: Citation[]
  redactions?: Redaction[]
  confidence?: number
  intent?: string
  entities?: Record<string, any>
}

export type MessageType = 'user' | 'bot' | 'system' | 'agent'

export type MessageStatus = 'sent' | 'delivered' | 'read' | 'failed'

export interface Citation {
  source: string
  title: string
  url: string
  excerpt: string
  confidence: number
  page_number?: number
}

export interface Redaction {
  type: RedactionType
  original: string
  masked: string
  position: [number, number]
  confidence: number
}

export type RedactionType = 'ssn' | 'account_number' | 'email' | 'phone' | 'address' | 'credit_card'

// Ticket Management
export interface Ticket {
  id: string
  session_id: string
  title: string
  description: string
  priority: TicketPriority
  category: TicketCategory
  status: TicketStatus
  customer_id: string
  assigned_agent_id?: string
  created_at: string
  updated_at: string
  resolved_at?: string
  tags: string[]
  metadata: Record<string, any>
}

export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'

export type TicketCategory = 'technical_support' | 'account_inquiry' | 'billing' | 'trading' | 'security' | 'general'

export type TicketStatus = 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed'

// Knowledge Management
export interface KnowledgeSource {
  id: string
  name: string
  type: KnowledgeType
  content: string
  metadata: Record<string, any>
  category: string
  tags: string[]
  created_at: string
  updated_at: string
  version: number
  is_active: boolean
  author: string
  effective_date?: string
  expiry_date?: string
}

export type KnowledgeType = 'document' | 'faq' | 'policy' | 'procedure' | 'article'

export interface KnowledgeSearchResult {
  source: KnowledgeSource
  relevance_score: number
  excerpt: string
  highlights: string[]
}

// Analytics and Reporting
export interface AnalyticsMetrics {
  deflection_rate: number
  average_response_time: number
  customer_satisfaction: number
  total_conversations: number
  escalation_rate: number
  top_intents: IntentMetric[]
  agent_performance: AgentPerformance[]
  conversation_volume: TimeSeriesData[]
}

export interface IntentMetric {
  intent: string
  count: number
  percentage: number
  avg_satisfaction: number
}

export interface AgentPerformance {
  agent_id: string
  agent_name: string
  conversations_handled: number
  avg_response_time: number
  customer_satisfaction: number
  escalation_rate: number
}

export interface TimeSeriesData {
  timestamp: string
  value: number
  label: string
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message?: string
  status: 'success' | 'error'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    size: number
    total: number
    total_pages: number
  }
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
  timestamp: string
  request_id: string
}

// WebSocket Types
export interface WebSocketMessage {
  type: WebSocketMessageType
  payload: any
  timestamp: string
  session_id?: string
}

export type WebSocketMessageType = 
  | 'message'
  | 'typing'
  | 'presence'
  | 'escalation'
  | 'system'
  | 'error'

// Form Types
export interface ChatFormData {
  message: string
  session_id: string
  metadata?: Record<string, any>
}

export interface TicketFormData {
  title: string
  description: string
  priority: TicketPriority
  category: TicketCategory
  tags: string[]
}

export interface KnowledgeFormData {
  name: string
  type: KnowledgeType
  content: string
  category: string
  tags: string[]
  metadata: Record<string, any>
}

// UI State Types
export interface ChatState {
  messages: Message[]
  isLoading: boolean
  isTyping: boolean
  error: string | null
  session: Session | null
}

export interface AuthState {
  user: User | null
  tokens: AuthTokens | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface DashboardState {
  metrics: AnalyticsMetrics | null
  isLoading: boolean
  error: string | null
  lastUpdated: string | null
}

// Utility Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface SortOption {
  field: string
  direction: 'asc' | 'desc'
}

export interface FilterOption {
  field: string
  operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'contains' | 'in'
  value: any
}

export interface SearchParams {
  query: string
  filters: FilterOption[]
  sort: SortOption[]
  page: number
  size: number
}
