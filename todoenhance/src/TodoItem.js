/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react"

function TodoItem(props) {
    const decideStyle = props.item.completed ? {fontStyle: "italic", color: "grey", textDecoration: "line-through"} : null;
/*    const decideStyle = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }*/



    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            {/*<p style={props.item.completed ? decideStyle :null }>{props.item.text}</p>*/}
            <p style={decideStyle}> {props.item.text}</p>
        </div>
    )
}

export default TodoItem