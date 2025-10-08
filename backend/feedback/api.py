from ninja import Router
from .models import Feedback
from .schema import FeedbackIn, FeedbackOut

router = Router()


@router.post("/add", response=FeedbackOut)
def add_feedback(request, data: FeedbackIn):
    sentiment = (
        "Positive"
        if any(word in data.message.lower() for word in ["good", "great", "awesome"])
        else "Neutral"
    )
    feedback = Feedback.objects.create(
        name=data.name,
        message=data.message,
        sentiment=sentiment
    )
    return feedback


@router.get("/list", response=list[FeedbackOut])
def list_feedback(request):
    return Feedback.objects.all().order_by("-created_at")
