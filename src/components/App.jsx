import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);
  function pushNote(note){
    setArr((preValue)=>{
    return  ([...preValue,note]);
    });
  }
  function deleteNode(id){
    setArr((preValue)=>{
      return preValue.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote = {pushNote}/>
      {
        arr.map((element,index)=>{
        return (<Note key={index} id={index} title={element.noteTitle} content={element.noteContent} onDelete={deleteNode} />);})
      }
      <Footer />
    </div>
  );
}

export default App;
