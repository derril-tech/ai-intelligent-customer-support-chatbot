from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Float, Integer
from sqlalchemy.sql import func
from app.core.database import Base

class Analytics(Base):
    """Analytics data model"""
    __tablename__ = "analytics"

    id = Column(String, primary_key=True, index=True)
    metric_name = Column(String, nullable=False)
    metric_value = Column(Float, nullable=False)
    metric_type = Column(String, nullable=False)  # counter, gauge, histogram
    session_id = Column(String, ForeignKey("sessions.id"))
    user_id = Column(String, ForeignKey("users.id"))
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    metadata = Column(Text)  # JSON metadata
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: Add analytics aggregation methods
    # TODO: Add performance tracking fields
