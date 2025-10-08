from pydantic import BaseModel

class FeedbackIn(BaseModel):
    name: str
    message: str


class FeedbackOut(BaseModel):
    id: int
    name: str
    message: str
    sentiment: str | None
    created_at: str
