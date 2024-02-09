"use client";
import { MusicContent } from "../_components/Owner/Music.content";
import { Header } from "../_components/Owner/Header";
import { Sidebar } from "../_components/Owner/Sidebar";
import { Spotify } from "../_components/Spotify/Spotify";
import { useState } from "react";
import { OrderContent } from "../_components/Owner/Order.content";
import { SettingsContent } from "../_components/Owner/Settings.content";

export default function OwnerPage() {
  const [page, setPage] = useState("musics");

  let content;
  if (page === "musics") {
    content = <MusicContent />;
  } else if (page === "orders") {
    content = <OrderContent />;
  } else if (page === "settings") {
    content = <SettingsContent />;
  }

  return (
    <div className="bg-light-gray flex w-screen h-screen">
      <Sidebar setPage={setPage}></Sidebar>

      <div className="flex flex-col w-full h-full">
        <Header></Header>

        {content}
      </div>
    </div>
  );
}
