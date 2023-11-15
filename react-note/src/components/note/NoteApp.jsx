import React from "react";
import { getInitialData, showFormattedDate } from "../../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      arsipNote: [],
      searchQuery: '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArsipNoteHandler = this.onArsipNoteHandler.bind(this);
    this.onNoteActiveHandler = this.onNoteActiveHandler.bind(this);
    this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onArsipNoteHandler(id) {
    const { notes, arsipNote } = this.state;
    const moveToArsip = notes.map((note) => 
      note.id === id ? { ...note, archived: true } : note
    );
    const toArsip = moveToArsip.find((note) => note.id === id);
    this.setState({
      notes: moveToArsip.filter((note) => note.id !== id),
      arsipNote: [...arsipNote, toArsip],
    });
  }

  onNoteActiveHandler(id) {
    const { notes, arsipNote } = this.state;
    const moveToActive = arsipNote.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    const toNoteActive = moveToActive.find((note) => note.id === id);
    this.setState({
      notes: [...notes, toNoteActive],
      arsipNote: moveToActive.filter(note => note.id !== id),
    })
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    const arsipNote = this.state.arsipNote.filter(note => note.id !== id);
    this.setState({ notes, arsipNote });
  }

  onChangeSearchHandler(event) {
    this.setState(() => {
      return {
        searchQuery: event.target.value,
      }
    })
  }

  render() {
    return (
      <div className="container mt-5 mb-5 border border-dark rounded">
        <div className="row mb-5 p-5">
          <h1>Aplikasi Note</h1>
          {/* START: component input */}
          <NoteInput
            addNotes={this.onAddNoteHandler}/>
          {/* END: component input */}

          {/* START: component grid */}
          <NoteList
            notes={this.state.notes}
            arsipNote={this.state.arsipNote}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteNoteHandler}
            onMoveActive={this.onNoteActiveHandler}
            onArsip={this.onArsipNoteHandler}
            stateQuery={this.state.searchQuery}
            onChangeSearch={this.onChangeSearchHandler} />
          {/* END: component grid */}
        </div>
      </div>
    )
  }
}

export default NoteApp;