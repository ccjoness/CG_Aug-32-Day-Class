# def easy_rec(n):
#     print(n)
#     if n > 100:
#         return n
#     else:
#         return n + easy_rec(n+1)

# easy_rec(1)


def recur_fibo(n):
    if n <= 1:
        return n
    else:
        return (recur_fibo(n - 1) + recur_fibo(n - 2))


def F():
    a, b = 0, 1
    while a< 1000:
        yield a
        a, b = b, a + b


thing = F()
# print(thing for f in range(40)])
for i in thing:
    print(i)
