# Components Development Instructions - HeliosCS

## 🎯 Overview

This directory contains all React components for the HeliosCS frontend application. Components are organized by functionality and follow a consistent pattern.

## 📁 Directory Structure

```
components/
├── ui/              # shadcn/ui base components (Button, Card, etc.)
├── chat/            # Chat-specific components (MessageList, ChatInput, etc.)
├── forms/           # Form components (LoginForm, TicketForm, etc.)
├── layout/          # Layout components (Header, Sidebar, etc.)
└── providers/       # Context providers (AuthProvider, etc.)
```

## 🔧 Development Guidelines

### Component Structure
- Use TypeScript for all components
- Follow functional component pattern with hooks
- Use proper prop interfaces
- Implement proper error boundaries
- Add loading states where appropriate

### Styling
- Use Tailwind CSS for styling
- Follow the established design system
- Ensure responsive design
- Maintain accessibility standards

### State Management
- Use React Query for server state
- Use Context API for global UI state
- Use local state for component-specific state
- Implement optimistic updates where appropriate

## 📋 TODO Items

### High Priority
- [ ] **Chat Components**
  - [ ] `MessageList` - Display conversation messages
  - [ ] `ChatInput` - Message input with file upload
  - [ ] `MessageBubble` - Individual message display
  - [ ] `CitationDisplay` - Show knowledge citations
  - [ ] `PIIIndicator` - Show PII redaction status

- [ ] **Form Components**
  - [ ] `LoginForm` - User authentication
  - [ ] `TicketForm` - Create support tickets
  - [ ] `KnowledgeForm` - Add/edit knowledge sources
  - [ ] `SearchForm` - Advanced search interface

- [ ] **Layout Components**
  - [ ] `Header` - Main navigation header
  - [ ] `Sidebar` - Navigation sidebar
  - [ ] `Footer` - Application footer
  - [ ] `PageLayout` - Standard page wrapper

### Medium Priority
- [ ] **Analytics Components**
  - [ ] `MetricsCard` - Display key metrics
  - [ ] `ChartComponent` - Data visualization
  - [ ] `PerformanceTable` - Agent performance data

- [ ] **Knowledge Components**
  - [ ] `KnowledgeList` - Display knowledge sources
  - [ ] `SearchResults` - Knowledge search results
  - [ ] `DocumentViewer` - View knowledge documents

### Low Priority
- [ ] **Advanced Components**
  - [ ] `FileUpload` - Drag and drop file upload
  - [ ] `RichTextEditor` - Content editing
  - [ ] `NotificationCenter` - System notifications

## 🎨 Design System

### Colors
- Use the established color palette from `tailwind.config.js`
- Primary: Blue (#3B82F6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)

### Typography
- Use Inter font family
- Follow established heading hierarchy
- Maintain proper line heights and spacing

### Components
- Extend shadcn/ui components as needed
- Maintain consistent spacing and sizing
- Use proper border radius and shadows

## ♿ Accessibility

- Implement proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Support screen readers
- Add focus management

## 📱 Responsive Design

- Mobile-first approach
- Use Tailwind breakpoints consistently
- Ensure touch-friendly interfaces
- Test on various screen sizes

## 🧪 Testing

- Write unit tests for components
- Test user interactions
- Verify accessibility compliance
- Test responsive behavior

## 📝 Notes for Claude

When implementing components:
1. Follow the established patterns and conventions
2. Use the provided design system
3. Ensure accessibility compliance
4. Add proper TypeScript types
5. Include error handling
6. Test on multiple screen sizes
7. Consider performance implications
8. Follow security best practices

Remember: This is a financial-grade application where trust, security, and compliance are paramount.
