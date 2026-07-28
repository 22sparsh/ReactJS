import React, { useEffect, useRef, useState } from "react";
import NoteActionMenu from "./NoteActionMenu";

const NoteCard = ({
  note,
  activeViewId,
  isSelected,
  onSelectNote,
  onToggleStar,
  onArchive,
  onMoveToTrash,
  onUnarchive,
  onRestoreFromTrash,
  onPermanentlyDelete,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  function handleSelectNote() {
    onSelectNote(note.id);
  }

  function handleMenuToggle(event) {
    event.stopPropagation();

    setIsMenuOpen((previousState) => !previousState);
  }

  return (
    <div
      className={`
        relative
        p-3
        border-b
        border-gray-200
        cursor-pointer
        transition
        ${
          isSelected
            ? "bg-gray-200"
            : "hover:bg-gray-100"
        }
      `}
      onClick={handleSelectNote}
    >
      {/* HEADER */}

      <div className="flex items-center justify-between gap-2">

        <h2 className="font-semibold truncate">
          {note.title || "Untitled"}
        </h2>

        {/* THREE DOT */}

        <div
          ref={menuRef}
          className="relative shrink-0"
        >

          <button
            type="button"
            onClick={handleMenuToggle}
            className="
              w-7
              h-7
              flex
              items-center
              justify-center
              rounded-full
              hover:bg-gray-300
              text-gray-600
              text-lg
            "
          >
            ⋮
          </button>

          {isMenuOpen && (
            <NoteActionMenu
  note={note}
  activeViewId={activeViewId}
  onToggleStar={onToggleStar}
  onArchive={onArchive}
  onUnarchive={onUnarchive}
  onMoveToTrash={onMoveToTrash}
  onRestoreFromTrash={onRestoreFromTrash}
  onPermanentlyDelete={onPermanentlyDelete}
/>
          )}

        </div>

      </div>


      {/* CONTENT */}

      <p className="text-sm text-gray-500 truncate mt-1">
        {note.content || "No content"}
      </p>

    </div>
  );
};

export default NoteCard;