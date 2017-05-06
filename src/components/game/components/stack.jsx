import React from 'react'
import Card from "./card"

export default class Stack extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    setDroppable (elem) {
        if(!elem) return
        $(elem).droppable({
             drop (event, ui) {
                let $this = $(this)
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $this,
                    using (pos) {
                        $(this).animate(pos, 200, "linear")
                    }
                })
            }
        })
    }

    render() {
        return (
            <div className="stack-component" ref={ elem => this.setDroppable(elem) }>
                { this.props.stack.length > 0 &&
                    <Card card={ this.props.stack[0] } isUpsideDown={ false } isDraggable={ false } />
                }
            </div>
        )
    }
}