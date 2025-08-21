from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Audit(Base):
    """Audit trail model"""
    __tablename__ = "audits"

    id = Column(String, primary_key=True, index=True)
    event_type = Column(String, nullable=False)  # login, message, escalation, etc.
    user_id = Column(String, ForeignKey("users.id"))
    session_id = Column(String, ForeignKey("sessions.id"))
    details = Column(Text)  # JSON details
    ip_address = Column(String)
    user_agent = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: Add audit query methods
    # TODO: Add compliance reporting fields
