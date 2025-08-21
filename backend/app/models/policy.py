from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.sql import func
from app.core.database import Base

class Policy(Base):
    """Compliance policy model"""
    __tablename__ = "policies"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    type = Column(String, nullable=False)  # regulatory, internal, operational
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    is_active = Column(Boolean, default=True)
    effective_date = Column(DateTime(timezone=True))
    expiry_date = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add policy enforcement methods
    # TODO: Add compliance tracking fields
