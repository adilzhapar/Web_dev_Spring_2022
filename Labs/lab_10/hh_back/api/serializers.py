from rest_framework import serializers

from api.models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, data):
        company = Company.objects.create(name=data.get('name',),
                                        description=data.get('description',),
                                        city=data.get('city',),
                                        address=data.get('address',))

        return company
    
    def update(self, instance, data):
        instance.name = data['name']
        instance.description = data['description']
        instance.city = data['city']
        instance.address = data['address']

        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')

