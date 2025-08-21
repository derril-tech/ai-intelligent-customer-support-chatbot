# HeliosCS Frontend

Next.js 14 frontend application for the HeliosCS Intelligent Customer Support Chatbot.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running (see backend README)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp env.example .env.local
# Edit .env.local with your configuration
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (auth)/          # Authentication pages
│   ├── (dashboard)/     # Protected dashboard pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/          # Reusable components
│   ├── ui/              # shadcn/ui base components
│   ├── chat/            # Chat-specific components
│   ├── forms/           # Form components
│   ├── layout/          # Layout components
│   └── providers/       # Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── types/               # TypeScript definitions
└── utils/               # Helper functions
```

## 🎨 Design System

The application uses a custom design system built on top of Tailwind CSS and shadcn/ui:

- **Colors**: Financial-grade color palette with proper contrast
- **Typography**: Inter font with clear hierarchy
- **Components**: Accessible, reusable components
- **Responsive**: Mobile-first design approach

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔒 Security Features

- JWT authentication
- Protected routes
- Input validation
- XSS protection
- Secure WebSocket connections

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus management

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly interfaces
- Optimized for all screen sizes
- Progressive enhancement

## 🔗 API Integration

The frontend communicates with the backend API through:

- REST API endpoints
- WebSocket connections for real-time chat
- React Query for state management
- Proper error handling and loading states

## 🧪 Testing

- Unit tests for components
- Integration tests for user flows
- E2E tests for critical paths
- Accessibility testing

## 🚀 Deployment

The application can be deployed to:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

## 📝 Development Guidelines

1. Follow TypeScript best practices
2. Use functional components with hooks
3. Implement proper error boundaries
4. Add loading states for better UX
5. Test on multiple devices and browsers
6. Follow accessibility guidelines
7. Optimize for performance

## 🤝 Contributing

1. Follow the established code style
2. Add tests for new features
3. Update documentation
4. Ensure accessibility compliance
5. Test on multiple screen sizes

## 📄 License

This project is part of the HeliosCS Intelligent Customer Support Chatbot.
