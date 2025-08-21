# API Specification - HeliosCS

This document provides comprehensive API specifications for the HeliosCS Intelligent Customer Support Chatbot.

## 🔗 Base URL

- **Development**: `http://localhost:8000`
- **Production**: `https://api.helioscs.com`

## 🔐 Authentication

All API endpoints require authentication unless specified otherwise. Use JWT Bearer tokens:

```http
Authorization: Bearer <access_token>
```

### Token Types
- **Access Token**: Short-lived (30 minutes) for API requests
- **Refresh Token**: Long-lived (7 days) for token renewal

## 📋 API Endpoints

### Authentication (`/api/v1/auth`)

#### POST `/auth/login`
Authenticate user and receive access/refresh tokens.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 1800,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "role": "agent",
    "tenant_id": "tenant_456"
  }
}
```

#### POST `/auth/refresh`
Refresh access token using refresh token.

**Request:**
```json
{
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

#### POST `/auth/logout`
Invalidate refresh token.

### Sessions (`/api/v1/sessions`)

#### POST `/sessions/create`
Create a new chat session.

**Request:**
```json
{
  "customer_id": "customer_789",
  "channel": "web",
  "metadata": {
    "user_agent": "Mozilla/5.0...",
    "ip_address": "192.168.1.1"
  }
}
```

**Response:**
```json
{
  "session_id": "session_abc123",
  "customer_id": "customer_789",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "metadata": {
    "user_agent": "Mozilla/5.0...",
    "ip_address": "192.168.1.1"
  }
}
```

#### GET `/sessions/{session_id}`
Get session details and conversation history.

#### PUT `/sessions/{session_id}/end`
End an active session.

### Messages (`/api/v1/messages`)

#### POST `/messages/send`
Send a message in a session.

**Request:**
```json
{
  "session_id": "session_abc123",
  "content": "What are your trading hours?",
  "message_type": "user",
  "metadata": {
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Response:**
```json
{
  "message_id": "msg_xyz789",
  "session_id": "session_abc123",
  "content": "What are your trading hours?",
  "message_type": "user",
  "timestamp": "2024-01-15T10:30:00Z",
  "status": "sent"
}
```

#### GET `/messages/{session_id}`
Get all messages in a session.

#### POST `/messages/{message_id}/feedback`
Provide feedback on a bot response.

**Request:**
```json
{
  "rating": 5,
  "feedback": "Very helpful response",
  "category": "positive"
}
```

### Chat Processing (`/api/v1/chat`)

#### POST `/chat/process`
Process a user message and generate AI response.

**Request:**
```json
{
  "session_id": "session_abc123",
  "message": "What are your trading hours?",
  "context": {
    "customer_tier": "premium",
    "account_type": "trading"
  }
}
```

**Response:**
```json
{
  "response": "Our trading hours are Monday through Friday, 9:30 AM to 4:00 PM Eastern Time.",
  "confidence": 0.95,
  "citations": [
    {
      "source": "trading_policy_v2.1",
      "title": "Trading Hours and Market Schedule",
      "url": "/policies/trading-hours",
      "excerpt": "Standard market hours are 9:30 AM to 4:00 PM ET..."
    }
  ],
  "redactions": [
    {
      "type": "account_number",
      "original": "1234-5678-9012-3456",
      "masked": "****-****-****-3456"
    }
  ],
  "escalation_needed": false,
  "intent": "trading_hours_inquiry",
  "entities": {
    "topic": "trading_hours",
    "urgency": "low"
  }
}
```

### Knowledge Management (`/api/v1/knowledge`)

#### GET `/knowledge/sources`
List all knowledge sources.

#### POST `/knowledge/sources`
Add a new knowledge source.

**Request:**
```json
{
  "name": "Trading Policy v2.1",
  "type": "document",
  "content": "Our trading hours are...",
  "metadata": {
    "category": "policies",
    "effective_date": "2024-01-01",
    "author": "compliance_team"
  }
}
```

#### GET `/knowledge/search`
Search knowledge base.

**Query Parameters:**
- `q`: Search query
- `limit`: Maximum results (default: 10)
- `category`: Filter by category
- `confidence_threshold`: Minimum confidence score

### Tickets (`/api/v1/tickets`)

#### POST `/tickets/create`
Create a support ticket.

**Request:**
```json
{
  "session_id": "session_abc123",
  "title": "Account Access Issue",
  "description": "Unable to log into trading platform",
  "priority": "high",
  "category": "technical_support",
  "customer_id": "customer_789"
}
```

#### GET `/tickets`
List tickets with filtering.

#### PUT `/tickets/{ticket_id}`
Update ticket status.

### Analytics (`/api/v1/analytics`)

#### GET `/analytics/dashboard`
Get dashboard metrics.

**Response:**
```json
{
  "deflection_rate": 0.78,
  "average_response_time": 2.3,
  "customer_satisfaction": 4.2,
  "total_conversations": 1250,
  "escalation_rate": 0.15,
  "top_intents": [
    {"intent": "account_inquiry", "count": 245},
    {"intent": "trading_hours", "count": 189}
  ]
}
```

#### GET `/analytics/conversations`
Get conversation analytics.

#### GET `/analytics/performance`
Get agent performance metrics.

## 🔄 WebSocket Endpoints

### `/ws/chat/{session_id}`
Real-time chat connection for live messaging.

**Message Types:**
- `message`: New message
- `typing`: Typing indicator
- `presence`: User presence
- `escalation`: Agent handoff

## 📊 Data Models

### Session
```typescript
interface Session {
  id: string;
  customer_id: string;
  status: 'active' | 'ended' | 'escalated';
  channel: 'web' | 'mobile' | 'email' | 'chat';
  created_at: string;
  ended_at?: string;
  metadata: Record<string, any>;
}
```

### Message
```typescript
interface Message {
  id: string;
  session_id: string;
  content: string;
  message_type: 'user' | 'bot' | 'system' | 'agent';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  metadata: Record<string, any>;
  citations?: Citation[];
  redactions?: Redaction[];
}
```

### Citation
```typescript
interface Citation {
  source: string;
  title: string;
  url: string;
  excerpt: string;
  confidence: number;
}
```

### Redaction
```typescript
interface Redaction {
  type: 'ssn' | 'account_number' | 'email' | 'phone';
  original: string;
  masked: string;
  position: [number, number];
}
```

## 🚨 Error Responses

### Standard Error Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

### Common Error Codes
- `AUTHENTICATION_ERROR`: Invalid or expired token
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `VALIDATION_ERROR`: Invalid request data
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

## 🔒 Rate Limiting

- **Standard**: 100 requests per minute
- **Chat endpoints**: 50 requests per minute
- **File uploads**: 10 requests per minute

Rate limit headers:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248600
```

## 📝 Pagination

List endpoints support pagination:

**Query Parameters:**
- `page`: Page number (default: 1)
- `size`: Page size (default: 20, max: 100)

**Response Headers:**
```http
X-Total-Count: 1250
X-Page-Count: 63
X-Current-Page: 1
```

## 🔍 Filtering and Sorting

Most list endpoints support filtering and sorting:

**Query Parameters:**
- `filter[status]`: Filter by status
- `filter[created_at]`: Date range filter
- `sort`: Sort field (e.g., `created_at:desc`)
- `search`: Full-text search

## 📄 File Uploads

### POST `/files/upload`
Upload files (documents, images) for knowledge base.

**Content-Type:** `multipart/form-data`

**Form Fields:**
- `file`: File to upload
- `category`: File category
- `metadata`: JSON metadata

## 🔐 Security Headers

All responses include security headers:
```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

This API specification provides a comprehensive interface for building a financial-grade customer support chatbot with proper security, compliance, and scalability considerations.
