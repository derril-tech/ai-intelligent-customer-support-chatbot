from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.sql import func
from app.core.database import Base

class RedactionRule(Base):
    """PII redaction rule model"""
    __tablename__ = "redaction_rules"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    pattern = Column(String, nullable=False)  # Regex pattern
    type = Column(String, nullable=False)  # ssn, account_number, email, phone, address, credit_card
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add rule validation methods
    # TODO: Add compliance tracking fields
