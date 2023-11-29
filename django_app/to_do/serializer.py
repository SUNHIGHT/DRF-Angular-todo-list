from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id','title','created_at') 

#fieldsじゃないとダメ

# from rest_framework import serializers
# from .models import Todo  # あなたの Todo モデルをインポート

# class TodoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Todo
#         fields = '__all__'  # すべてのフィールドを含める
