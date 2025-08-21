from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)

@router.get("/")
async def health_check():
    """Basic health check endpoint"""
    return {
        "status": "healthy",
        "service": "helioscs-api",
        "version": "1.0.0"
    }

@router.get("/detailed")
async def detailed_health_check(db: AsyncSession = Depends(get_db)):
    """Detailed health check with database connectivity"""
    try:
        # Test database connection
        await db.execute("SELECT 1")
        db_status = "healthy"
    except Exception as e:
        logger.error("Database health check failed", error=str(e))
        db_status = "unhealthy"
    
    return {
        "status": "healthy" if db_status == "healthy" else "degraded",
        "service": "helioscs-api",
        "version": "1.0.0",
        "components": {
            "database": db_status,
            "api": "healthy"
        }
    }
