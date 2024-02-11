"use client";
import { MusicContent } from "../_components/Music.content";
import { Header } from "../_components/Header";
import { Sidebar } from "../_components/Sidebar";
import { Spotify } from "../_components/Spotify/Spotify";
import { useEffect, useState } from "react";
import { OrderContent } from "../_components/Order.content";
import { SettingsContent } from "../_components/Settings.content";
import { MenuContent } from "../_components/Menu/Menu.content";
import { LoadingContent } from "../_components/Loading.content";

export default function OwnerPage() {
  const [page, setPage] = useState("");

  let content;
  if (page === "musics") {
    content = <MusicContent />;
  } else if (page === "orders") {
    content = <OrderContent />;
  } else if (page === "settings") {
    content = <SettingsContent />;
  } else if (page === "menu") {
    content = <MenuContent />;
  } else {
    content = <LoadingContent />;
  }

  useEffect(() => {
    if (page === "") {
      return;
    }
    localStorage.setItem("page", page);
    console.log(page);
  }, [content]);

  useEffect(() => {
    const page = localStorage.getItem("page");

    console.log(page);
    setPage(page || "orders");
  }, []);

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
