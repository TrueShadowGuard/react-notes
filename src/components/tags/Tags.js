import React from 'react';
import Tag from "../tag/Tag";
import s from './tags.module.scss'
import {observer} from "mobx-react-lite";

const Tags = observer(({tags}) => {
  return (
    <div className={s.tags}>
      {tags?.map(tag => <Tag text={tag.text}
                             selected={tag.selected}
                             key={tag.id}
                             id={tag.id}
      />)}
    </div>
  );
});

export default Tags;
