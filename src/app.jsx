import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Game from "./components/game/game"
import GameInfo from "./components/game-info"
import MainMenu from "./components/main-menu"

export default class App extends React.Component {
    render() {
        return (
            <div className="app-component">
                <Router>
                    <div className="app-route">
                        <Route exact path="/" component={ MainMenu }/>
                        <Route path="/game" component={ Game }/>
                        <Route path="/info" component={ GameInfo }/>
                    </div>
                </Router>
            </div>
        )
    }
}