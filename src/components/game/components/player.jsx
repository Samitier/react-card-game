import React from 'react'
import Card from "./card"
import Deck from "./deck"
import DeckService from "../services/deckService"

export default class Player extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            deck: DeckService.getNewDeck(),
            cards: []
        }
    }

    componentDidMount() {
        let { cards: firstCard, deck: deckAux } = DeckService.drawCards(this.state.deck, 1),
            { cards, deck } = DeckService.drawCards(deckAux, 4)
        this.props.onPlayCard(firstCard[0], this.props.player.number)
        this.setState({ cards, deck })
    }

    getPlayerPosition() {
        if(this.props.player.number == 1) return "top"
        else return "bottom"
    }

    render() {
        return (
            <div className={"player-component row " +  this.getPlayerPosition() } >
                <div className="col-xs-12 player-name">
                    { this.props.player.name }
                </div>
                <div className="card-container">
                    { this.state.cards.map( card =>
                        <Card card={ card } isDraggable={ true } key={ card.number + card.suit }/>
                    )}
                </div>
                <div className="deck-container">
                    <Deck deck={ this.state.deck } />
                </div>
            </div>
        )
    }
}