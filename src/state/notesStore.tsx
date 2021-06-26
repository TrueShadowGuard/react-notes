import {makeAutoObservable} from 'mobx'
import parseTags from "../utils/parseTags";
import arrayDistinct from "../utils/arrayDistinct";

class NotesStore {
    constructor() {
        makeAutoObservable(this);
    }

    notes: Note[] = []

    tags: Tag[] = [];

    private updateTags() {
        const newTags = arrayDistinct(
            this.notes
                .map(x => x.tags)
                .reduce((curr, arr) => curr.concat(arr), [])
        ).map(text => {
            const tag = this.tags.find(x => x.text === text)
            if (tag) return tag;
            else return {text, selected: false, id: Math.random()};
        })
        this.tags = newTags;
    }

    switchSelectTag(id: number) {
        const tag = this.tags.find(x => x.id === id);
        if (tag) tag.selected = !tag.selected;
    }

    deleteNote(id: number) {
        this.notes = this.notes.filter(note => note.id !== id)
        this.updateTags();
    }

    addNote(note: Note) {
        this.notes.push(note);
        this.updateTags();
    }

    createNote() {
        this.addNote({
            id: Math.random(),
                tags: [],
            text: ''
        })
    }

    editNote(id: number, text: string) {
        const note = this.notes.find(x => x.id === id);
        if (note) {
            note.text = text;
            let tags = parseTags(text);
            if (tags) note.tags = tags
        }
        this.updateTags();
    }

    setNotes(notes: Note[]) {
        this.notes = notes.map(note => (note.id = Math.random(), note));
    }

    setTags(tags: Tag[]) {
        this.tags = tags;
    }
}

export default new NotesStore();

interface Note {
    text: string;
    tags: string[];
    id: number;
}

interface Tag {
    text: string;
    selected: boolean;
    id: number;
}
