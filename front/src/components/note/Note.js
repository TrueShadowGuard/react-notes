import React from 'react';
import s from './note.module.scss';
import notesStore from '../../state/notesStore';
import {observer} from "mobx-react-lite";
import TextArea from "../highlightning_textarea/TextArea";
import {useCallback} from "react";

const Note = observer(({note}) => {

  const handleEdit = useCallback(function (e) {
    notesStore.editNote(note.id, e.target.value)
  }, [note.id]);

  const handleDelete = useCallback(function (e) {
    notesStore.deleteNote(note.id)
  }, [note.id]);

  return (
    <div className={s.note}>
      <TextArea handleChange={handleEdit} value={note.text}/>
      <div className={s.deleteBtn} onClick={handleDelete}>❌</div>
    </div>
  );
});

export default Note;
