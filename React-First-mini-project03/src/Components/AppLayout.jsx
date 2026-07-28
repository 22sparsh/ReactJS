import { useState } from "react";
import ViewsTab from "./left/ViewsTab";
import ActiveViewTab from "./Mid/ActiveViewTab";
import NoteArea from "./Right/NoteArea";

const AppLayout = () => {
  let views = [
    {
      id: 0,
      name: "Notes",
      ico: "fa-regular fa-file-lines w-5  text-center text-base ml-2",
    },
    {
      id: 1,
      name: "Starred",
      ico: "fa-regular fa-star w-5  text-center text-base ml-2",
    },
    {
      id: 2,
      name: "Archived",
      ico: "fa-regular fa-bookmark w-5  text-center text-base ml-2 ",
    },
    {
      id: 3,
      name: "Trash",
      ico: "fa-regular fa-trash-can w-5  text-center text-base ml-2",
    },
  ];
  const [activeViewId, setActiveViewId] = useState(views[0].id);
  const activeView = views.find((view) => view.id === activeViewId);

  return (
    <div className="grid  text-zinc-800 grid-rows-[1fr_auto] grid-cols-[15vw_14vw_1fr] bg-white h-full">
      <ViewsTab
        views={views}
        activeViewId={activeViewId}
        onViewChange={setActiveViewId}
      />
      <ActiveViewTab activeView={activeView} />
      <NoteArea />
      <div className="col-span-3 border-t-2  border-gray-200 p-2">
        <div className="rounded-full bg-amber-500 w-6 h-6">d</div>
      </div>
    </div>
  );
};

export default AppLayout;
