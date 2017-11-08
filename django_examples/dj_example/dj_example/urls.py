from django.conf.urls import url
from django.contrib import admin
from pages import views as page_views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # pages urls
    url(r'^$', page_views.home, name='home'),
    url(r'^about/$', page_views.about, name='about'),
    url(r'^profile/$', page_views.profile, name='profile'),

    # url(r'^login/$', auth_views.LoginView.as_view()),
    url(r'^login/$', page_views.login_view, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

