from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Session(Base):
    """Chat session model"""
    __tablename__ = "sessions"

    id = Column(String, primary_key=True, index=True)
    customer_id = Column(String, ForeignKey("customers.id"), nullable=False)
    status = Column(String, nullable=False)  # active, ended, escalated, waiting
    channel = Column(String, nullable=False)  # web, mobile, email, chat, phone
    agent_id = Column(String, ForeignKey("users.id"))
    escalation_reason = Column(String)
    metadata = Column(Text)  # JSON metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    ended_at = Column(DateTime(timezone=True))

    # TODO: Add relationships to messages, tickets, etc.
    # TODO: Add session analytics fields
    # TODO: Add compliance tracking fields
