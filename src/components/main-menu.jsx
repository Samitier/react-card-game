import React from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu-component">
                <h1>A React Card Game</h1>
                <ul>
                    <li><Link to="/game">Start Game</Link></li>
                    <li><Link to="/info">How to play</Link></li>
                </ul>
            </div>
        )
    }
}