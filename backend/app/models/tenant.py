from sqlalchemy import Column, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Tenant(Base):
    """Tenant model for multi-tenancy support"""
    __tablename__ = "tenants"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    domain = Column(String, unique=True, index=True)
    settings = Column(Text)  # JSON settings
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add relationships to users, customers, etc.
    # TODO: Add tenant-specific configuration fields
    # TODO: Add compliance and security settings
