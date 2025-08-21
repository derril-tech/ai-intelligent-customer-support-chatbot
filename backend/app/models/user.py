from sqlalchemy import Column, String, DateTime, Boolean, ForeignKey
from sqlalchemy.sql import func
from app.core.database import Base

class User(Base):
    """User model for authentication and authorization"""
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # admin, agent, supervisor, viewer
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    is_active = Column(Boolean, default=True)
    last_login = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add relationships to sessions, tickets, etc.
    # TODO: Add user preferences and settings
    # TODO: Add audit fields for security tracking
