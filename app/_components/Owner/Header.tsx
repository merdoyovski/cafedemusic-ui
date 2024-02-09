"use client";
import { authUrl } from "@/app/_providers/spotify.provider";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useSpotify } from "@/app/_hooks/useSpotify";
import { Button } from "../Button";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { cn } from "@/app/_utils/tw.utils";

export const Header = () => {
  const router = useRouter();
  const token = useSpotify((state) => state.token);

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
    <div className="w-full min-h-[70px] bg-almost-white flex items-center">
      <Button
        className={cn(
          "ml-16 bg-none text-almost-white w-auto p-2 rounded-md flex bg-spotify-green text-sm items-center transition-all"
        )}
        onClick={handleSpotifyClick}
        text={token ? "Spotify Connected" : "Connect Spotify"}
      >
        <FaSpotify className="w-4 h-4 mr-2 mb-0.5" />
      </Button>

      <div className="ml-auto mr-16 flex items-center gap-2 text-whiteish-gray">
        <FaRegUserCircle></FaRegUserCircle>Berkay Lostar
      </div>
    </div>
  );
};
/*
    fetch(authUrl);
    router.push(
      "https://accounts.spotify.com/authorize?" +
        qs.stringify({
          response_type: "token",
          client_id: "629325eceaea49948713d145ab966cdb",
          redirect_uri: "http://localhost:3000/",
          scope:
            "user-read-playback-state app-remote-control user-modify-playback-state playlist-read-private user-read-currently-playing",
        })
    );*/
