# HeliosCS - Intelligent Customer Support Chatbot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-blue)](https://www.python.org/)

**HeliosCS** is a financial-grade customer support chatbot engineered for banks, brokerages, and fintechs. It resolves client queries across channels (web, mobile, email, chat) with compliant, auditable answers grounded in internal policies, product docs, and account context.

## 🚀 Features

- **Multi-Channel Support**: Web, mobile, email, and chat integration
- **AI-Powered Responses**: RAG-based answers with citations and confidence scoring
- **Compliance & Security**: PII redaction, audit trails, and regulatory compliance
- **Agent Collaboration**: Seamless escalation with full conversation context
- **Analytics & Insights**: Deflection rates, CSAT scores, and performance metrics
- **Knowledge Management**: Centralized policy docs, FAQs, and product information

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom financial-grade design system
- **Components**: shadcn/ui + custom components
- **State Management**: React Query + Context API
- **Real-time**: WebSocket connections for live chat
- **Accessibility**: WCAG 2.1 AA compliance

### Backend
- **Framework**: FastAPI with async support
- **Language**: Python 3.11+
- **Database**: PostgreSQL with pgvector extension
- **ORM**: SQLAlchemy 2.0 (async)
- **AI**: LangGraph + LangChain + OpenAI/Claude
- **Caching**: Redis
- **Background Tasks**: Celery
- **Validation**: Pydantic v2

### AI Integration
- **LangGraph Flow**: Intent → Retrieve → Draft → Redact → ComplyCheck → Answer → Handoff → Log/Audit
- **RAG Implementation**: Vector embeddings, similarity search, citation tracking
- **Compliance**: PII detection, regulatory validation, prohibited content blocking
- **Security**: Multi-tenant isolation, role-based access control

## 📋 Prerequisites

- **Node.js** 18+ and npm/yarn
- **Python** 3.11+ and pip
- **PostgreSQL** 14+ with pgvector extension
- **Redis** 6+
- **Git** for version control

## 🚀 Quick Start

### Option 1: Using Development Script (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd ai-intelligent-customer-support-chatbot

# Run the development script
./scripts/dev.sh
```

### Option 2: Manual Setup

#### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev
```

#### Backend Setup
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your configuration
uvicorn main:app --reload
```

### Environment Configuration

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
NEXT_PUBLIC_AUTH_ENABLED=true
```

#### Backend (.env)
```env
DATABASE_URL=postgresql+asyncpg://user:password@localhost/helioscs
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key
SECRET_KEY=your-secret-key-change-in-production
```

## 📁 Project Structure

```
ai-intelligent-customer-support-chatbot/
├── frontend/                 # Next.js 14 React frontend
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── components/      # React components
│   │   ├── lib/             # Utility libraries
│   │   ├── types/           # TypeScript definitions
│   │   └── hooks/           # Custom React hooks
│   ├── package.json         # Frontend dependencies
│   └── README.md            # Frontend documentation
├── backend/                  # FastAPI Python backend
│   ├── app/
│   │   ├── api/             # API endpoints
│   │   ├── core/            # Core configuration
│   │   ├── models/          # Database models
│   │   ├── services/        # Business logic
│   │   └── utils/           # Utility functions
│   ├── requirements.txt     # Python dependencies
│   └── README.md            # Backend documentation
├── docs/                     # Project documentation
│   ├── REPO_MAP.md          # Repository structure
│   ├── API_SPEC.md          # API specifications
│   ├── CLAUDE.md            # Claude AI collaboration guide
│   └── PROMPT_DECLARATION.md # Claude prompt declaration
├── scripts/                  # Development scripts
│   └── dev.sh               # Development environment script
├── PROJECT_BRIEF            # Project requirements
├── PROMPT_DECLARATION       # Claude prompt engineering
└── README.md                # This file
```

## 🔧 Development

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

#### Backend
```bash
uvicorn main:app --reload    # Start development server
pytest                       # Run tests
black .                      # Format code
isort .                      # Sort imports
flake8                       # Lint code
mypy .                       # Type checking
```

### Database Setup

```bash
# Create PostgreSQL database
createdb helioscs

# Enable pgvector extension
psql helioscs -c "CREATE EXTENSION IF NOT EXISTS vector;"

# Run migrations (when available)
alembic upgrade head
```

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test              # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run test:coverage # Run tests with coverage
```

### Backend Testing
```bash
cd backend
pytest                # Run all tests
pytest -v            # Run tests with verbose output
pytest --cov         # Run tests with coverage
pytest tests/        # Run specific test directory
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
cd frontend
vercel
```

### Backend Deployment (Render)
```bash
# Connect your repository to Render
# Configure environment variables
# Deploy automatically on push to main branch
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📊 Monitoring & Observability

- **Structured Logging**: JSON-formatted logs with correlation IDs
- **Metrics**: Prometheus metrics for performance monitoring
- **Error Tracking**: Sentry integration for error monitoring
- **Health Checks**: Comprehensive health check endpoints

## 🔒 Security & Compliance

- **PII Redaction**: Automatic detection and masking of sensitive data
- **Audit Logging**: Complete audit trail for all interactions
- **Role-Based Access**: RBAC for different user types
- **Rate Limiting**: API rate limiting and abuse prevention
- **Data Encryption**: At-rest and in-transit encryption

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the established coding conventions
- Add tests for new features
- Update documentation
- Ensure accessibility compliance
- Test on multiple screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `docs/` directory for detailed documentation
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Discussions**: Join the conversation in GitHub Discussions

## 🎯 Roadmap

- [ ] Authentication system with JWT and RBAC
- [ ] Real-time chat widget with WebSocket
- [ ] Agent console with live chat interface
- [ ] AI integration with LangGraph and RAG
- [ ] Knowledge management system
- [ ] Analytics dashboard
- [ ] Compliance features and audit logging
- [ ] Comprehensive test coverage
- [ ] Production deployment configuration

---

**Built with ❤️ for the financial industry**
