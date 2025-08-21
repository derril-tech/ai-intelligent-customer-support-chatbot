// Mock data for HeliosCS frontend development and testing

import { 
  User, 
  Session, 
  Message, 
  Customer, 
  Ticket, 
  KnowledgeSource, 
  AnalyticsMetrics 
} from '@/types'

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user_1',
    email: 'admin@helioscs.com',
    name: 'Admin User',
    role: 'admin',
    tenant_id: 'tenant_1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    last_login: '2024-01-15T10:30:00Z',
    is_active: true
  },
  {
    id: 'user_2',
    email: 'agent@helioscs.com',
    name: 'Support Agent',
    role: 'agent',
    tenant_id: 'tenant_1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    last_login: '2024-01-15T09:15:00Z',
    is_active: true
  },
  {
    id: 'user_3',
    email: 'supervisor@helioscs.com',
    name: 'Team Supervisor',
    role: 'supervisor',
    tenant_id: 'tenant_1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    last_login: '2024-01-15T08:45:00Z',
    is_active: true
  }
]

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: 'customer_1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    phone: '+1-555-0123',
    tier: 'premium',
    account_type: 'trading',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    metadata: {
      account_balance: 50000,
      risk_tolerance: 'moderate',
      preferred_contact: 'email'
    }
  },
  {
    id: 'customer_2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    phone: '+1-555-0456',
    tier: 'enterprise',
    account_type: 'investment',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    metadata: {
      account_balance: 250000,
      risk_tolerance: 'aggressive',
      preferred_contact: 'phone'
    }
  },
  {
    id: 'customer_3',
    email: 'bob.wilson@example.com',
    name: 'Bob Wilson',
    phone: '+1-555-0789',
    tier: 'basic',
    account_type: 'savings',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
    metadata: {
      account_balance: 15000,
      risk_tolerance: 'conservative',
      preferred_contact: 'email'
    }
  }
]

// Mock Sessions
export const mockSessions: Session[] = [
  {
    id: 'session_1',
    customer_id: 'customer_1',
    status: 'active',
    channel: 'web',
    created_at: '2024-01-15T10:00:00Z',
    metadata: {
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      ip_address: '192.168.1.100',
      page_url: '/trading'
    }
  },
  {
    id: 'session_2',
    customer_id: 'customer_2',
    status: 'escalated',
    channel: 'mobile',
    agent_id: 'user_2',
    escalation_reason: 'complex_account_issue',
    created_at: '2024-01-15T09:30:00Z',
    ended_at: '2024-01-15T10:15:00Z',
    metadata: {
      user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      ip_address: '192.168.1.101',
      app_version: '2.1.0'
    }
  },
  {
    id: 'session_3',
    customer_id: 'customer_3',
    status: 'ended',
    channel: 'email',
    created_at: '2024-01-15T08:00:00Z',
    ended_at: '2024-01-15T08:45:00Z',
    metadata: {
      subject: 'Account Access Issue',
      email_client: 'Outlook'
    }
  }
]

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: 'msg_1',
    session_id: 'session_1',
    content: 'What are your trading hours?',
    message_type: 'user',
    timestamp: '2024-01-15T10:00:00Z',
    status: 'read',
    metadata: {}
  },
  {
    id: 'msg_2',
    session_id: 'session_1',
    content: 'Our trading hours are Monday through Friday, 9:30 AM to 4:00 PM Eastern Time.',
    message_type: 'bot',
    timestamp: '2024-01-15T10:00:05Z',
    status: 'delivered',
    confidence: 0.95,
    intent: 'trading_hours_inquiry',
    citations: [
      {
        source: 'trading_policy_v2.1',
        title: 'Trading Hours and Market Schedule',
        url: '/policies/trading-hours',
        excerpt: 'Standard market hours are 9:30 AM to 4:00 PM ET...',
        confidence: 0.95
      }
    ],
    metadata: {}
  },
  {
    id: 'msg_3',
    session_id: 'session_2',
    content: 'I need help with my account access',
    message_type: 'user',
    timestamp: '2024-01-15T09:30:00Z',
    status: 'read',
    metadata: {}
  },
  {
    id: 'msg_4',
    session_id: 'session_2',
    content: 'I understand you\'re having trouble accessing your account. Let me help you with that.',
    message_type: 'agent',
    timestamp: '2024-01-15T09:32:00Z',
    status: 'delivered',
    metadata: {
      agent_name: 'Support Agent'
    }
  }
]

// Mock Tickets
export const mockTickets: Ticket[] = [
  {
    id: 'ticket_1',
    session_id: 'session_2',
    title: 'Account Access Issue',
    description: 'Customer unable to log into trading platform',
    priority: 'high',
    category: 'technical_support',
    status: 'in_progress',
    customer_id: 'customer_2',
    assigned_agent_id: 'user_2',
    created_at: '2024-01-15T09:35:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    tags: ['login', 'technical', 'urgent'],
    metadata: {
      platform: 'web',
      browser: 'Chrome',
      os: 'Windows 10'
    }
  },
  {
    id: 'ticket_2',
    session_id: 'session_3',
    title: 'Billing Inquiry',
    description: 'Question about monthly account fees',
    priority: 'medium',
    category: 'billing',
    status: 'resolved',
    customer_id: 'customer_3',
    assigned_agent_id: 'user_2',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:45:00Z',
    resolved_at: '2024-01-15T08:45:00Z',
    tags: ['billing', 'fees'],
    metadata: {
      account_type: 'savings',
      fee_amount: 12.99
    }
  }
]

// Mock Knowledge Sources
export const mockKnowledgeSources: KnowledgeSource[] = [
  {
    id: 'kb_1',
    name: 'Trading Hours Policy',
    type: 'policy',
    content: 'Our trading hours are Monday through Friday, 9:30 AM to 4:00 PM Eastern Time. We are closed on weekends and major holidays.',
    metadata: {
      effective_date: '2024-01-01',
      department: 'trading'
    },
    category: 'policies',
    tags: ['trading', 'hours', 'schedule'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    version: 1,
    is_active: true,
    author: 'compliance_team',
    effective_date: '2024-01-01'
  },
  {
    id: 'kb_2',
    name: 'Account Access Troubleshooting',
    type: 'faq',
    content: 'If you cannot access your account, try the following steps: 1. Clear your browser cache 2. Check your internet connection 3. Contact support if issues persist',
    metadata: {
      difficulty: 'easy',
      department: 'support'
    },
    category: 'technical_support',
    tags: ['login', 'access', 'troubleshooting'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    version: 2,
    is_active: true,
    author: 'support_team'
  },
  {
    id: 'kb_3',
    name: 'Fee Schedule 2024',
    type: 'document',
    content: 'Monthly account fees: Basic accounts $9.99, Premium accounts $19.99, Enterprise accounts $49.99. Trading fees apply per transaction.',
    metadata: {
      effective_date: '2024-01-01',
      department: 'billing'
    },
    category: 'billing',
    tags: ['fees', 'pricing', 'accounts'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    version: 1,
    is_active: true,
    author: 'billing_team',
    effective_date: '2024-01-01'
  }
]

// Mock Analytics Metrics
export const mockAnalyticsMetrics: AnalyticsMetrics = {
  deflection_rate: 0.78,
  average_response_time: 2.3,
  customer_satisfaction: 4.2,
  total_conversations: 1250,
  escalation_rate: 0.15,
  top_intents: [
    {
      intent: 'account_inquiry',
      count: 245,
      percentage: 19.6,
      avg_satisfaction: 4.1
    },
    {
      intent: 'trading_hours',
      count: 189,
      percentage: 15.1,
      avg_satisfaction: 4.5
    },
    {
      intent: 'technical_support',
      count: 156,
      percentage: 12.5,
      avg_satisfaction: 3.8
    },
    {
      intent: 'billing_inquiry',
      count: 134,
      percentage: 10.7,
      avg_satisfaction: 4.3
    }
  ],
  agent_performance: [
    {
      agent_id: 'user_2',
      agent_name: 'Support Agent',
      conversations_handled: 45,
      avg_response_time: 2.1,
      customer_satisfaction: 4.3,
      escalation_rate: 0.12
    },
    {
      agent_id: 'user_3',
      agent_name: 'Team Supervisor',
      conversations_handled: 23,
      avg_response_time: 1.8,
      customer_satisfaction: 4.6,
      escalation_rate: 0.08
    }
  ],
  conversation_volume: [
    { timestamp: '2024-01-15T08:00:00Z', value: 15, label: '8 AM' },
    { timestamp: '2024-01-15T09:00:00Z', value: 28, label: '9 AM' },
    { timestamp: '2024-01-15T10:00:00Z', value: 42, label: '10 AM' },
    { timestamp: '2024-01-15T11:00:00Z', value: 38, label: '11 AM' },
    { timestamp: '2024-01-15T12:00:00Z', value: 25, label: '12 PM' },
    { timestamp: '2024-01-15T13:00:00Z', value: 31, label: '1 PM' },
    { timestamp: '2024-01-15T14:00:00Z', value: 35, label: '2 PM' },
    { timestamp: '2024-01-15T15:00:00Z', value: 29, label: '3 PM' },
    { timestamp: '2024-01-15T16:00:00Z', value: 18, label: '4 PM' }
  ]
}

// Mock data for different scenarios
export const mockScenarios = {
  newConversation: {
    session: mockSessions[0],
    messages: [mockMessages[0], mockMessages[1]],
    customer: mockCustomers[0]
  },
  escalatedConversation: {
    session: mockSessions[1],
    messages: [mockMessages[2], mockMessages[3]],
    customer: mockCustomers[1],
    ticket: mockTickets[0]
  },
  resolvedConversation: {
    session: mockSessions[2],
    messages: [],
    customer: mockCustomers[2],
    ticket: mockTickets[1]
  }
}

// Mock API responses
export const mockApiResponses = {
  login: {
    user: mockUsers[0],
    tokens: {
      access_token: 'mock_access_token',
      refresh_token: 'mock_refresh_token',
      token_type: 'bearer',
      expires_in: 1800
    }
  },
  sessions: mockSessions,
  messages: mockMessages,
  tickets: mockTickets,
  knowledge: mockKnowledgeSources,
  analytics: mockAnalyticsMetrics
}
