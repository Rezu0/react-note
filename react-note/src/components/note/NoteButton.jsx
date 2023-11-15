import React from "react";

function NoteButton({ id, onDelete, onArsip, onMoveActive, show }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(id)}
      >Delete</button>
      {(!show) ? (
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={() => onArsip(id)}
        >Arsip {show}</button>
      ) : (
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={() => onMoveActive(id)}
        >Pindahkan</button>
      )}
    </>
  )
}

export default NoteButton;