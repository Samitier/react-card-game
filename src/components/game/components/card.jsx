import React from "react"
import { suits } from "../services/deckService"

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

    setDraggable(cardElem) {
        if(!cardElem || !this.props.isDraggable) return
        $(cardElem).draggable({
            stack: ".card-component",
            revert: "invalid"
        })
    }

    render() {
        return (
            <div className="card-component" ref={ elem => this.setDraggable(elem) }>
                { this.props.isUpsideDown 
                    ?   <div className="card-back" />
                    :   <div>
                            { this.props.card.number } &nbsp;
                            <span className={ this.getSuitClass(this.props.card.suit) }>
                                { this.getSuitIcon(this.props.card.suit) }
                            </span>
                        </div>
                }
            </div>
        )
    }
}