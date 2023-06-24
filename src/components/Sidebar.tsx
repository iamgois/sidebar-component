"use client";

import {
  Grip,
  Inbox,
  Clock3,
  Users,
  Folder,
  Bookmark,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <ul
      className={
        open
          ? "text-zinc-500 bg-zinc-800 absolute h-screen flex flex-col items-start gap-2 py-4 px-3 list-none [&>*:last-child]:absolute [&>*:last-child]:bottom-4 [&>*:last-child]:gap-0 shadow-xl rounded-r-xl"
          : "text-zinc-500 bg-zinc-800 absolute h-screen flex flex-col items-center gap-2 py-4 px-3 list-none [&>*:last-child]:absolute [&>*:last-child]:bottom-4 [&>*:last-child]:gap-0 shadow-xl rounded-r-xl"
      }
    >
      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Grip className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Home</p>
      </li>

      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Inbox className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Inbox</p>
      </li>

      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Clock3 className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Clock</p>
      </li>

      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Users className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Users</p>
      </li>

      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Folder className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Paths</p>
      </li>

      <li className="hover:bg-zinc-700 p-2 rounded-lg cursor-pointer hover:text-zinc-100 flex gap-4">
        <Bookmark className="w-6 h-6" />
        <p className={open ? "" : "hidden"}>Bookmarks</p>
      </li>

      <li className="hover:bg-zinc-700 rounded-lg cursor-pointer hover:text-zinc-100 flex items-center justify-center">
        <ChevronRight
          onClick={() => setOpen(true)}
          size={36}
          className={"w-12 h-12" && open ? "hidden" : ""}
        />
        <ChevronLeft
          onClick={() => setOpen(false)}
          size={36}
          className={"w-8 h-8 hidden" && open ? "" : "hidden"}
        />
      </li>
    </ul>
  );
}
