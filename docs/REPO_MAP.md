# Repository Map - HeliosCS

This document provides a comprehensive overview of the HeliosCS repository structure, explaining the purpose and organization of each directory and file.

## 📁 Root Directory Structure

```
ai-intelligent-customer-support-chatbot/
├── frontend/                 # Next.js 14 React frontend application
├── backend/                  # FastAPI Python backend application
├── docs/                     # Project documentation
├── PROJECT_BRIEF            # Detailed project requirements and specifications
├── PROMPT_DECLARATION       # Claude prompt engineering specifications
└── README.md                # Main project readme
```

## 🎨 Frontend (`frontend/`)

### Core Structure
```
frontend/
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   │   ├── (auth)/          # Authentication pages (login, register)
│   │   ├── (dashboard)/     # Protected dashboard pages
│   │   │   ├── agent/       # Agent console interface
│   │   │   ├── analytics/   # Analytics and reporting
│   │   │   ├── chat/        # Chat widget interface
│   │   │   ├── knowledge/   # Knowledge management
│   │   │   ├── settings/    # Application settings
│   │   │   └── tickets/     # Ticket management
│   │   ├── globals.css      # Global styles and Tailwind config
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Landing page
│   ├── components/          # Reusable React components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── chat/            # Chat-specific components
│   │   ├── forms/           # Form components
│   │   ├── layout/          # Layout components
│   │   └── providers/       # Context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries and configurations
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── postcss.config.js        # PostCSS configuration
```

### Key Frontend Features
- **Next.js 14 App Router**: Modern routing with server components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling with custom design system
- **shadcn/ui**: High-quality component library
- **React Query**: Server state management
- **WebSocket Support**: Real-time chat functionality
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance

## 🐍 Backend (`backend/`)

### Core Structure
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
├── requirements.txt         # Python dependencies
└── Dockerfile               # Container configuration
```

### Key Backend Features
- **FastAPI**: Modern, fast web framework
- **SQLAlchemy 2.0**: Async ORM with PostgreSQL
- **pgvector**: Vector database for embeddings
- **LangGraph**: AI conversation orchestration
- **LangChain**: RAG and tool integration
- **Redis**: Caching and session storage
- **Celery**: Background task processing
- **Pydantic**: Data validation and serialization

## 📚 Documentation (`docs/`)

```
docs/
├── REPO_MAP.md              # This file - repository structure guide
├── API_SPEC.md              # API endpoint specifications
├── CLAUDE.md                # Claude AI collaboration guidelines
└── DEPLOYMENT.md            # Deployment instructions
```

## 🔧 Configuration Files

### Environment Variables
- **Frontend**: `.env.local` for Next.js environment variables
- **Backend**: `.env` for Python environment variables
- **Development**: `.env.example` files for both frontend and backend

### Key Configuration Areas
- **Database**: PostgreSQL connection and pgvector setup
- **AI Providers**: OpenAI and Anthropic API keys
- **Security**: JWT secrets, CORS settings, rate limiting
- **Storage**: File storage configuration (local/S3/GCS)
- **Monitoring**: Sentry, Prometheus, logging settings

## 🚀 Development Workflow

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.11+ and pip
- PostgreSQL 14+ with pgvector extension
- Redis 6+

### Development Commands
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Database
alembic upgrade head
```

## 📋 TODO Markers

Throughout the codebase, you'll find TODO markers indicating areas that need implementation:

- `TODO: Implement authentication flow`
- `TODO: Add WebSocket chat functionality`
- `TODO: Implement RAG retrieval`
- `TODO: Add compliance filters`
- `TODO: Create analytics dashboard`

## 🎯 Claude Instructions

Each major directory contains `_INSTRUCTIONS.md` files with specific guidance for Claude:

- `frontend/_INSTRUCTIONS.md`: Frontend development guidelines
- `backend/_INSTRUCTIONS.md`: Backend development guidelines
- `frontend/src/components/_INSTRUCTIONS.md`: Component development rules
- `backend/app/services/_INSTRUCTIONS.md`: Service layer implementation

## 🔒 Security & Compliance

- **PII Redaction**: Automatic detection and masking of sensitive data
- **Audit Logging**: Complete audit trail for all interactions
- **Role-Based Access**: RBAC for different user types
- **Rate Limiting**: API rate limiting and abuse prevention
- **Data Encryption**: At-rest and in-transit encryption

## 📊 Monitoring & Observability

- **Structured Logging**: JSON-formatted logs with correlation IDs
- **Metrics**: Prometheus metrics for performance monitoring
- **Error Tracking**: Sentry integration for error monitoring
- **Health Checks**: Comprehensive health check endpoints

This repository structure provides a solid foundation for building a production-ready, financial-grade customer support chatbot with clear separation of concerns and comprehensive documentation.
