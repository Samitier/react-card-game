import React from 'react'
import Player from "./components/player"

export default class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            players: [
                { name: "Player One", number: 1 },
                { name: "Player Two", number: 2 }
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="game-component">
                { this.state.players.map( player =>
                    <Player player={ player } key={ player.number } />
                )}
            </div>
        )
    }
}