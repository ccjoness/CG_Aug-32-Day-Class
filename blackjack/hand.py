class Hand:
    def __init__(self):
        self.hand = []

    def hit(self, card):
        self.hand.append(card)

    def score_hand(self):
        total = 0
        ace = False
        for c in self.hand:
            if c.value == 1:
                total += 1
                ace = True
            else:
                total += c.value
        if ace and total + 10 <= 21:
            total += 10
        return total
