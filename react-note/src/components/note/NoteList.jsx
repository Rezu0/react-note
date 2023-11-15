import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, arsipNote, showFormattedDate, onDelete, onMoveActive, onArsip, stateQuery, onChangeSearch }) {
  return (
    <div className="col-md-12 mt-5 py-2 px-5 border border-dark rounded">
      <h4>Note Aktif</h4>
      <div className="d-flex flex-row-reverse mb-3">
        <input
          type="text"
          placeholder="Search note kamu..."
          value={stateQuery}
          onChange={onChangeSearch} />
        <label htmlFor="Search Note" className="d-block mx-2">Search Note: </label>
      </div>
      <NoteItem
        dataNote={notes}
        showFormattedDate={showFormattedDate}
        onDelete={onDelete}
        onArsip={onArsip}
        stateQuery={stateQuery}
        show={false} />

      <h4>Note Arsip</h4>
      <NoteItem
        dataNote={arsipNote}
        showFormattedDate={showFormattedDate}
        onDelete={onDelete}
        onArsip={onArsip}
        stateQuery={stateQuery}
        onMoveActive={onMoveActive}
        show={true} />
    </div>
  )
}

export default NoteList;