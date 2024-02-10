"use client";
import { useEffect, useState } from "react";
import { Spotify } from "../Spotify/Spotify";
import {
  GetCurrentQueue,
  GetCurrentSong,
} from "@/app/_services/spotify.service";
import { useSpotify } from "@/app/_hooks/useSpotify";
import { ISong } from "@/app/_interfaces/Song.interface";
export const MusicContent = (props: any) => {
  const token = useSpotify((state) => state.token);
  const [currentSong, setCurrentSong] = useState("");
  const [queuedSongs, setQueuedSongs] = useState<ISong[]>([]);

  const getCurrentSong = async () => {
    const result = await GetCurrentSong(token);
    const song = result.data.item.name;
    const artist = result.data.item.artists[0].name;
    if (!song || !artist) {
      return;
    }
    setCurrentSong(`${song} - ${artist}`);
  };

  const getCurrentQueue = async () => {
    const result = await GetCurrentQueue(token);
    console.log("result", result);
    const queue = result.data.queue;
    const queuedSongs: ISong[] = [];
    for (let song of queue) {
      console.log("song", song);
      const artist = song.artists[0].name;
      const name = song.name;
      const image = song.album.images[0].url;
      const album = song.album.name;
      queuedSongs.push({
        id: song.id,
        name,
        artist,
        album,
        image,
      });
    }

    setQueuedSongs(queuedSongs);
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    getCurrentSong();
    getCurrentQueue();
  }, [token]);

  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 gap-4 shadow-sm">
          <text>Şu an Çalıyor</text>
          {currentSong}
        </div>
        <div className="bg-almost-white w-full h-auto rounded-xl flex flex-col p-4 shadow-sm">
          Sıradaki Şarkılar
          {queuedSongs.map((song) => (
            <div>{song.name + " - " + song.artist}</div>
          ))}
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Talep Edilen Şarkılar
        </div>
      </div>
    </div>
  );
};
