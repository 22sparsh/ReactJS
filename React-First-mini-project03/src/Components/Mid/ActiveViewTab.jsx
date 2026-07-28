import React from "react";
import Search from "../Utilities/Search";
import NoteCard from "../Right/NoteCard";

const ActiveViewTab = ({
  activeView,
  notes,
  selectedNoteId,

  onAddNote,
  onSelectNote,

  onToggleStar,
  onArchive,
  onMoveToTrash,

  onUnarchive,
  onRestoreFromTrash,
  onPermanentlyDelete,
}) => {
  return (
    <div className="border-r text-zinc-800 border-gray-300 flex flex-col min-h-0">

      {/* ========================================= */}
      {/* ACTIVE VIEW HEADER */}
      {/* ========================================= */}

      <div className="flex flex-col h-fit border-b items-center pb-2 border-gray-400">

        {/* ----------------------------------------- */}
        {/* TITLE + ADD BUTTON */}
        {/* ----------------------------------------- */}

        <div className="flex h-fit w-full justify-between gap-2 p-3">

          {/* ACTIVE VIEW NAME */}

          <div className="flex justify-between h-fit gap-1 items-center">

            <i
              className={`${activeView.ico} fa-lg`}
              style={{ marginLeft: 0 }}
            ></i>

            <h1 className="text-[1.3vw]">
              {activeView.name}
            </h1>

          </div>


          {/* ADD NOTE BUTTON */}

          <button
            type="button"
            className="
              bg-blue-400
              w-2
              h-2
              flex
              justify-center
              items-center
              text-white
              text-xl
              rounded-full
              p-4
              cursor-pointer
              active:bg-blue-200
              hover:bg-blue-900
              hover:text-white
            "
            onClick={onAddNote}
          >
            +
          </button>

        </div>


        {/* ----------------------------------------- */}
        {/* SEARCH */}
        {/* ----------------------------------------- */}

        <div>
          <Search />
        </div>

      </div>


      {/* ========================================= */}
      {/* NOTES LIST */}
      {/* ========================================= */}

      <div className="flex-1 overflow-y-auto">

        {notes.length === 0 ? (

          /* --------------------------------------- */
          /* EMPTY STATE */
          /* --------------------------------------- */

          <div className="p-5 text-center text-gray-500">
            No notes yet
          </div>

        ) : (

          /* --------------------------------------- */
          /* NOTES */
          /* --------------------------------------- */

          notes.map((note) => (

            <NoteCard
              key={note.id}

              note={note}

              activeViewId={activeView.id}

              isSelected={
                note.id === selectedNoteId
              }

              onSelectNote={onSelectNote}

              onToggleStar={onToggleStar}

              onArchive={onArchive}

              onMoveToTrash={onMoveToTrash}

              onUnarchive={onUnarchive}

              onRestoreFromTrash={
                onRestoreFromTrash
              }

              onPermanentlyDelete={
                onPermanentlyDelete
              }
            />

          ))

        )}

      </div>

    </div>
  );
};

export default ActiveViewTab;