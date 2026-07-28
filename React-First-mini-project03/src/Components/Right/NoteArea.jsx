import React from "react";

const NoteArea = ({
  note,
  isDraft,
  onUpdateNote,
  onUpdateDraft,
}) => {

  // --------------------------------
  // NO NOTE / NO DRAFT
  // --------------------------------

  if (!note) {
    return (
      <div className="flex items-center justify-center h-full w-full">

        <p className="text-gray-500">
          Select a note or create a new note
        </p>

      </div>
    );
  }

  // --------------------------------
  // TITLE CHANGE
  // --------------------------------

  function handleTitleChange(e) {
    const newTitle = e.target.value;

    // If currently writing a new draft
    if (isDraft) {
      onUpdateDraft({
        title: newTitle,
      });

      return;
    }

    // Otherwise update existing note
    onUpdateNote(note.id, {
      title: newTitle,
    });
  }

  // --------------------------------
  // CONTENT CHANGE
  // --------------------------------

  function handleContentChange(e) {
    const newContent = e.target.value;

    // If currently writing a new draft
    if (isDraft) {
      onUpdateDraft({
        content: newContent,
      });

      return;
    }

    // Otherwise update existing note
    onUpdateNote(note.id, {
      content: newContent,
    });
  }

  return (
    <div className="flex flex-col h-full w-full">

      {/* -------------------------------- */}
      {/* TITLE */}
      {/* -------------------------------- */}

      <div className="border-b border-black p-3">

        <input
          className="text-xl font-extrabold outline-none w-full"
          value={note.title}
          placeholder="Untitled"
          onChange={handleTitleChange}
        />

      </div>

      {/* -------------------------------- */}
      {/* CONTENT */}
      {/* -------------------------------- */}

      <div className="flex-1">

        <textarea
          className="w-full h-full p-2 text-base outline-none resize-none"
          spellCheck="false"
          value={note.content}
          placeholder="Start writing..."
          onChange={handleContentChange}
        />

      </div>

    </div>
  );
};

export default NoteArea;