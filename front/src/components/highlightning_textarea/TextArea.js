import React, {useEffect} from 'react';
import s from './textarea.module.css';
import {useRef} from "react";

const TextArea = ({value, handleChange}) => {
  const resultRef = useRef();
  const textAreaRef = useRef();

  useEffect(() => {
    const resultValue = !value ? '' : value.replace(/ /g, '&nbsp;')
      .replace(/#[^ !;,.&]+?(\n|\b)/gmu, str => `<span class=${s.hashTag}>${str}</span>`)
      .replace(/\n/gmi, '<br>');
    resultRef.current.innerHTML = resultValue;
  }, [value])

  return (
    <div className={s.container}>
      <div className={s.result} ref={resultRef}/>
      <textarea
        className={s.textarea}
        onChange={(e) => {
          if(textAreaRef.current.scrollHeight <= textAreaRef.current.clientHeight) handleChange(e);
        }}
        value={value}
        ref={textAreaRef}
      />
    </div>
  );
};

export default TextArea;
