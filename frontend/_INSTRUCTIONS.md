# Frontend Development Instructions - HeliosCS

## 🎯 Overview

This directory contains the Next.js 14 frontend application for HeliosCS. The application uses React 18, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🏗️ Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui + custom components
- **State Management**: React Query + Context API
- **Real-time**: WebSocket connections for live chat

## 📁 Directory Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (dashboard)/     # Protected dashboard pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── components/          # Reusable components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── chat/            # Chat-specific components
│   │   ├── forms/           # Form components
│   │   ├── layout/          # Layout components
│   │   └── providers/       # Context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── types/               # TypeScript definitions
│   └── utils/               # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Trust and professionalism
- **Success**: Green (#10B981) - Positive actions
- **Warning**: Yellow (#F59E0B) - Caution states
- **Error**: Red (#EF4444) - Errors and destructive actions
- **Info**: Blue (#06B6D4) - Informational content

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible line heights

### Components
- Use shadcn/ui components as base
- Extend with custom variants for financial-grade styling
- Ensure WCAG 2.1 AA accessibility compliance

## 🔧 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use proper TypeScript interfaces for all props
- Follow ESLint and Prettier configurations

### Component Structure
```typescript
// Component template
interface ComponentProps {
  // Define all props with types
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX with proper accessibility
  )
}
```

### State Management
- Use React Query for server state
- Use Context API for global UI state
- Use local state for component-specific state
- Implement optimistic updates where appropriate

### API Integration
- Use typed API calls with proper error handling
- Implement loading and error states
- Use React Query for caching and synchronization

## 📋 TODO Items

### High Priority
- [ ] **Authentication System**
  - [ ] Login/Register forms
  - [ ] JWT token management
  - [ ] Protected routes
  - [ ] Role-based access control

- [ ] **Chat Widget**
  - [ ] Real-time messaging interface
  - [ ] Message history
  - [ ] Typing indicators
  - [ ] File upload support
  - [ ] Citation display
  - [ ] PII masking controls

- [ ] **Agent Console**
  - [ ] Live chat interface
  - [ ] Customer information panel
  - [ ] Knowledge base integration
  - [ ] Ticket management
  - [ ] Escalation controls

### Medium Priority
- [ ] **Analytics Dashboard**
  - [ ] Performance metrics
  - [ ] Conversation analytics
  - [ ] Deflection rates
  - [ ] Customer satisfaction scores

- [ ] **Knowledge Management**
  - [ ] Document upload interface
  - [ ] Search and filtering
  - [ ] Version control
  - [ ] Approval workflows

- [ ] **Settings & Configuration**
  - [ ] User preferences
  - [ ] System configuration
  - [ ] Integration settings

### Low Priority
- [ ] **Advanced Features**
  - [ ] Dark mode toggle
  - [ ] Internationalization
  - [ ] Advanced filtering
  - [ ] Export functionality

## 🔒 Security Considerations

- Implement proper input validation
- Sanitize user inputs
- Use HTTPS in production
- Implement proper CORS policies
- Secure WebSocket connections
- Mask PII data appropriately

## ♿ Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management
- ARIA labels and roles

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interfaces
- Optimized for various screen sizes

## 🧪 Testing Strategy

- Unit tests for components
- Integration tests for user flows
- E2E tests for critical paths
- Accessibility testing
- Performance testing

## 🚀 Performance Optimization

- Code splitting with dynamic imports
- Image optimization
- Bundle size monitoring
- Lazy loading for non-critical components
- Caching strategies

## 📦 Dependencies

### Core
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### UI Components
- shadcn/ui
- Lucide React (icons)
- Framer Motion (animations)

### Data Management
- React Query
- Zod (validation)
- React Hook Form

### Real-time
- Socket.io Client
- WebSocket API

## 🔄 Development Workflow

1. **Setup**: `npm install`
2. **Development**: `npm run dev`
3. **Build**: `npm run build`
4. **Lint**: `npm run lint`
5. **Type Check**: `npm run type-check`

## 📝 Notes for Claude

When implementing features:
1. Follow the established patterns and conventions
2. Use the provided design system
3. Ensure accessibility compliance
4. Add proper TypeScript types
5. Include error handling
6. Test on multiple screen sizes
7. Consider performance implications
8. Follow security best practices

Remember: This is a financial-grade application where trust, security, and compliance are paramount.
