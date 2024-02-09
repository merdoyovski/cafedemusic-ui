"use client";
import { useEffect, useState } from "react";
import { Spotify } from "../Spotify/Spotify";
import { GetCurrentSong } from "@/app/_services/spotify.service";
import { useSpotify } from "@/app/_hooks/useSpotify";

export const MusicContent = (props: any) => {
  const token = useSpotify((state) => state.token);
  const [currentSong, setCurrentSong] = useState("");

  const getCurrentSong = async () => {
    if (!token) {
      return;
    }
    const result = await GetCurrentSong(token);
    console.log("result", result);
    const song = result.data.item.name;
    const artist = result.data.item.artists[0].name;
    if (!song || !artist) {
      return;
    }
    setCurrentSong(`${song} - ${artist}`);
  };

  useEffect(() => {
    getCurrentSong();
  }, [token]);
  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 gap-4 shadow-sm">
          <text>Şu an Çalıyor</text>
          {currentSong}
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Sıradaki Şarkılar
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Talep Edilen Şarkılar
        </div>
      </div>
    </div>
  );
};
