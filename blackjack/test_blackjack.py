# import unittest
# from .card import Card
# from .hand import Hand
#
#
# class TestCard(unittest.TestCase):
#     def setUp(self):
#         self.card1 = Card('Ace', 'Diamonds', 1)
#         self.card2 = Card('10', 'Hearts', 10)
#         self.player = Hand()
#         self.player.hit(self.card1)
#         self.player.hit(self.card2)
#
#     def test_value(self):
#         self.assertEqual(self.card1.value, 1)
#         self.assertEqual(self.card2.value, 10)
#
#     def test_hand(self):
#         self.assertEqual(self.player.score_hand(), 21)
#
#     def test_hand_hit(self):
#         self.assertEqual(len(self.player.hand), 2)
#
#
# if __name__ == '__main__':
#     unittest.main()