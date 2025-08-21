from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Float
from sqlalchemy.sql import func
from app.core.database import Base

class Chunk(Base):
    """Document chunk model for vector embeddings"""
    __tablename__ = "chunks"

    id = Column(String, primary_key=True, index=True)
    knowledge_source_id = Column(String, ForeignKey("knowledge_sources.id"), nullable=False)
    content = Column(Text, nullable=False)
    embedding = Column(Text)  # Vector embedding (JSON)
    metadata = Column(Text)  # JSON metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: Add vector similarity search methods
    # TODO: Add chunk processing fields
