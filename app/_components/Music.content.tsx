"use client";
import { useEffect, useState } from "react";
import { Spotify } from "./Spotify/Spotify";
import {
  GetCurrentQueue,
  GetCurrentSong,
} from "@/app/_services/spotify.service";
import { useSpotify } from "@/app/_hooks/useSpotify";
import { ISong } from "@/app/_interfaces/Song.interface";
import { Button } from "./Button";
import { cn } from "../_utils/tw.utils";
import { FaSpotify } from "react-icons/fa";
import { useRouter } from "next/navigation";
import qs from "qs";
export const MusicContent = (props: any) => {
  const token = useSpotify((state) => state.token);
  const [currentSong, setCurrentSong] = useState("");
  const [queuedSongs, setQueuedSongs] = useState<ISong[]>([]);

  const getCurrentSong = async () => {
    const result = await GetCurrentSong(token);

    if (result.data === "") {
      setCurrentSong("No song playing");
      return;
    }
    const song = result.data.item.name;
    const artist = result.data.item.artists[0].name;
    if (!song || !artist) {
      return;
    }
    setCurrentSong(`${song} - ${artist}`);
  };

  const getCurrentQueue = async () => {
    const result = await GetCurrentQueue(token);

    const queue = result.data.queue;
    const queuedSongs: ISong[] = [];
    if (!queue) {
      return;
    }
    for (let song of queue) {
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

  const router = useRouter();

  const handleSpotifyClick = async () => {
    if (token) {
      return;
    }
    router.push(
      "https://accounts.spotify.com/authorize?" +
        qs.stringify({
          response_type: "token",
          client_id: "629325eceaea49948713d145ab966cdb",
          redirect_uri: "http://localhost:3000/callback",
          scope:
            "user-read-playback-state app-remote-control user-modify-playback-state playlist-read-private user-read-currently-playing",
        })
    );
  };

  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col  p-4 gap-4 shadow-sm">
          <div className="flex">
            <text>Şu an Çalıyor</text>
            <Button
              className={cn(
                " bg-none text-almost-white w-[130px] h-[40px] ml-auto p-2 rounded-md flex bg-spotify-green text-sm items-center transition-all "
              )}
              onClick={handleSpotifyClick}
              text={token ? "Spotify Bağlı" : "Spotify Bağla"}
            >
              <FaSpotify className="w-4 h-4 mr-2 mb-0.5" />
            </Button>
          </div>
          {currentSong}
        </div>
        <div className="bg-almost-white w-full h-auto rounded-xl flex flex-col p-4 shadow-sm">
          Sıradaki Şarkılar
          {queuedSongs.map((song, index) => (
            <div key={index}>{song.name + " - " + song.artist}</div>
          ))}
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Talep Edilen Şarkılar
        </div>
      </div>
    </div>
  );
};
