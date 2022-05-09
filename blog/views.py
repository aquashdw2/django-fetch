import json
import time

from django.http import JsonResponse
from django.shortcuts import render


def index(request):
    return render(request, "blog/index.html")


def read_lorem(request):
    time.sleep(2)
    content = {
        "title": "Lorem Ipsum",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit, illo magnam distinctio repellat, porro cum veniam vitae alias id odio officia ea laborum quo. Exercitationem doloremque placeat provident commodi?"
    }

    return JsonResponse(content)


def create_post(request):
    request_body = json.loads(request.body)
    print(request_body)
    time.sleep(2)
    return JsonResponse({})
