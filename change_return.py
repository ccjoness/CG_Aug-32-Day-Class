# # Ask for the amount of change to dispense _in cents_.
# # Assume that the amount input will be less than 100 cents.
# change_due = int(input("How much change is owed?: "))
# q = 0
# d = 0
# n = 0
# p = 0
# while change_due > 0:
#     # Calculate the number of quarters necessary first.
#     if change_due >= 25:
#         change_due -= 25
#         q += 1
#     elif change_due >= 10:
#         change_due -= 10
#         d += 1
#     elif change_due >= 5:
#         change_due -= 5
#         n += 1
#     else:
#         p += change_due
#         break
#
# # Then calculate the number of dimes, nickels, and pennies.
# print('Your change is {} q, {} d, {} n, {} p.'.format(q, d, n, p))

# quater = 25
# dime = 10
# nickel = 5
# penny = 1
#
# change = input("change input: ")
#
#
# qc = int(change) // int(quater)
# post_qc = (qc) * (quater)
# sub_qc = int(change) - int(post_qc)
# dc = int(sub_qc) // int(dime)
# post_dc = (dc) * (dime)
# sub_dc = int(sub_qc) - int(post_dc)
# nc = int(sub_dc) // int(nickel)
# post_nc = (nc) * (nickel)
# sub_nc = int(sub_dc) - int(post_nc)
# pc = int(sub_nc) // int(penny)
#
#
# # print(int(d10), 'tens')
# print(int(qc), 'quarters')
# print(int(dc), 'dimes')
# print(int(nc), 'nickels')
# print(int(pc), 'pennies')




# c = int(
#     input('Please enter the amount of change up to 99 cents and we\'ll split it up with the fewest coins possible:'))
# print(c // 25, "quarters")
# c = c % 25
# print(c // 10, "dimes")
# c = c % 10
# # print(c // 5, "nickles")
# # c = c % 5
# # print(c // 1, "pennies")
#
#
#
# import math
#
# # Values for each denomination
# benjamin = 100
# jackson = 20
# hamilton = 10
# lincoln = 5
# dollar_bill = 1
# quarter = 0.25
# dime = 0.10
# nickel = 0.05
# penny = 0.01
#
# # List of denominations i.e. values
# denominations = [benjamin, jackson, hamilton, lincoln, dollar_bill, quarter, dime, nickel, penny]
#
# # requesting amount to convert
# balance = float(input("How much change do you need?: (protip: enter something like $5.45 as 5.45) "))
#
# # list in which to store number of each denomination
# count_denom = []
#
# # loop to count each denomination
# for d in denominations:
#     # stores number of denomination
#     count_denom.append(math.ceil(int(balance // d)))
#     print(count_denom)
#     # re-calculates remaining balance after removing denomination's share
#     balance = balance - (int(balance // d) * d)
#     print(balance)
# # print(count_denom)
# bills = count_denom[0] + count_denom[1] + count_denom[2] + count_denom[3] + count_denom[4]
# coins = count_denom[5] + count_denom[6] + count_denom[7] + count_denom[8]
# # print(bills)
# # print(coins)
#
# # result
# print(
#     "I'll give you {} hundreds, {}, twenties, {} tens, {} fives, {} singles, {} quarters, {} dimes, {} nickels, and {} "
#     "pennies.".format(
#         *count_denom))
# # print("I'll give you {} hundreds, {}, twenties, {} tens, {} fives, {} singles, {} quarters, {} dimes, {} nickels, and
# # {} pennies.".format(num_ben, num_jack, num_ham, num_linc, num_dollar, num_quarters, num_dime, num_nickel, num_penny))
# # print("That's " + str(coins) + " coins and " + str(bills) + " bills.")
# print("That's {} coins and {} bills.".format(coins, bills))



