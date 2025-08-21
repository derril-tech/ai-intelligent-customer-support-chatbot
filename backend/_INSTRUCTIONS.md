# Backend Development Instructions - HeliosCS

## 🎯 Overview

This directory contains the FastAPI backend application for HeliosCS. The application uses Python 3.11+, SQLAlchemy 2.0, LangGraph, and integrates with OpenAI/Claude for AI-powered responses.

## 🏗️ Architecture

- **Framework**: FastAPI with async support
- **Language**: Python 3.11+
- **Database**: PostgreSQL with pgvector extension
- **ORM**: SQLAlchemy 2.0 (async)
- **AI**: LangGraph + LangChain + OpenAI/Claude
- **Caching**: Redis
- **Background Tasks**: Celery
- **Validation**: Pydantic v2

## 📁 Directory Structure

```
backend/
├── app/
│   ├── api/                 # API endpoints and routers
│   │   └── v1/              # API version 1
│   │       ├── endpoints/   # Individual endpoint modules
│   │       └── api.py       # Main API router
│   ├── core/                # Core application configuration
│   │   ├── config.py        # Settings and environment variables
│   │   ├── database.py      # Database configuration
│   │   ├── security.py      # Authentication and authorization
│   │   └── logging.py       # Logging configuration
│   ├── models/              # SQLAlchemy database models
│   ├── schemas/             # Pydantic data validation schemas
│   ├── services/            # Business logic services
│   │   ├── ai/              # AI/LLM integration services
│   │   ├── chat/            # Chat orchestration services
│   │   ├── compliance/      # Compliance and redaction services
│   │   ├── knowledge/       # Knowledge management services
│   │   └── analytics/       # Analytics and reporting services
│   ├── utils/               # Utility functions
│   └── workers/             # Background task workers
├── alembic/                 # Database migrations
├── tests/                   # Test suite
├── main.py                  # FastAPI application entry point
└── requirements.txt         # Python dependencies
```

## 🔧 Development Guidelines

### Code Style
- Follow PEP 8 with Black formatting
- Use type hints for all functions
- Use async/await for I/O operations
- Implement proper error handling
- Use structured logging

### API Design
- RESTful API design principles
- Consistent error responses
- Proper HTTP status codes
- Input validation with Pydantic
- Rate limiting and security headers

### Database Design
- Use async SQLAlchemy 2.0
- Implement proper relationships
- Use migrations for schema changes
- Optimize queries for performance
- Implement soft deletes where appropriate

### Security
- JWT authentication
- Role-based access control (RBAC)
- Input sanitization
- SQL injection prevention
- XSS protection
- CORS configuration

## 📋 TODO Items

### High Priority
- [ ] **Authentication & Authorization**
  - [ ] JWT token implementation
  - [ ] User registration/login
  - [ ] Role-based access control
  - [ ] Password hashing and validation
  - [ ] Session management

- [ ] **Database Models**
  - [ ] User and tenant models
  - [ ] Session and message models
  - [ ] Knowledge source models
  - [ ] Ticket and audit models
  - [ ] Analytics models

- [ ] **AI Integration**
  - [ ] LangGraph conversation flow
  - [ ] RAG implementation with pgvector
  - [ ] OpenAI/Claude integration
  - [ ] Intent classification
  - [ ] Response generation

- [ ] **Chat Processing**
  - [ ] Message handling endpoints
  - [ ] Real-time WebSocket support
  - [ ] Conversation context management
  - [ ] Escalation logic
  - [ ] Feedback collection

### Medium Priority
- [ ] **Knowledge Management**
  - [ ] Document ingestion pipeline
  - [ ] Vector embedding generation
  - [ ] Search and retrieval
  - [ ] Version control
  - [ ] Approval workflows

- [ ] **Compliance & Security**
  - [ ] PII detection and redaction
  - [ ] Audit logging
  - [ ] Data encryption
  - [ ] Compliance filters
  - [ ] Regulatory reporting

- [ ] **Analytics & Reporting**
  - [ ] Conversation analytics
  - [ ] Performance metrics
  - [ ] Deflection tracking
  - [ ] Customer satisfaction
  - [ ] Export functionality

### Low Priority
- [ ] **Advanced Features**
  - [ ] Multi-language support
  - [ ] Advanced search filters
  - [ ] Custom integrations
  - [ ] Advanced analytics
  - [ ] Machine learning models

## 🔒 Security Requirements

### Authentication
- Secure JWT implementation
- Token refresh mechanism
- Password complexity requirements
- Account lockout policies
- Multi-factor authentication (future)

### Data Protection
- PII detection and masking
- Data encryption at rest
- Secure data transmission
- Access logging
- Data retention policies

### API Security
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CORS configuration

## 📊 Database Schema

### Core Tables
- `tenants` - Multi-tenant support
- `users` - User accounts and roles
- `customers` - Customer information
- `sessions` - Chat sessions
- `messages` - Conversation messages
- `threads` - Message threading
- `tickets` - Support tickets
- `knowledge_sources` - Knowledge base
- `chunks` - Vector embeddings
- `redaction_rules` - PII redaction rules
- `policies` - Compliance policies
- `audits` - Audit trail
- `analytics` - Analytics data

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

## 📈 Performance Optimization

- Database query optimization
- Redis caching strategy
- Background task processing
- Connection pooling
- Response compression
- CDN integration

## 🧪 Testing Strategy

- Unit tests for services
- Integration tests for APIs
- Database migration tests
- Performance testing
- Security testing
- Load testing

## 📝 API Documentation

- OpenAPI/Swagger documentation
- Postman collections
- Example requests/responses
- Error code documentation
- Rate limiting documentation

## 🔄 Development Workflow

1. **Setup**: `pip install -r requirements.txt`
2. **Database**: `alembic upgrade head`
3. **Development**: `uvicorn main:app --reload`
4. **Testing**: `pytest`
5. **Linting**: `black . && isort . && flake8`

## 📦 Key Dependencies

### Core
- FastAPI
- SQLAlchemy 2.0
- Pydantic v2
- PostgreSQL + pgvector

### AI/ML
- LangGraph
- LangChain
- OpenAI
- Anthropic
- Sentence Transformers

### Infrastructure
- Redis
- Celery
- Alembic
- Uvicorn

### Security
- Python-Jose
- Passlib
- Cryptography

## 📝 Notes for Claude

When implementing features:
1. Follow async/await patterns
2. Use proper error handling
3. Implement comprehensive logging
4. Add proper type hints
5. Include input validation
6. Consider security implications
7. Add appropriate tests
8. Document API endpoints

Remember: This is a financial-grade application where security, compliance, and reliability are critical.
