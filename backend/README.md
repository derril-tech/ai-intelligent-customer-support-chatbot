# HeliosCS Backend

FastAPI backend application for the HeliosCS Intelligent Customer Support Chatbot.

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- PostgreSQL 14+ with pgvector extension
- Redis 6+
- Virtual environment (recommended)

### Installation

1. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your configuration
```

4. Set up database:
```bash
# Create PostgreSQL database with pgvector extension
createdb helioscs
psql helioscs -c "CREATE EXTENSION IF NOT EXISTS vector;"

# Run migrations (when available)
alembic upgrade head
```

5. Start the development server:
```bash
uvicorn main:app --reload
```

6. API will be available at [http://localhost:8000](http://localhost:8000)
7. API documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

## 📁 Project Structure

```
app/
├── api/                 # API endpoints and routers
│   └── v1/              # API version 1
│       ├── endpoints/   # Individual endpoint modules
│       └── api.py       # Main API router
├── core/                # Core application configuration
│   ├── config.py        # Settings and environment variables
│   ├── database.py      # Database configuration
│   ├── security.py      # Authentication and authorization
│   └── logging.py       # Logging configuration
├── models/              # SQLAlchemy database models
├── schemas/             # Pydantic data validation schemas
├── services/            # Business logic services
│   ├── ai/              # AI/LLM integration services
│   ├── chat/            # Chat orchestration services
│   ├── compliance/      # Compliance and redaction services
│   ├── knowledge/       # Knowledge management services
│   └── analytics/       # Analytics and reporting services
├── utils/               # Utility functions
└── workers/             # Background task workers
```

## 🏗️ Architecture

- **Framework**: FastAPI with async support
- **Database**: PostgreSQL with pgvector for vector embeddings
- **ORM**: SQLAlchemy 2.0 (async)
- **AI**: LangGraph + LangChain + OpenAI/Claude
- **Caching**: Redis
- **Background Tasks**: Celery
- **Validation**: Pydantic v2

## 🔧 Available Scripts

- `uvicorn main:app --reload` - Start development server
- `pytest` - Run tests
- `black .` - Format code
- `isort .` - Sort imports
- `flake8` - Lint code
- `mypy .` - Type checking

## 🔒 Security Features

- JWT authentication
- Role-based access control (RBAC)
- PII detection and redaction
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Audit logging

## 🤖 AI Integration

The backend integrates with multiple AI providers:

- **OpenAI**: GPT-4 for response generation
- **Anthropic**: Claude for complex reasoning
- **LangGraph**: Conversation orchestration
- **LangChain**: RAG and tool integration
- **pgvector**: Vector similarity search

### LangGraph Flow

1. **Intent Detection** - Classify user intent
2. **Context Retrieval** - Get relevant information
3. **Response Generation** - Generate AI response
4. **Compliance Check** - Validate compliance
5. **PII Redaction** - Mask sensitive data
6. **Response Delivery** - Send to user
7. **Escalation Check** - Determine if human needed
8. **Audit Logging** - Log all interactions

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

## 🔄 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/logout` - User logout

### Sessions
- `POST /api/v1/sessions/create` - Create session
- `GET /api/v1/sessions/{session_id}` - Get session
- `PUT /api/v1/sessions/{session_id}/end` - End session

### Messages
- `POST /api/v1/messages/send` - Send message
- `GET /api/v1/messages/{session_id}` - Get messages
- `POST /api/v1/messages/{message_id}/feedback` - Provide feedback

### Knowledge
- `GET /api/v1/knowledge/sources` - List sources
- `POST /api/v1/knowledge/sources` - Add source
- `GET /api/v1/knowledge/search` - Search knowledge

### Analytics
- `GET /api/v1/analytics/dashboard` - Dashboard metrics
- `GET /api/v1/analytics/conversations` - Conversation analytics
- `GET /api/v1/analytics/performance` - Performance metrics

## 📈 Performance Optimization

- Database query optimization
- Redis caching strategy
- Background task processing
- Connection pooling
- Response compression
- CDN integration

## 🧪 Testing

- Unit tests for services
- Integration tests for APIs
- Database migration tests
- Performance testing
- Security testing
- Load testing

## 📝 Development Guidelines

1. Follow async/await patterns
2. Use proper error handling
3. Implement comprehensive logging
4. Add proper type hints
5. Include input validation
6. Consider security implications
7. Add appropriate tests
8. Document API endpoints

## 🚀 Deployment

The application can be deployed to:

- **Vercel**: Serverless deployment
- **Render**: Platform as a Service
- **AWS**: ECS, Lambda, or EC2
- **Docker**: Containerized deployment
- **Kubernetes**: Orchestrated deployment

## 📄 License

This project is part of the HeliosCS Intelligent Customer Support Chatbot.
