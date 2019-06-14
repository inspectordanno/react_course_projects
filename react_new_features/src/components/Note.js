import React, { useContext } from 'react';
import NotesContext from '../context/notes_context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  const removeNote = () => {
    dispatch({
      type: 'REMOVE_NOTE',
      title: note.title
    });
  }

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={removeNote} >x</button>
    </div>
  );
}

export default Note;