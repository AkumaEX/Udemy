from django.urls import path
from .views import persons_list, persons_new, persons_update

urlpatterns = [
    path('list/', persons_list, name='persons_list'),
    path('new/', persons_new, name='persons_new'),
    path('update/<int:person_id>/', persons_update, name='persons_update'),
]
