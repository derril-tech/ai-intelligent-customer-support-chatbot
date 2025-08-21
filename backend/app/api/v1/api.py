from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth,
    sessions,
    messages,
    tickets,
    knowledge,
    analytics,
    admin,
    health
)

api_router = APIRouter()

# Include all endpoint routers
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(sessions.router, prefix="/sessions", tags=["sessions"])
api_router.include_router(messages.router, prefix="/messages", tags=["messages"])
api_router.include_router(tickets.router, prefix="/tickets", tags=["tickets"])
api_router.include_router(knowledge.router, prefix="/knowledge", tags=["knowledge"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
api_router.include_router(health.router, prefix="/health", tags=["health"])
