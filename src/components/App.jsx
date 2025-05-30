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

 function deleteNote(id){
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index)=>
    {
      return index !== id;
    })
  })

 }

  return(
    <div>
    <Header/>
          <CreateArea  onAdd={addNote}  />

{notes.map((noteItem,index) => {
return <Note

key={index}
id={index}

title={noteItem.title}
content={noteItem.content}
onDelete={deleteNote}

/>
})}
    



    


     <Footer/>

     </div>

  )

  
}

export default App
