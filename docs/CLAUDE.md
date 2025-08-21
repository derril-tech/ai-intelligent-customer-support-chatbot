# Claude AI Collaboration Guide - HeliosCS

## 🎯 Project Overview

**HeliosCS** is a financial-grade customer support chatbot engineered for banks, brokerages, and fintechs. It resolves client queries across channels (web, mobile, email, chat) with compliant, auditable answers grounded in internal policies, product docs, and account context. The bot escalates seamlessly to live agents, creates tickets, and logs every interaction for QA and regulatory review.

**Tech Stack**: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS + shadcn/ui (Frontend) | FastAPI + Python 3.11 + SQLAlchemy 2.0 + PostgreSQL + pgvector + Redis (Backend) | LangGraph + LangChain + OpenAI/Claude (AI)

**Target Users**: Financial institutions requiring compliant, auditable customer support automation with human escalation capabilities.

## 📁 Folder & File Structure

### ✅ **DO NOT TOUCH** (Infrastructure Files)
- `PROJECT_BRIEF` - Project requirements and specifications
- `PROMPT_DECLARATION` - Claude prompt engineering specifications
- `docs/REPO_MAP.md` - Repository structure documentation
- `docs/API_SPEC.md` - API specifications
- `frontend/_INSTRUCTIONS.md` - Frontend development guidelines
- `backend/_INSTRUCTIONS.md` - Backend development guidelines
- `frontend/src/components/_INSTRUCTIONS.md` - Component development guidelines
- `backend/app/services/_INSTRUCTIONS.md` - Service development guidelines
- Configuration files: `package.json`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `requirements.txt`, `main.py`, `config.py`, `database.py`, `api.py`
- Environment templates: `frontend/.env.example`, `backend/.env.example`

### ✅ **EDITABLE** (Implementation Files)
- `frontend/src/app/` - Next.js pages and routes
- `frontend/src/components/` - React components (except `_INSTRUCTIONS.md`)
- `frontend/src/lib/` - Utility libraries and configurations
- `frontend/src/types/` - TypeScript type definitions
- `frontend/src/hooks/` - Custom React hooks
- `backend/app/models/` - SQLAlchemy database models
- `backend/app/schemas/` - Pydantic data validation schemas
- `backend/app/services/` - Business logic services (except `_INSTRUCTIONS.md`)
- `backend/app/api/v1/endpoints/` - API endpoint implementations
- `backend/app/utils/` - Utility functions

### ✅ **CREATE NEW** (Missing Implementation)
- Authentication system (JWT, RBAC)
- Chat widget components
- Agent console interface
- Knowledge management system
- Analytics dashboard
- AI integration services
- WebSocket real-time messaging
- PII redaction and compliance filters

## 🔧 Coding Conventions

### Frontend (TypeScript/React)
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files
- **Components**: Functional components with hooks, proper TypeScript interfaces
- **Styling**: Tailwind CSS with custom design system, mobile-first approach
- **State**: React Query for server state, Context API for global UI state
- **Accessibility**: WCAG 2.1 AA compliance, proper ARIA labels, keyboard navigation

### Backend (Python/FastAPI)
- **Naming**: snake_case for functions/variables, PascalCase for classes
- **Async**: Use async/await patterns for all I/O operations
- **Type Hints**: Comprehensive type hints for all functions
- **Error Handling**: Custom exception classes, structured logging
- **Documentation**: Docstrings for all public functions and classes

### General
- **Comments**: Clear, concise comments explaining complex logic
- **Error Messages**: User-friendly, actionable error messages
- **Logging**: Structured logging with appropriate log levels
- **Testing**: Unit tests for business logic, integration tests for APIs

## 🤖 AI Collaboration Rules

### Response Format
1. **Analysis**: Understand the request and context
2. **Implementation**: Provide complete, working code
3. **Explanation**: Brief explanation of key decisions
4. **Next Steps**: Suggest what to implement next

### Edit Rules
- **Full Files**: Provide complete file content for new implementations
- **Patches**: Use clear context for modifications to existing files
- **Dependencies**: Include all necessary imports and dependencies
- **Error Handling**: Always include proper error handling
- **Security**: Consider security implications for all changes

### Ambiguity Handling
- **Ask for Clarification**: If requirements are unclear, ask specific questions
- **Provide Options**: When multiple approaches exist, explain trade-offs
- **Default to Secure**: Choose the most secure option when in doubt
- **Follow Patterns**: Maintain consistency with existing code patterns

## 📦 Dependencies & Setup

### Frontend Dependencies
- **Core**: Next.js 14, React 18, TypeScript
- **UI**: Tailwind CSS, shadcn/ui, Lucide React
- **State**: React Query, React Hook Form
- **Validation**: Zod schemas
- **Real-time**: Socket.io Client
- **Charts**: Recharts for analytics

### Backend Dependencies
- **Core**: FastAPI, SQLAlchemy 2.0, Pydantic v2
- **Database**: PostgreSQL with pgvector, Redis
- **AI**: LangGraph, LangChain, OpenAI, Anthropic
- **Security**: Python-Jose, Passlib, Cryptography
- **Background**: Celery, Redis
- **Monitoring**: Sentry, Prometheus

### Environment Variables
- **Frontend**: API URLs, feature flags, WebSocket URLs
- **Backend**: Database URLs, API keys, security secrets, Redis URLs

## 🔄 Workflow & Tools

### Development Setup
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### FE/BE Boundary
- **Frontend**: UI components, state management, API calls
- **Backend**: Business logic, database operations, AI integration
- **API**: RESTful endpoints with proper authentication
- **WebSocket**: Real-time chat functionality

### Deployment
- **Frontend**: Vercel (recommended) or any static hosting
- **Backend**: Render, Railway, or containerized deployment
- **Database**: Managed PostgreSQL with pgvector extension
- **Redis**: Managed Redis for caching and sessions

## 🧠 Contextual Knowledge

### Financial Industry Requirements
- **Compliance**: PII redaction, audit trails, regulatory compliance
- **Security**: Multi-tenant isolation, role-based access control
- **Reliability**: High availability, data consistency, error recovery
- **Performance**: Fast response times, efficient resource usage

### AI Integration Patterns
- **LangGraph Flow**: Intent → Retrieve → Draft → Redact → ComplyCheck → Answer → Handoff → Log/Audit
- **RAG Implementation**: Vector embeddings, similarity search, citation tracking
- **Compliance Filters**: PII detection, regulatory validation, prohibited content blocking
- **Escalation Logic**: Confidence scoring, human handoff triggers

### Business Logic
- **Multi-tenancy**: Tenant isolation, shared resources
- **Session Management**: Conversation context, user state
- **Ticket System**: Support ticket creation, assignment, tracking
- **Analytics**: Performance metrics, deflection rates, customer satisfaction

## 📝 Examples

### ✅ Good AI Answer
```typescript
// Complete component with proper types, error handling, and accessibility
interface ChatMessageProps {
  message: Message;
  onReply?: (messageId: string) => void;
}

export function ChatMessage({ message, onReply }: ChatMessageProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleReply = async () => {
    if (!onReply) return;
    setIsLoading(true);
    try {
      await onReply(message.id);
    } catch (error) {
      console.error('Failed to reply:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-message" role="article" aria-label={`Message from ${message.message_type}`}>
      <div className="message-content">
        {message.content}
      </div>
      {message.citations && (
        <div className="citations">
          {message.citations.map((citation, index) => (
            <CitationDisplay key={index} citation={citation} />
          ))}
        </div>
      )}
      {onReply && (
        <Button 
          onClick={handleReply} 
          disabled={isLoading}
          aria-label="Reply to message"
        >
          {isLoading ? 'Replying...' : 'Reply'}
        </Button>
      )}
    </div>
  );
}
```

### ❌ Bad AI Answer
```typescript
// Incomplete, no error handling, no accessibility, no types
function ChatMessage(message) {
  return (
    <div>
      {message.content}
      <button onClick={() => onReply(message.id)}>Reply</button>
    </div>
  );
}
```

## 🎯 Success Criteria

### Technical Requirements
- **Performance**: < 2s response time for chat messages
- **Reliability**: 99.9% uptime, proper error handling
- **Security**: PII protection, authentication, authorization
- **Compliance**: Audit trails, regulatory compliance

### User Experience
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design, touch-friendly
- **Intuitive**: Clear navigation, helpful error messages
- **Fast**: Optimistic updates, loading states

### Business Goals
- **Deflection Rate**: > 70% automated resolution
- **Customer Satisfaction**: > 4.0/5 rating
- **Response Time**: < 30s average first response
- **Compliance**: 100% audit trail coverage

## 🚀 Next Steps

1. **Authentication System**: Implement JWT-based auth with RBAC
2. **Chat Widget**: Build the customer-facing chat interface
3. **Agent Console**: Create the support agent dashboard
4. **AI Integration**: Wire up LangGraph flow and RAG services
5. **Knowledge Management**: Build document ingestion and search
6. **Analytics Dashboard**: Implement performance metrics
7. **Compliance Features**: Add PII redaction and audit logging
8. **Testing**: Comprehensive test coverage
9. **Deployment**: Production-ready deployment configuration

Remember: This is a financial-grade application where security, compliance, and reliability are paramount. Always prioritize these aspects in your implementations.



