import React from "react";
import Search from "../Utilities/Search";

const ActiveViewTab = (prop) => {

  // --------------------------------
  // ADD NEW NOTE
  // --------------------------------

  function handleAddNote() {
    prop.onAddNote();
  }

  // --------------------------------
  // SELECT NOTE
  // --------------------------------

  function handleSelectNote(noteId) {
    prop.onSelectNote(noteId);
  }

  return (
    <div className="border-r text-zinc-800 border-gray-300 flex flex-col min-h-0">

      {/* -------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------- */}

      <div className="flex flex-col h-fit border-b items-center pb-2 border-gray-400">

        <div className="flex h-fit w-full justify-between gap-2 p-3">

          {/* VIEW NAME */}

          <div className="flex justify-between h-fit gap-1 items-center">

            <i
              className={`${prop.activeView.ico} fa-lg`}
              style={{ marginLeft: 0 }}
            ></i>

            <h1 className="text-[1.3vw]">
              {prop.activeView.name}
            </h1>

          </div>

          {/* ADD BUTTON */}

          <div>

            <button
              className="bg-blue-400 w-2 h-2 flex justify-center items-center text-white text-xl rounded-full p-4 cursor-pointer active:bg-blue-200 hover:bg-blue-900 hover:text-white"
              onClick={handleAddNote}
            >
              +
            </button>

          </div>

        </div>

        {/* SEARCH */}

        <div>
          <Search />
        </div>

      </div>

      {/* -------------------------------- */}
      {/* NOTES LIST */}
      {/* -------------------------------- */}

      <div className="flex-1 overflow-y-auto">

        {prop.notes.length === 0 ? (

          // No saved notes
          <div className="p-5 text-center text-gray-500">
            No notes yet
          </div>

        ) : (

          // Saved notes
          prop.notes.map((note) => (

            <div
              key={note.id}
              onClick={() =>
                handleSelectNote(note.id)
              }
              className={`
                p-3
                border-b
                border-gray-200
                cursor-pointer
                transition
                ${
                  note.id === prop.selectedNoteId
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }
              `}
            >

              {/* NOTE TITLE */}

              <h2 className="font-semibold truncate">

                {note.title || "Untitled"}

              </h2>

              {/* NOTE CONTENT PREVIEW */}

              <p className="text-sm text-gray-500 truncate mt-1">

                {note.content || "No content"}

              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default ActiveViewTab;