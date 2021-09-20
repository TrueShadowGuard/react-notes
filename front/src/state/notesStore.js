import {makeAutoObservable} from 'mobx'
import parseTags from "../utils/parseTags";
import arrayDistinct from "../utils/arrayDistinct";

class NotesStore {
  constructor() {
    makeAutoObservable(this);
    const note = this.createNote();
    this.editNote(note.id, 'Some #example text');
  }

  notes = [];

  tags = [];

  updateTags() {
    const newTags = arrayDistinct(
      this.notes
        .map(x => x.tags)
        .reduce((curr, arr) => curr.concat(arr), [])
    ).map(text => {
      const tag = this.tags.find(x => x.text === text)
      if (tag) return tag;
      else return {text, selected: false, id: Math.random()};
    });
    this.tags = newTags;
  }

  switchSelectTag(id) {
    const tag = this.tags.find(x => x.id === id);
    if (tag) tag.selected = !tag.selected;
  }

  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id)
    this.updateTags();
  }

  addNote(note) {
    this.notes.push(note);
    this.updateTags();
  }

  createNote() {
    const note = {
      id: Math.random(),
      tags: [],
      text: ''
    };
    this.addNote(note);
    return note;
  }

  editNote(id, text) {
    const note = this.notes.find(x => x.id === id);
    if (note) {
      note.text = text;
      let tags = parseTags(text);
      if (tags) note.tags = tags
    }
    this.updateTags();
  }

  setNotes(notes) {
    notes.forEach(note => note.id = Math.random());
    this.notes = notes;
  }

  setTags(tags) {
    this.tags = tags;
  }
}

export default new NotesStore();
