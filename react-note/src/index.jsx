import React from "react";
import { createRoot } from "react-dom/client";

// styling
import './styles/style.css'
import NoteApp from "./components/note/NoteApp";

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);