from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer
from sqlalchemy.sql import func
from app.core.database import Base

class Thread(Base):
    """Message threading model"""
    __tablename__ = "threads"

    id = Column(String, primary_key=True, index=True)
    session_id = Column(String, ForeignKey("sessions.id"), nullable=False)
    parent_message_id = Column(String, ForeignKey("messages.id"))
    message_id = Column(String, ForeignKey("messages.id"), nullable=False)
    thread_order = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: Add relationships to messages, session, etc.
