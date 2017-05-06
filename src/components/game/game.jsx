import React from 'react'
import Player from "./components/player"
import Stack from "./components/stack"

export default class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            players: [
                { name: "Player One", number: 0 },
                { name: "Player Two", number: 1 }
            ],
            stacks: [{ key: 0, cards: [] }, { key: 1, cards: [] }]
        }
    }

    componentDidMount() {
    }

    onPlayCard(card, stack) {
        // TODO: Logic for checking if the card can be dropped in this stack
        let newStacks = this.state.stacks.slice()
        newStacks[stack].cards.push(card)
        ///////////

        this.setState({
            stacks: newStacks
        })
    }

    render() {
        return (
            <div className="game-component">
                { this.state.players.map( player =>
                    <Player 
                        player = { player } 
                        onPlayCard = { (card, stack) => this.onPlayCard(card, stack) }
                        key = { player.number } 
                    />
                )}
                <div className="row centered">
                    { this.state.stacks.map( stack =>
                        <Stack 
                            stack = { stack.cards } 
                            key = { stack.key }
                        />
                    )}
                </div>
            </div>
        )
    }
}