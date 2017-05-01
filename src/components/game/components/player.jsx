import React from 'react'
import Card from "./card"
import Deck from "./deck"

export default class Player extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            deck: new Deck(),
            cards: []
        }
    }

    componentDidMount() {
        this.setState({ 
            cards: this.state.deck.drawCards(4)
        })
    }

    render() {
        return (
            <div className="player-component">
                <div className="player-name">{ this.props.player.name }</div>
                { this.state.cards.map( card =>
                    <Card card={ card } key={ card.number + card.suit }/>
                )}
            </div>
        )
    }
}