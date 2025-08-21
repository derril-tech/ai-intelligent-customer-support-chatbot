from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Ticket(Base):
    """Support ticket model"""
    __tablename__ = "tickets"

    id = Column(String, primary_key=True, index=True)
    session_id = Column(String, ForeignKey("sessions.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    priority = Column(String, nullable=False)  # low, medium, high, urgent
    category = Column(String, nullable=False)  # technical_support, account_inquiry, billing, trading, security, general
    status = Column(String, nullable=False)  # open, in_progress, waiting, resolved, closed
    customer_id = Column(String, ForeignKey("customers.id"), nullable=False)
    assigned_agent_id = Column(String, ForeignKey("users.id"))
    tags = Column(Text)  # JSON array of tags
    metadata = Column(Text)  # JSON metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    resolved_at = Column(DateTime(timezone=True))

    # TODO: Add relationships to session, customer, agent, etc.
    # TODO: Add ticket comments and history
    # TODO: Add SLA tracking fields
