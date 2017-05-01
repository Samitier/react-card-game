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
        let aux = DeckService.drawCards(this.state.deck, 4)
        this.setState({ 
            cards: aux.cards,
            deck: aux.deck
        })
    }

    render() {
        return (
            <div className="player-component">
                <div className="player-name">{ this.props.player.name }</div>
                { this.state.cards.map( card =>
                    <Card card={ card } key={ card.number + card.suit }/>
                )}
                <Deck deck={ this.state.deck } />
            </div>
        )
    }
}