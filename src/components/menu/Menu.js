import React from 'react';
import downloadTextFile from "../../utils/downloadTextFile";
import notesStore from "../../state/notesStore";

const Menu = () => {
  const fileInputRef = React.useRef();

  React.useEffect(() => {
    function onChange(e) {
      const file = e.target.files[0];
      const fr = new FileReader();
      fr.readAsText(file);
      fr.onloadend = () => {
        const text = fr.result
        const json = JSON.parse(text);
        if (json.notes && json.tags) showFile(json);
      }
    }

    fileInputRef.current.addEventListener('change', onChange);
    return () => fileInputRef.current.removeEventListener('change', onChange);
  }, [])

  return (
    <div className="d-flex justify-content-start w-100">
      <input type="file" ref={fileInputRef} hidden/>
      <button className="btn btn-light m-2" onClick={handleOpenFile}>
        <strong>Open file</strong>
      </button>
      <button className="btn btn-light m-2" onClick={handleSaveFile}>
        <strong>Save file</strong>
      </button>
      <button className="btn btn-success m-2" onClick={handleCreateNote}>
        <strong>Create note</strong>
      </button>
    </div>
  );

  function handleSaveFile() {
    const text = encodeURIComponent(JSON.stringify({notes: notesStore.notes, tags: notesStore.tags}));
    console.log(text)
    downloadTextFile('notes.json', text)
  }

  function handleOpenFile() {
    fileInputRef.current.click()
  }

  function handleCreateNote() {
    notesStore.createNote()
  }

  function showFile(json) {
    notesStore.setNotes(json.notes)
    notesStore.setTags(json.tags)
  }
};

export default Menu;
