import React, { useState } from "react";
import "./CreateArea.css"

function CreateArea(props) {

    const [note, SetNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value } = event.target;

        SetNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    function submitNote(event){
        props.onAdd(note);
        SetNote({
        title: "",
        content: ""
    })

      
        event.preventDefault();

    }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
