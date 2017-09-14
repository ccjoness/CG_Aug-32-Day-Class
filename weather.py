import requests


def some_func():
    print('this is the func')


if __name__ == '__main__':
    question = input('Would you like to search by (c)ity name or (z)ip?: ')
    city = input("What city or zip are you looking for?: ")
    package = {
        'APPID': "9ef3311b380d2586bf47ff522529e7a9",
    }

    if question == 'c':
        package['q'] = city
    else:
        package['zip'] = city

    r = requests.post('http://api.openweathermap.org/data/2.5/weather', params=package)

    data = r.json()
    print(data['main'])
