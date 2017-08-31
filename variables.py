# name = input("What is your name?: ")
#
#
# greeting = 'Hello {}!'.format(name)

# print(greeting)

# number = 321651
#
# float_numb = 165445.4687
# expo = 5**2
# mult = 5 * 5
# div = 5 / 5
# add = 5 + 5
# subt = 5 - 5

# lst = ["I'm a string", 34, 3.14, [4, 5, 6]]
#
# lst.append("I'm on the end!!!!")
# # print(lst)
#
# lst[0] = "I am a string."
#
# lst2 = lst[::]
#
# lst2[0] = 44
#
# print(lst)
# print(lst2)

# print(lst[-2])

# print(lst[::2])

# removed_thing = lst.pop()
#
# print('You have popped "{}".'.format(removed_thing))
# print(lst)
# from random import shuffle
# def split_words(string):
#     word_list = string.split(', ')
#     shuffle(word_list)
#     return word_list
#
# playing = True
#
# while playing:
#     query = input("Press 1 to enter words, 2 to read story, 3 to exit: ")
#     if query == '1':
#         nouns = input('Enter three nouns seperated by commas: ')
#         adjective = input('Enter three adjective seperated by commas: ')
#         nouns_list = split_words(nouns)
#         adjectives_list = split_words(nouns)
#     elif query == '2':
#             print(f'I am a {nouns_list[0]} and I like to eat {nouns_list[1]} while driving a {nouns_list[2]}.')
#     elif query == '3':
#         print('Thanks for playing!')
#         playing = False
#     else:
#         print('I dont understand that.')

# my_list = ['cat', 'dog', 'monkey']


# text = "My pets are: {}.".format(''.join(my_list))
#
# print(text)
#
# print(text.replace('e', 'eeeeeeeeeeeeeeeeeeeeeee'))

# my_tuple = ('cat', ['4', '5', '6'], 'monkey')
# my_tuple[1][1] = 'ferret'
# print(my_tuple[1])



my_list = ['cat', 'dog', 'monkey']

# for pet in my_list:
#     for char in pet:
#         print(char)
#     print()

# num = 0
# while num < 100:
#     print('This is the song that never ends...', num)
#     num += 1
#
# print('Oh never mind. It\'s over.')
#
#
#
# print(4 == 4 and not 5 == 4)
# True or True



# name = input('What is your name?: ')
#
# if name == 'Chris':
#     print("uh, hi {}.".format(name))
# elif name == "Chelsea":
#     print('It\'s {}'.format(name))
# else:
#     print('Hello {}'.format(name))

# text = 'some word'
#
# thing = text.title().split()
#
# print(thing)

# a, b, c = ['thing_a', 'thing_b', 'thing_c']
#
# print(a)
# print(b)
# print(c)

# def my_function():
#     print('Coding is fun!')
#
# thing = my_function
# thing()

my_dict = {'key1': {'some': 'thing'}, 'key2': 'value2'}

# print(my_dict)

# Add Item
# my_dict['key3'] = 'value3'

# print(my_dict)

# Change Value
# set_thing = my_dict.setdefault('key3', ['some', 'list', 'of', 'things'])
#
# # print(my_dict)
# # print(set_thing)
#
# my_dict.update(key1='value10', key11='value11')
#
# print(my_dict.values())
# # Delete
# # del my_dict['key3']
#
# # print(my_dict)
#
# # for k, v in my_dict.items():
# #     print('Key is: {}.'.format(k))
# #     print('value is: {}.'.format(v))
# #     print('<-------------->')
#
#
students = {
    'Watters': {'name': 'Kasey Watters', 'phone': 3333333333},
    'Magnuson': {'name': 'Tom Magnuson', 'phone': 4444444444},
    'Yeaney': {'name': 'Johny Yeaney', 'phone': 5555555555},
}
search_name = input('name?: ')
for key, value in students.items():
    for k, v in value.items():
        if v == search_name:
            print(k)
#
# query = input("What is the last name of the person you are looking for?: ")
#
# print(students[query]['name'])
# print(students[query]['phone'])

# def greeting(name, age=21):
#     print(5*5)
#     return 'Hello {}, you are {}!'.format(name, age)
#
# name_input = input('What is your name?: ')
#
# text = greeting(name_input, 34)
#
# print(text)
#
#
#
#
#
#
#
