# Services Development Instructions - HeliosCS

## 🎯 Overview

This directory contains all business logic services for the HeliosCS backend application. Services are organized by domain and handle the core functionality of the system.

## 📁 Directory Structure

```
services/
├── ai/              # AI/LLM integration services
├── chat/            # Chat orchestration services
├── compliance/      # Compliance and redaction services
├── knowledge/       # Knowledge management services
└── analytics/       # Analytics and reporting services
```

## 🔧 Development Guidelines

### Service Structure
- Use async/await patterns
- Implement proper error handling
- Use structured logging
- Add comprehensive type hints
- Follow dependency injection patterns

### Error Handling
- Use custom exception classes
- Log errors with context
- Return meaningful error messages
- Implement retry logic where appropriate

### Performance
- Use connection pooling
- Implement caching strategies
- Optimize database queries
- Use background tasks for heavy operations

## 📋 TODO Items

### High Priority
- [ ] **AI Services** (`ai/`)
  - [ ] `OpenAIService` - OpenAI API integration
  - [ ] `ClaudeService` - Anthropic Claude integration
  - [ ] `EmbeddingService` - Vector embeddings
  - [ ] `RAGService` - Retrieval Augmented Generation
  - [ ] `IntentService` - Intent classification

- [ ] **Chat Services** (`chat/`)
  - [ ] `ChatOrchestrator` - LangGraph conversation flow
  - [ ] `MessageProcessor` - Message handling and routing
  - [ ] `SessionManager` - Session lifecycle management
  - [ ] `EscalationService` - Human handoff logic
  - [ ] `WebSocketService` - Real-time messaging

- [ ] **Compliance Services** (`compliance/`)
  - [ ] `PIIRedactionService` - PII detection and masking
  - [ ] `ComplianceChecker` - Regulatory compliance validation
  - [ ] `AuditService` - Audit trail management
  - [ ] `PolicyService` - Policy enforcement

### Medium Priority
- [ ] **Knowledge Services** (`knowledge/`)
  - [ ] `DocumentProcessor` - Document ingestion pipeline
  - [ ] `VectorService` - Vector database operations
  - [ ] `SearchService` - Knowledge search and retrieval
  - [ ] `VersionControlService` - Document versioning

- [ ] **Analytics Services** (`analytics/`)
  - [ ] `MetricsService` - Performance metrics calculation
  - [ ] `ReportingService` - Report generation
  - [ ] `DashboardService` - Dashboard data aggregation
  - [ ] `ExportService` - Data export functionality

### Low Priority
- [ ] **Advanced Services**
  - [ ] `NotificationService` - Email/SMS notifications
  - [ ] `FileStorageService` - File upload/download
  - [ ] `IntegrationService` - Third-party integrations

## 🤖 AI Integration

### LangGraph Flow
1. **Intent Detection** - Classify user intent
2. **Context Retrieval** - Get relevant information
3. **Response Generation** - Generate AI response
4. **Compliance Check** - Validate compliance
5. **PII Redaction** - Mask sensitive data
6. **Response Delivery** - Send to user
7. **Escalation Check** - Determine if human needed
8. **Audit Logging** - Log all interactions

### RAG Implementation
- Document chunking and embedding
- Vector similarity search
- Context window management
- Citation tracking
- Confidence scoring

## 🔒 Security & Compliance

### PII Redaction
- SSN detection and masking
- Credit card number masking
- Email and phone masking
- Address detection
- Custom pattern matching

### Audit Logging
- Complete audit trail
- User action tracking
- Data access logging
- Compliance reporting
- Export capabilities

## 📊 Performance Optimization

### Caching Strategy
- Redis for session data
- Vector cache for embeddings
- Response caching
- Query result caching

### Database Optimization
- Connection pooling
- Query optimization
- Index management
- Read replicas

## 🧪 Testing

### Unit Tests
- Service method testing
- Mock external dependencies
- Error scenario testing
- Performance testing

### Integration Tests
- API endpoint testing
- Database integration
- External service integration
- End-to-end workflows

## 📝 Notes for Claude

When implementing services:
1. Follow async/await patterns
2. Use proper error handling
3. Implement comprehensive logging
4. Add proper type hints
5. Include input validation
6. Consider security implications
7. Add appropriate tests
8. Document service interfaces

Remember: This is a financial-grade application where security, compliance, and reliability are critical.
