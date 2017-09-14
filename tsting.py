"""
>>> get_tens_digit(223)
22

>>> get_tens_digit(10)
1
"""


def greet(name):
    """
    Greet a user by name.

    >>> greet('Chris')
    'Hello, Chris!'
    """
    return 'Hello, {}!'.format(name)


def get_tens_digit(num):
    return num // 10
