import structlog
import logging
import sys
from typing import Any, Dict
from app.core.config import settings

def setup_logging() -> None:
    """Setup structured logging configuration"""
    
    # Configure structlog
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer() if settings.LOG_FORMAT == "json" else structlog.dev.ConsoleRenderer(),
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
    
    # Configure standard library logging
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=getattr(logging, settings.LOG_LEVEL.upper()),
    )

def get_logger(name: str) -> structlog.BoundLogger:
    """Get a structured logger instance"""
    return structlog.get_logger(name)

def log_request(request_id: str, method: str, url: str, status_code: int, duration: float) -> None:
    """Log HTTP request details"""
    logger = get_logger("http")
    logger.info(
        "HTTP request",
        request_id=request_id,
        method=method,
        url=url,
        status_code=status_code,
        duration=duration,
    )

def log_error(error: Exception, context: Dict[str, Any] = None) -> None:
    """Log error with context"""
    logger = get_logger("error")
    logger.error(
        "Application error",
        error_type=type(error).__name__,
        error_message=str(error),
        context=context or {},
        exc_info=True,
    )

def log_audit_event(event_type: str, user_id: str, details: Dict[str, Any] = None) -> None:
    """Log audit events"""
    logger = get_logger("audit")
    logger.info(
        "Audit event",
        event_type=event_type,
        user_id=user_id,
        details=details or {},
    )

def log_security_event(event_type: str, details: Dict[str, Any] = None) -> None:
    """Log security events"""
    logger = get_logger("security")
    logger.warning(
        "Security event",
        event_type=event_type,
        details=details or {},
    )
