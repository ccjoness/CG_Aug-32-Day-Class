diction = {'some_key': 'nothing'}
main_key = '30-08-2017'
total = 10
# diction[main_key] = {'Date': main_key, 'Total': total, 0: 0, 1: 5}
# diction['30-08-2018'] = {'Date': '30-08-2018', 'Total': 22, 0: 10, 1: 12}
diction.update(some_key={'some': 'value'})
print(diction)
