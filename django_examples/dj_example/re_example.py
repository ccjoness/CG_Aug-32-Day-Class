import re

p = re.compile('tempo')

text = 'askdfjlkasdftempolaskdmflkasd'
#
m = p.search(text)

if m:
    print(m.group())
else:
    print('no match')