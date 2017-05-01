import React from 'react'
import Card from "./card"
import DeckService from "../services/deckService"

export default class Deck extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="deck-component">
                { this.props.deck.length > 0 &&
                    <Card card={ this.props.deck[0] } isUpsideDown={ true } />
                }
            </div>
        )
    }
}