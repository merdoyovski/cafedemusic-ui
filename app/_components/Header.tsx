"use client";
import { authUrl } from "@/app/_providers/spotify.provider";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useSpotify } from "@/app/_hooks/useSpotify";
import { Button } from "./Button";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { cn } from "@/app/_utils/tw.utils";

export const Header = () => {
  return (
    <div className="w-full min-h-[70px] bg-almost-white flex items-center">
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
