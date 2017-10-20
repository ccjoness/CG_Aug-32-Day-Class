from django.conf.urls import url
from django.contrib import admin
from pages import views as page_views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # pages urls
    url(r'^$', page_views.home, name='home'),
    url(r'^about/$', page_views.about, name='about'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

