import React, { useEffect, useRef } from "react";

const NoteArea = ({
  note,
  isDraft,
  onUpdateNote,
  onUpdateDraft,
}) => {

  const titleInputRef = useRef(null);


  // ==========================================
  // FOCUS TITLE WHEN NEW NOTE IS CREATED
  // ==========================================

  useEffect(() => {

    if (isDraft) {
      titleInputRef.current?.focus();
    }

  }, [isDraft]);


  // ==========================================
  // TITLE CHANGE
  // ==========================================

  function handleTitleChange(event) {

    const newTitle = event.target.value;

    if (isDraft) {

      onUpdateDraft({
        title: newTitle,
      });

    } else {

      onUpdateNote(note.id, {
        title: newTitle,
      });

    }
  }


  // ==========================================
  // CONTENT CHANGE
  // ==========================================

  function handleContentChange(event) {

    const newContent = event.target.value;

    if (isDraft) {

      onUpdateDraft({
        content: newContent,
      });

    } else {

      onUpdateNote(note.id, {
        content: newContent,
      });

    }
  }


  // ==========================================
  // NO NOTE SELECTED
  // ==========================================

  if (!note) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">
          Select a note or create a new one
        </p>
      </div>
    );
  }


  return (
    <div className="flex flex-col h-full w-full">

      {/* TITLE */}

      <div className="border-b border-black p-3">

        <input
          ref={titleInputRef}

          className="
            text-xl
            font-extrabold
            outline-none
            w-full
          "

          value={note.title}

          onChange={handleTitleChange}

          placeholder="Title"
        />

      </div>


      {/* CONTENT */}

      <div className="flex-1">

        <textarea
          className="
            w-full
            h-full
            p-2
            text-base
            outline-none
            resize-none
          "

          value={note.content}

          onChange={handleContentChange}

          spellCheck="false"

          placeholder="Start writing..."
        />

      </div>

    </div>
  );
};

export default NoteArea;