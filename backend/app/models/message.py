from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Float
from sqlalchemy.sql import func
from app.core.database import Base

class Message(Base):
    """Message model for chat conversations"""
    __tablename__ = "messages"

    id = Column(String, primary_key=True, index=True)
    session_id = Column(String, ForeignKey("sessions.id"), nullable=False)
    content = Column(Text, nullable=False)
    message_type = Column(String, nullable=False)  # user, bot, system, agent
    status = Column(String, nullable=False)  # sent, delivered, read, failed
    confidence = Column(Float)
    intent = Column(String)
    entities = Column(Text)  # JSON entities
    citations = Column(Text)  # JSON citations
    redactions = Column(Text)  # JSON redactions
    metadata = Column(Text)  # JSON metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: Add relationships to session, thread, etc.
    # TODO: Add message analytics fields
    # TODO: Add compliance and audit fields
