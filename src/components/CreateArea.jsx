import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Fab from "@mui/material/Fab";
// Fab is floating action buttons
import Zoom from "@mui/material/Zoom";
//Zoom effect

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [clicked, setclick] = useState(false);
  function handleClick() {
    setclick(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : (
          ""
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? "3" : "1"}
          onClick={handleClick}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}>
            <AddOutlinedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
