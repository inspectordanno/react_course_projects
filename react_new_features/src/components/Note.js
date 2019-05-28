import React, { useContext } from 'react';
import NotesContext from '../context/notes_context';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

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
      <button onClick={removeNote} >x</button>
    </div>
  );
}

export default Note;