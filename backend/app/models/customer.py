from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Customer(Base):
    """Customer model for customer information"""
    __tablename__ = "customers"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    phone = Column(String)
    tier = Column(String, nullable=False)  # basic, premium, enterprise
    account_type = Column(String, nullable=False)  # trading, savings, checking, investment
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    metadata = Column(Text)  # JSON metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add relationships to sessions, tickets, etc.
    # TODO: Add customer preferences and settings
    # TODO: Add compliance and audit fields
