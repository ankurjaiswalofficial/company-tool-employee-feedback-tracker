from ninja import Schema
from datetime import datetime


class FeedbackIn(Schema):
    employee_name: str | None = None
    message: str
    sentiment: str | None = None


class FeedbackOut(Schema):
    id: int
    employee_name: str | None
    message: str
    sentiment: str
    created_at: datetime
