import React from 'react';
import s from './note.module.scss';
import notesStore from '../../state/notesStore';
import {observer} from "mobx-react-lite";

const Note = observer(({note}) => {

  const [value, setValue] = React.useState(note.text)

  return (
    <div className={s.note}>
      <textarea className={s.textarea}
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={handleEdit}
      />
      <div className={s.deleteBtn} onClick={handleDelete}>❌</div>
    </div>
  );

  function handleDelete() {
    notesStore.deleteNote(note.id)
  }

  function handleEdit() {
    console.log('edit')
    notesStore.editNote(note.id, value)
  }
});

export default Note;
