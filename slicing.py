# lst1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#
# lst2 = lst1
# lst1[0] = 99
# print(lst2)


from random import randint

print("Welcome to the dice game!")

user_amt = int(input("How many dice would you like to roll?: "))
sides = int(input("How many side to your die?: "))

rolls = []
for roll in range(user_amt):
    rolls.append(randint(1, sides))

print('What number would you like to hold?')
for i in enumerate(rolls):
    print('{} - {}'.format(i[0] + 1, i[1]))
to_hold = int(input(': ')) - 1

new_roll = [rolls[to_hold]]


for rl in range(user_amt - len(new_roll)):
    new_roll.append(randint(1, sides))


for i in enumerate(new_roll):
    print('{} - {}'.format(i[0] + 1, i[1]))