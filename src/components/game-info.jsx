import React from 'react'
import { Link } from 'react-router-dom'

export default class GameInfo extends React.Component {
    render() {
        return (
            <div className="game-info-component">
                <h2>How to play</h2>
                <p>
                    This is a real time card game where you play against your opponent, taking no turns. 
                    Your objective is to finish your deck of cards before your rival does.
                </p>
                <p>
                    You should drag & drop your cards in one of the four piles in the middle of the screen.
                    A card can be played only if it is one higher or one lower than the card on the top of the pile.
                </p>
                <p><Link to="/">Back</Link></p>
            </div>
        )
    }
} 