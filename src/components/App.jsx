import Footer from "./Footer"
import Header from "./header"
import Note from "./Note"

import CreateArea from "./CreateArea"
import { useState } from "react"




function App() {

  const[notes, setNotes] = useState([]);

 function addNote(newNote){
 setNotes(prevNotes =>{
  return [...prevNotes, newNote];
 })
 }

 function deleteNote(){

 }

  return(
    <div>
    <Header/>
          <CreateArea  onAdd={addNote}  />

{notes.map((noteItem) => {
return <Note
title={noteItem.title}
content={noteItem.content}
onDelete={deleteNote}

/>
})}
    
<Note 
key={1} title="Note title"
content="Note content"   />



    


     <Footer/>

     </div>

  )

  
}

export default App
