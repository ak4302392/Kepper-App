import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleAdd(currText) {
    if (currText.title === "" || currText.content === "") {
      alert("title/content missing");
    } else {
      setNoteList((prevList) => {
        return [...prevList, currText];
      });
    }
  }

  function deleteNote(id) {
    setNoteList((prevList) => {
       return prevList.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addClick={handleAdd} />
      {noteList.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
