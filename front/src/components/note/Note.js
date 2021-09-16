import React from 'react';
import s from './note.module.scss';
import notesStore from '../../state/notesStore';
import {observer} from "mobx-react-lite";
import TextArea from "../highlightning_textarea/TextArea";

const Note = observer(({note}) => {

  return (
    <div className={s.note}>
      <TextArea handleChange={handleEdit} value={note.text}/>
      <div className={s.deleteBtn} onClick={handleDelete}>❌</div>
    </div>
  );

  function handleDelete() {
    notesStore.deleteNote(note.id)
  }

  function handleEdit(e) {
    notesStore.editNote(note.id, e.target.value)
  }
});

export default Note;
