# class NPC:
#     def __init__(self, name):
#         self.weapon = Weapon("Starter Sword", 3)
#         self.name = name
#         self.hp = 100
#
#
# class Weapon:
#     def __init__(self, name, ap):
#         self.name = name
#         self.ap = ap
#
#     def __str__(self):
#         return self.name
#
#
# def round_of_battle(npc1, npc2):
#     npc1.hp -= npc2.weapon.ap
#     npc2.hp -= npc1.weapon.ap
#
#
# player = NPC('Chris')
# orc = NPC('Orc Guy')
# sword = Weapon('Sword of ouch.', 20)
# axe = Weapon('Axe.', 20)
# print(player.weapon)
# player.weapon = sword
# orc.weapon = axe
#
# print(player.weapon)


class Foo:
    def __init__(self, name):
        self.name = name



lst = []

for i in range(100):
    lst.append(Foo(i))
print(lst[:44])
# for x in lst:
#     print(x.name)