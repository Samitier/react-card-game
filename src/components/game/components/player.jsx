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
                        <Card card={ card } key={ card.number + card.suit }/>
                    )}
                </div>
                <div className="deck-container">
                    <Deck deck={ this.state.deck } />
                </div>
            </div>
        )
    }
}