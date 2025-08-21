#!/bin/bash

# HeliosCS Development Script
# This script starts both frontend and backend development servers

set -e

echo "🚀 Starting HeliosCS Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.11+ first."
    exit 1
fi

# Check if PostgreSQL is running (optional)
if command -v pg_isready &> /dev/null; then
    if ! pg_isready -q; then
        echo "⚠️  PostgreSQL is not running. Please start PostgreSQL before running the backend."
    fi
fi

# Check if Redis is running (optional)
if command -v redis-cli &> /dev/null; then
    if ! redis-cli ping &> /dev/null; then
        echo "⚠️  Redis is not running. Please start Redis before running the backend."
    fi
fi

# Function to cleanup background processes
cleanup() {
    echo "🛑 Stopping development servers..."
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null || true
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start Frontend
echo "📱 Starting Frontend (Next.js)..."
cd frontend
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

# Wait a moment for frontend to start
sleep 3

# Start Backend
echo "🐍 Starting Backend (FastAPI)..."
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

echo "✅ Development servers started!"
echo ""
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for background processes
wait
