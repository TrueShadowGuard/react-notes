import React, {useEffect} from 'react';
import s from './textarea.module.css';
import {useRef} from "react";
import {useMemo} from "react";

const TextArea = ({value, handleChange}) => {
  const resultRef = useRef();

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
        onChange={handleChange}
        value={value}
        maxLength={200}
      />
    </div>
  );
};

export default TextArea;
