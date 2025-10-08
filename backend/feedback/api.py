from ninja import Router
from .models import Feedback
from .schema import FeedbackIn, FeedbackOut
from django.core.paginator import Paginator

router = Router()


@router.get("/feedbacks", response=list[FeedbackOut])
def list_feedbacks(request, page: int = 1, sentiment: str | None = None):
    qs = Feedback.objects.all().order_by("-created_at")
    if sentiment:
        qs = qs.filter(sentiment=sentiment)
    paginator = Paginator(qs, 5)  # 5 per page
    page_obj = paginator.get_page(page)
    return list(page_obj)


@router.post("/feedbacks", response=FeedbackOut)
def create_feedback(request, payload: FeedbackIn):
    fb = Feedback.objects.create(**payload.dict())
    return fb
