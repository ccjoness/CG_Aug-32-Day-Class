import random
import time


class Card:
    def __init__(self, suit, rank, card_value=0):  # Attributes of cards.  card_values=0 is to not display the value
        # but keep the data for later calcs.
        self.suit = suit  # Diamond, Heart, club, spades
        self.rank = rank  # Ace, two, Jack, etc.
        self.card_value = card_value  # 1, 2, 3, 10  [Ace being 1 or 11 wil be managed later.]

    def card_name(self):  # Creates a concatonated card name
        card_name = "{} {}".format(self.rank, self.suit)
        return card_name

    def __str__(self):
        return "{} of {}".format(self.rank, self.suit)


class Deck:
    def __init__(self):
        self.deck = self.deck_builder()

    # @staticmethod
    def deck_builder(self):
        deck = []
        suit = ["Diamonds", "Hearts", "Clubs", "Spades"]
        card_value = {"Ace": 1, "Two": 2, "Three": 3, "Four": 4, "Five": 5, "Six": 6, "Seven": 7, "Eight": 8, "Nine": 9,
                      "Ten": 10, "Jack": 10, "Queen": 10, "King": 10}

        for i in suit:
            for x, y in card_value.items():
                deck.append(Card(i, x, y))
        random.shuffle(deck)
        return deck


class Hand:

    def __init__(self, holding, name):
        self.holding = holding
        self.bust = False
        self.hand_value = 0
        self.name = name

    def take_card(self, card):
        self.holding.append(card)  # such as full_deck[0]

    def __str__(self):
        return "{} for a total of {}. ".format(self.holding, self.hand_value)


class Dealer(Hand):
    def dealer_deal(self):
        pass


class Game:
    def __init__(self):
        self.full_deck = Deck()
        self.player = Hand(holding=[], name="Player")
        self.dealer = Dealer(holding=[], name="Dealer")
        self.players_list = [self.player, self.dealer]

    def shuffle(self):
        random.shuffle(self.full_deck)

    def cut(self):
        split_deck = random.randrange(2,50)
        self.full_deck.deck = self.full_deck.deck[split_deck:-1] + self.full_deck.deck[0:split_deck+1]

    def initial_deal(self):
        self.dealer.holding = []
        self.player.holding = []
        for i in range(2):
            for p in self.players_list:
                p.take_card(self.full_deck.deck.pop(0))

    def hit(self, hand):
        time.sleep(1)
        print("")
        # print("A {} ".format(self.full_deck.deck[0]))
        hand.take_card(self.full_deck.deck.pop(0))

    def running_total(self, hand):
        hand.hand_value = 0
        for i in hand.holding:
            hand.hand_value += i.card_value

    def bust_check(self, hand):
        if hand.hand_value > 21:
            print("BUSTED! :) {}'s got {} ".format(hand.name, hand.hand_value))
            hand.bust = True
        return hand.bust

    def ace_check(self, hand):
        if "Ace" not in hand.holding:
            print("Ace not present.")
            pass
        else:
            if hand.hand_value + 10 < 21:
                print("Ace rule triggered")
                hand.hand_value += 10

    def show_dealer(self):
        print("****", " and a ", self.dealer.holding[0])

    def soft_sixteen(self, hand):
        if hand.hand_value < 16:
            hand.take_card(self.full_deck.deck.pop(0))

    def player_menu(self, hand):
        print(hand.name)
        playing = True
        while playing is True and hand.bust is False:
            if hand.name.lower() != "dealer":
                print("The dealers shows: ")
                self.show_dealer()
                print("")
                print("You have:")
                for i in hand.holding:
                    print("  {}".format(i))
                print("")
                choice = str(input("Press 1 to hit, 2 to stand: "))
            else:
                self.running_total(hand)
                print("The dealer has: ")
                for i in hand.holding:
                    print("  {}".format(i))
                    # self.running_total(hand)
                    # print(hand.hand_value)
                if hand.hand_value < 16:
                    print(" hand value is {} ".format(hand.hand_value))
                    choice = "1"
                else:
                    choice = "2"
            if choice == "1":
                self.hit(hand)
                self.running_total(hand)
                self.ace_check(hand)
                self.bust_check(hand)
                print(hand.bust)
            elif choice == "2":
                self.running_total(hand)
                playing = False

        # else:
        # print("{}'s hand: ".format(hand.name))
        # for i in hand.holding:
        #     print(i)
        # print("")

        # playing = True
        # while hand.bust is False and playing is True:
        #     print("")
        #     choice = str(input("Press 1 to hit, 2 to stand: "))
        #     print("")
        #     if choice == "1":
        #         self.hit(hand)
        #         self.running_total(hand)
        #         self.ace_check(hand)
        #         self.bust_check(hand)
        #     elif choice == "2":
        #         self.running_total(hand)
        #         playing = False
        #     else:
        #         pass

    def dealer_show(self, hand):
        print("The dealer reveals his hand....")
        for i in hand.holding:
            print(i)
        self.running_total(hand)
        running = True
        while running == True:
            if hand.hand_value < 16:
                self.hit(hand)
                self.running_total(hand)
            else:
                self.ace_check(hand)
                self.bust_check(hand)
                running = False

    def scoring(self, player, dealer):
        if dealer.hand_value == player.hand_value:
            print("")
            print("An epic push!!! ")
        elif dealer.hand_value > player.hand_value and dealer.bust == False:
            print("")
            print("The Dealer wins!")
        else:
            print("You win!!!!  ")

    def start_game(self):
        self.initial_deal()
        self.player_menu(self.player)
        if not game.player.bust:
            self.player_menu(self.dealer)
            if not self.dealer.bust:
                self.scoring(game.player, game.dealer)


if __name__ == "__main__":
    play = "y"
    while play == "y":
        game = Game()
        game.start_game()
        print("")
        play = input("Type 'y' to play again, 'n' to quit.")
        print("")







