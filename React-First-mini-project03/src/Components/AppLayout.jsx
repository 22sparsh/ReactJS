import { useState } from "react";
import ViewsTab from "./left/ViewsTab";
import ActiveViewTab from "./Mid/ActiveViewTab";
import NoteArea from "./Right/NoteArea";

const AppLayout = () => {
  const views = [
    {
      id: 0,
      name: "Notes",
      ico: "fa-regular fa-file-lines w-5 text-center text-base ml-2",
    },
    {
      id: 1,
      name: "Starred",
      ico: "fa-regular fa-star w-5 text-center text-base ml-2",
    },
    {
      id: 2,
      name: "Archived",
      ico: "fa-regular fa-bookmark w-5 text-center text-base ml-2",
    },
    {
      id: 3,
      name: "Trash",
      ico: "fa-regular fa-trash-can w-5 text-center text-base ml-2",
    },
  ];

  // --------------------------------
  // ACTIVE VIEW
  // --------------------------------

  const [activeViewId, setActiveViewId] = useState(
    views[0].id
  );

  const activeView = views.find(
    (view) => view.id === activeViewId
  );

  // --------------------------------
  // ALL SAVED NOTES
  // --------------------------------

  const [notes, setNotes] = useState([]);

  // --------------------------------
  // CURRENTLY SELECTED SAVED NOTE
  // --------------------------------

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  // --------------------------------
  // TEMPORARY DRAFT
  // --------------------------------
  // This is NOT inside notes[].
  // It only exists while the user is creating a new note.

  const [draftNote, setDraftNote] = useState(null);

  // --------------------------------
  // CREATE / START NEW NOTE
  // --------------------------------

  function createNote() {
    // Don't create another draft
    // if one is already being written.
    if (draftNote) {
      return;
    }

    // Start an empty temporary draft.
    setDraftNote({
      title: "",
      content: "",
    });

    // No saved note is selected while
    // the user is writing a new draft.
    setSelectedNoteId(null);
  }

  // --------------------------------
  // UPDATE DRAFT
  // --------------------------------

  function updateDraft(updates) {
    const updatedDraft = {
      ...draftNote,
      ...updates,
    };

    // --------------------------------
    // CHECK IF DRAFT IS STILL EMPTY
    // --------------------------------

    const hasTitle =
      updatedDraft.title.trim().length > 0;

    const hasContent =
      updatedDraft.content.trim().length > 0;

    // --------------------------------
    // IF BOTH ARE EMPTY
    // KEEP IT AS A DRAFT
    // --------------------------------

    if (!hasTitle && !hasContent) {
      setDraftNote(updatedDraft);
      return;
    }

    // --------------------------------
    // USER HAS ENTERED SOMETHING
    // NOW CREATE REAL NOTE
    // --------------------------------

    const now = new Date();

    const newNote = {
      id: crypto.randomUUID(),

      title: updatedDraft.title,

      content: updatedDraft.content,

      createdAt: now,

      updatedAt: now,

      isStarred: false,

      isArchived: false,

      isTrashed: false,
    };

    // Add the note to real notes
    setNotes((previousNotes) => [
      ...previousNotes,
      newNote,
    ]);

    // Select the newly created note
    setSelectedNoteId(newNote.id);

    // Draft is no longer needed
    setDraftNote(null);
  }

  // --------------------------------
  // UPDATE EXISTING NOTE
  // --------------------------------

  function updateNote(noteId, updates) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,
              ...updates,
              updatedAt: new Date(),
            }
          : note
      )
    );
  }

  // --------------------------------
  // SELECT EXISTING NOTE
  // --------------------------------

  function selectNote(noteId) {
    // If user selects an existing note,
    // discard an empty draft.
    setDraftNote(null);

    setSelectedNoteId(noteId);
  }

  // --------------------------------
  // FIND SELECTED NOTE
  // --------------------------------

  const selectedNote = notes.find(
    (note) => note.id === selectedNoteId
  );

  // --------------------------------
  // NOTE TO SHOW IN EDITOR
  // --------------------------------

  // If a draft exists, show draft.
  // Otherwise show selected saved note.

  const noteToEdit = draftNote || selectedNote;

  return (
    <div className="grid text-zinc-800 grid-rows-[1fr_auto] grid-cols-[15vw_14vw_1fr] bg-white h-full">

      {/* -------------------------------- */}
      {/* LEFT COLUMN */}
      {/* -------------------------------- */}

      <ViewsTab
        views={views}
        activeViewId={activeViewId}
        onViewChange={setActiveViewId}
      />

      {/* -------------------------------- */}
      {/* MIDDLE COLUMN */}
      {/* -------------------------------- */}

      <ActiveViewTab
        activeView={activeView}
        notes={notes}
        selectedNoteId={selectedNoteId}
        onAddNote={createNote}
        onSelectNote={selectNote}
      />

      {/* -------------------------------- */}
      {/* RIGHT COLUMN */}
      {/* -------------------------------- */}

      <NoteArea
        note={noteToEdit}
        isDraft={Boolean(draftNote)}
        onUpdateNote={updateNote}
        onUpdateDraft={updateDraft}
      />

      {/* -------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------- */}

      <div className="col-span-3 border-t-2 border-gray-200 p-2">
        <div className="rounded-full bg-amber-500 w-6 h-6">
          d
        </div>
      </div>

    </div>
  );
};

export default AppLayout;