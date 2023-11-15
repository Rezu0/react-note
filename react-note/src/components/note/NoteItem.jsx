import React from "react";
import NoteButton from "./NoteButton";

function NoteItem({ dataNote, showFormattedDate, onDelete, onArsip, onMoveActive, stateQuery, show }) {
  const filteredNotes = dataNote.filter((note) => 
  note.title.toLowerCase().includes(stateQuery)
  );

  return (
    <div className="row mb-4">
      {(dataNote.length === 0 && stateQuery.length === 0) ? <p><strong>Tidak ada data!</strong></p> : ''}
      {(filteredNotes.length === 0 && stateQuery.length !== 0) ? <p><strong>Tidak ada data!</strong></p> : ''}

      {dataNote.filter((note) => 
        note.title.toLowerCase().includes(stateQuery)
      ).map((note) => (
        <div 
          className="col-md-4"
          key={note.id}>
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">
                  {note.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {showFormattedDate(note.createdAt)}
                </h6>
                <p className="card-text">{note.body}</p>
                <NoteButton 
                  id={note.id}
                  onDelete={onDelete}
                  onArsip={onArsip}
                  onMoveActive={onMoveActive}
                  show={show} />
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default NoteItem;