from django.urls import path

from api.views import *

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:company_id>/', get_company),
    path('companies/<int:company_id>/vacancies/', comp_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', get_vacancy),
    path('vacancies/top_ten/', top_ten)
]