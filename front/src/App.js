import React from 'react';
import {observer} from "mobx-react-lite";

import notesStore from './state/notesStore'

import Note from "./components/note/Note";
import Tags from "./components/tags/Tags";
import Menu from "./components/menu/Menu";
import TextArea from "./components/highlightning_textarea/TextArea";
import ScrollBar from "react-custom-scrollbars";


const App = observer(() => {

  const selectedTags = notesStore.tags.filter(tag => tag.selected)

  const notes = notesStore.notes
    .filter(note => selectedTags.every(tag => note.tags.includes(tag.text)))
    .map(note => <Note note={note} key={note.id}/>
    )

  return (
    <ScrollBar width="100%" height="100%" color="white">
      <div className="d-flex flex-column align-items-center flex-wrap h-100">
        <Menu/>
        <Tags tags={notesStore.tags}/>
        {notes}
      </div>
    </ScrollBar>
  );
});

export default App;
