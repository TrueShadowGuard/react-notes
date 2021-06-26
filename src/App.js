import React from 'react';
import {observer} from "mobx-react-lite";

import notesStore from './state/notesStore'

import Note from "./components/note/Note";
import Tags from "./components/tags/Tags";
import Menu from "./components/menu/Menu";


const App = observer(() => {

  const selectedTags = notesStore.tags.filter(tag => tag.selected)

  const notes = notesStore.notes
    .filter(note => selectedTags.every(tag => note.tags.includes(tag.text)))
    .map(note => <Note note={note} key={note.id}/>
    )

  return (
    <div className="d-flex flex-column align-items-center flex-wrap">
      <Menu />
      <Tags tags={notesStore.tags}/>
      {notes}
    </div>
  );
});

export default App;
