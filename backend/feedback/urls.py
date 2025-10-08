from ninja import NinjaAPI
from feedback.api import router as feedback_router

ninja_api = NinjaAPI(title="Company Tool Employee Feedback Tracker",
               description="Created By Ankur Jaiswal")
ninja_api.add_router("/feedback/", feedback_router)
