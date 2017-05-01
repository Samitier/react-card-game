import React from "react"
import { suits } from "./deck"

// this icons are the chars of the current used font and 
// equal to mushroom, coin, heart & circle chars (in order)
const suitIcons = ["[", "(", "<", ")"] 

export default class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    getSuitIcon(suit) {
        return suitIcons[suits.indexOf(suit)]
    }

    // function only needed to align the heart icon (the font is not aligned properly)
    getSuitClass(suit) {
        return suitIcons[suits.indexOf(suit)] == "<" ? "suit-heart" : ""
    }

    render() {
        return (
            <div className="card-component">
                { this.props.card.number } &nbsp;
                <span className={ this.getSuitClass(this.props.card.suit) }>
                    { this.getSuitIcon(this.props.card.suit) }
                </span>
            </div>
        )
    }
}