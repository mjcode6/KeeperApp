import React from "react";
import "./Note.css"

function Note(props){
    return(
        <div className="note">
            <h>{props.title} </h>
            <p>{props.content} </p>
            <button>DELETE</button>
        </div>
    )
}

export default Note;