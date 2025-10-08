from django.db import models

class Feedback(models.Model):
    employee_name = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    sentiment = models.CharField(
        max_length=20,
        choices=[
            ('good', 'Good'),
            ('neutral', 'Neutral'),
            ('bad', 'Bad'),
        ],
        default='neutral',
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.employee_name or 'Anonymous'} - {self.sentiment}"
