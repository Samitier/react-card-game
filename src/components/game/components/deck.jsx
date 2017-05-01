export const numbers = [ "2","3","4","5","6","7","8","9","10","J","Q","K","A" ]
export const suits = [ "clubs","spades","hearts","diamonds" ]

export default class Deck {

    constructor() {
        this.init()
    }

    init () {
        this.setDefaultCards()
        this.shuffle()
    }

    setDefaultCards() {
        this.cards = []
        for (let suit of suits) {
            for(let number of numbers) {
                this.cards.push({ number, suit })
            }
        }
    }

    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor( Math.random() * (i + 1) ),
                tmp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = tmp
        }
    }

    drawCards(n) {
        if( n > this.cards.length ) n = this.cards.length
        return this.cards.splice(0, n)
    }
}