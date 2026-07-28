import { useState } from "react";
import ViewsTab from "./left/ViewsTab";
import ActiveViewTab from "./Mid/ActiveViewTab";
import NoteArea from "./Right/NoteArea";

const AppLayout = () => {

  // ==========================================
  // VIEWS
  // ==========================================

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


  // ==========================================
  // ACTIVE VIEW
  // ==========================================

  const [activeViewId, setActiveViewId] = useState(
    views[0].id
  );

  const activeView = views.find(
    (view) => view.id === activeViewId
  );


  // ==========================================
  // ALL NOTES
  // ==========================================

  const [notes, setNotes] = useState([]);


  // ==========================================
  // SELECTED NOTE
  // ==========================================

  const [selectedNoteId, setSelectedNoteId] =
    useState(null);


  // ==========================================
  // TEMPORARY DRAFT
  // ==========================================

  const [draftNote, setDraftNote] =
    useState(null);


  // ==========================================
  // CREATE / START NEW NOTE
  // ==========================================

  function createNote() {

    // If a draft is already open,
    // don't create another draft.
    if (draftNote) {
      return;
    }

    // Create temporary draft.
    // This is NOT added to notes[] yet.
    setDraftNote({
      title: "",
      content: "",
    });

    // No saved note is selected
    // while creating a new note.
    setSelectedNoteId(null);
  }


  // ==========================================
  // UPDATE DRAFT
  // ==========================================

  function updateDraft(updates) {

    const updatedDraft = {
      ...draftNote,
      ...updates,
    };


    // ------------------------------------------
    // CHECK IF DRAFT IS EMPTY
    // ------------------------------------------

    const hasTitle =
      updatedDraft.title.trim().length > 0;

    const hasContent =
      updatedDraft.content.trim().length > 0;


    // ------------------------------------------
    // STILL EMPTY
    // ------------------------------------------

    if (!hasTitle && !hasContent) {

      setDraftNote(updatedDraft);

      return;
    }


    // ------------------------------------------
    // USER HAS ENTERED SOMETHING
    // CREATE REAL NOTE
    // ------------------------------------------

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


    // Add new note
    setNotes((previousNotes) => [
      ...previousNotes,
      newNote,
    ]);


    // Automatically select new note
    setSelectedNoteId(newNote.id);


    // Draft is now converted
    // into a real note.
    setDraftNote(null);
  }


  // ==========================================
  // SELECT EXISTING NOTE
  // ==========================================

  function selectNote(noteId) {

    // Remove any empty draft
    setDraftNote(null);

    // Select clicked note
    setSelectedNoteId(noteId);
  }


  // ==========================================
  // UPDATE EXISTING NOTE
  // ==========================================

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


  // ==========================================
  // STAR / UNSTAR NOTE
  // ==========================================

  function toggleStarNote(noteId) {

    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,

              isStarred: !note.isStarred,

              updatedAt: new Date(),
            }
          : note
      )
    );
  }


  // ==========================================
  // ARCHIVE NOTE
  // ==========================================

  function archiveNote(noteId) {

    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,

              isArchived: true,

              updatedAt: new Date(),
            }
          : note
      )
    );


    // If current note is archived,
    // remove it from editor.
    if (selectedNoteId === noteId) {

      setSelectedNoteId(null);
    }
  }


  // ==========================================
  // UNARCHIVE NOTE
  // ==========================================

  function unarchiveNote(noteId) {

    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,

              isArchived: false,

              updatedAt: new Date(),
            }
          : note
      )
    );
  }


  // ==========================================
  // MOVE NOTE TO TRASH
  // ==========================================

  function moveToTrash(noteId) {

    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,

              isTrashed: true,

              updatedAt: new Date(),
            }
          : note
      )
    );


    // Remove from editor
    // if currently selected.
    if (selectedNoteId === noteId) {

      setSelectedNoteId(null);
    }
  }


  // ==========================================
  // RESTORE NOTE FROM TRASH
  // ==========================================

  function restoreFromTrash(noteId) {

    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === noteId
          ? {
              ...note,

              isTrashed: false,

              updatedAt: new Date(),
            }
          : note
      )
    );
  }


  // ==========================================
  // PERMANENTLY DELETE NOTE
  // ==========================================

  function permanentlyDeleteNote(noteId) {

    setNotes((previousNotes) =>
      previousNotes.filter(
        (note) => note.id !== noteId
      )
    );


    // Remove selected note
    // if it was deleted permanently.
    if (selectedNoteId === noteId) {

      setSelectedNoteId(null);
    }
  }


  // ==========================================
  // FILTER NOTES BASED ON ACTIVE VIEW
  // ==========================================

  const visibleNotes = notes.filter((note) => {
  switch (activeViewId) {
    case 0:
      return (
        !note.isArchived &&
        !note.isTrashed
      );

    case 1:
      return (
        note.isStarred &&
        !note.isArchived &&
        !note.isTrashed
      );

    case 2:
      return (
        note.isArchived &&
        !note.isTrashed
      );

    case 3:
      return note.isTrashed;

    default:
      return false;
  }
});


  // ==========================================
  // GET SELECTED NOTE
  // ==========================================

  const selectedNote = notes.find(
    (note) => note.id === selectedNoteId
  );


  // ==========================================
  // NOTE TO SHOW IN EDITOR
  // ==========================================

  // If user is creating a new note,
  // show draft.
  //
  // Otherwise show selected saved note.

  const noteToEdit =
    draftNote || selectedNote;


  // ==========================================
  // UI
  // ==========================================

  return (

    <div className="grid text-zinc-800 grid-rows-[1fr_auto] grid-cols-[15vw_14vw_1fr] bg-white h-full">


      {/* ================================== */}
      {/* LEFT COLUMN */}
      {/* ================================== */}

      <ViewsTab
        views={views}
        activeViewId={activeViewId}
        onViewChange={setActiveViewId}
      />


      {/* ================================== */}
      {/* MIDDLE COLUMN */}
      {/* ================================== */}

      <ActiveViewTab
        activeView={activeView}

        notes={visibleNotes}

        selectedNoteId={selectedNoteId}

        onAddNote={createNote}

        onSelectNote={selectNote}

        onToggleStar={toggleStarNote}

        onArchive={archiveNote}

        onUnarchive={unarchiveNote}

        onMoveToTrash={moveToTrash}

        onRestoreFromTrash={restoreFromTrash}

        onPermanentlyDelete={
          permanentlyDeleteNote
        }
      />


      {/* ================================== */}
      {/* RIGHT COLUMN */}
      {/* ================================== */}

      <NoteArea
        note={noteToEdit}

        isDraft={Boolean(draftNote)}

        onUpdateNote={updateNote}

        onUpdateDraft={updateDraft}
      />


      {/* ================================== */}
      {/* FOOTER */}
      {/* ================================== */}

      <div className="col-span-3 border-t-2 border-gray-200 p-2">

        <div className=" bg-amber-500 w-fit rounded-xl pl-2 pr-2">
          sparsh
        </div>

      </div>

    </div>
  );
};

export default AppLayout;