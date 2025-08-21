from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer, Boolean
from sqlalchemy.sql import func
from app.core.database import Base

class KnowledgeSource(Base):
    """Knowledge source model for RAG"""
    __tablename__ = "knowledge_sources"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)  # document, faq, policy, procedure, article
    content = Column(Text, nullable=False)
    category = Column(String, nullable=False)
    tags = Column(Text)  # JSON array of tags
    metadata = Column(Text)  # JSON metadata
    tenant_id = Column(String, ForeignKey("tenants.id"), nullable=False)
    author = Column(String, nullable=False)
    version = Column(Integer, default=1)
    is_active = Column(Boolean, default=True)
    effective_date = Column(DateTime(timezone=True))
    expiry_date = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # TODO: Add relationships to chunks, etc.
    # TODO: Add document processing fields
    # TODO: Add approval workflow fields
