import React from 'react';
import {observer} from "mobx-react-lite";

import notesStore from './state/notesStore'
import Note from "./components/note/Note";
import Tags from "./components/tags/Tags";
import Menu from "./components/menu/Menu";
import ScrollBar from "react-custom-scrollbars";

import s from './app.module.scss';


const App = observer(() => {

  const selectedTags = notesStore.tags.filter(tag => tag.selected)

  const notes = notesStore.notes
    .filter(note => selectedTags.every(tag => note.tags.includes(tag.text)))
    .map(note => <Note note={note} key={note.id}/>
    )

  return (
    <div className={s.app}>
      <header className={s.header}>
        <Menu/>
      </header>
      <div className={s.notesContainer}>
        <ScrollBar width="100%" height="100%">
          <ul className={s.notes}>
            {notes.map(note => <li>{note}</li>)}
          </ul>
        </ScrollBar>
      </div>
      <footer className={s.footer}>
        <Tags tags={notesStore.tags}/>
      </footer>
    </div>
  );
});

export default App;
