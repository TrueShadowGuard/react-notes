import React from 'react';
import s from './tag.module.scss';
import notesStore from '../../state/notesStore';
import {observer} from "mobx-react-lite";

const Tag = ({selected, text, id}) => {
  return (
    <div className={`${s.tag} ${selected && s.selected}`} onClick={handleClick}>
      {text}
    </div>
  );

  function handleClick(e) {
    notesStore.switchSelectTag(id);
    console.log('switched', id)
  }
};

export default Tag;
