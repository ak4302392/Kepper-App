import React, { useState } from "react";

function CreateArea(props) {
  const [currText, setCurrText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setCurrText((prevText) => {
      return {
        ...prevText,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.addClick(currText);
    setCurrText({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={currText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={currText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
        
      </form>
    </div>
  );
}

export default CreateArea;
