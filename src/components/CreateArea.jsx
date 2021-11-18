import React,{useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: ""
  });

  function handleChange(event){
    const {value, name} = event.target;
    setNote((preValue)=>{
        return {...preValue,[name]:value};
      });
  }

  function sendNote(event){
    props.addNote(note);
    setNote({
      noteTitle: "",
      noteContent: ""
    });
    event.preventDefault();
  }

  function handleExpand(){
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
      {
        expand?
        <input onChange={handleChange} value={note.noteTitle} name="noteTitle" placeholder="Title" />
        :null
      }
        <textarea onClick={handleExpand} onChange={handleChange} value={note.noteContent} name="noteContent" placeholder="Take a note..." rows={expand?3:1} />
        <Zoom in={expand}>
          <Fab onClick={sendNote} > <NoteAddIcon/> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
