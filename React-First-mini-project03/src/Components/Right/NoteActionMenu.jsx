import React from "react";

const NoteActionMenu = ({
  note,
  activeViewId,

  onToggleStar,
  onArchive,
  onUnarchive,

  onMoveToTrash,
  onRestoreFromTrash,
  onPermanentlyDelete,
}) => {
  return (
    <div
      className="
        absolute
        right-0
        top-9
        z-50
        w-48
        bg-white
        border
        border-gray-200
        rounded-lg
        shadow-lg
        overflow-hidden
      "
      onClick={(event) => {
        event.stopPropagation();
      }}
    >

      {/* ========================================= */}
      {/* NOTES VIEW */}
      {/* ========================================= */}

      {activeViewId === 0 && (
        <>

          {/* STAR / UNSTAR */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
            "
            onClick={() => {
              onToggleStar(note.id);
            }}
          >
            <i
              className={
                note.isStarred
                  ? "fa-solid fa-star"
                  : "fa-regular fa-star"
              }
            ></i>

            <span>
              {note.isStarred
                ? "Unstar"
                : "Star"}
            </span>
          </button>


          {/* ARCHIVE */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
            "
            onClick={() => {
              onArchive(note.id);
            }}
          >
            <i className="fa-regular fa-bookmark"></i>

            <span>
              Archive
            </span>
          </button>


          {/* MOVE TO TRASH */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
              text-red-600
            "
            onClick={() => {
              onMoveToTrash(note.id);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>

            <span>
              Move to Trash
            </span>
          </button>

        </>
      )}


      {/* ========================================= */}
      {/* STARRED VIEW */}
      {/* ========================================= */}

      {activeViewId === 1 && (
        <>

          {/* ARCHIVE */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
            "
            onClick={() => {
              onArchive(note.id);
            }}
          >
            <i className="fa-regular fa-bookmark"></i>

            <span>
              Archive
            </span>
          </button>


          {/* MOVE TO TRASH */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
              text-red-600
            "
            onClick={() => {
              onMoveToTrash(note.id);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>

            <span>
              Move to Trash
            </span>
          </button>

        </>
      )}


      {/* ========================================= */}
      {/* ARCHIVED VIEW */}
      {/* ========================================= */}

      {activeViewId === 2 && (
        <>

          {/* UNARCHIVE */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
            "
            onClick={() => {
              onUnarchive(note.id);
            }}
          >
            <i className="fa-regular fa-bookmark"></i>

            <span>
              Unarchive
            </span>
          </button>


          {/* MOVE TO TRASH */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
              text-red-600
            "
            onClick={() => {
              onMoveToTrash(note.id);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>

            <span>
              Move to Trash
            </span>
          </button>

        </>
      )}


      {/* ========================================= */}
      {/* TRASH VIEW */}
      {/* ========================================= */}

      {activeViewId === 3 && (
        <>

          {/* RESTORE */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
            "
            onClick={() => {
              onRestoreFromTrash(note.id);
            }}
          >
            <i className="fa-solid fa-rotate-left"></i>

            <span>
              Restore
            </span>
          </button>


          {/* DELETE FOREVER */}

          <button
            type="button"
            className="
              w-full
              px-4
              py-2
              text-left
              hover:bg-gray-100
              flex
              items-center
              gap-3
              text-red-600
            "
            onClick={() => {
              onPermanentlyDelete(note.id);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>

            <span>
              Delete Forever
            </span>
          </button>

        </>
      )}

    </div>
  );
};

export default NoteActionMenu;