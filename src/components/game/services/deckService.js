export const numbers = [ "2","3","4","5","6","7","8","9","10","J","Q","K","A" ]
export const suits = [ "clubs","spades","hearts","diamonds" ]

class DeckService {

    getNewDeck () {
        let deck = this.getDefaultCards()
        return this.shuffleCards(deck)
    }

    getDefaultCards() {
        let deck = []
        for (let suit of suits) {
            for(let number of numbers) {
                deck.push({ number, suit })
            }
        }
        return deck
    }

    shuffleCards (deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor( Math.random() * (i + 1) ),
                tmp = deck[i]
            deck[i] = deck[j]
            deck[j] = tmp
        }
        return deck
    }

    drawCards (deck, n) {
        if( !n || n > deck.length ) n = deck.length
        return { 
            cards: deck.slice(0, n), 
            deck: deck.slice(n + 1, deck.length) 
        }
    }
}

export default new DeckService()