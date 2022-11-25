import React from "react";

export default function Footer(props){
    const {count} = props
    return(
        
        <div className="todo-footer">
                <span className="count-todos">{count}</span>
            {' items left'}
        </div>
    )
}