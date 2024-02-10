"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useSpotify } from "../_hooks/useSpotify";

export default function CallbackPage() {
  const router = useRouter();
  const setToken = useSpotify((state) => state.setToken);

  useEffect(() => {
    const currentUrl = window.location.hash;
    const params = queryString.parse(currentUrl);
    setToken(params.access_token as string);
    router.push("/owner");
  }, []);

  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <text>{"You will be redirected to your app shortly"}</text>
      <div>
        <text>{"If you are not redirected after a 5 seconds "}</text>
        <text
          onClick={() => router.push("/owner")}
          className="text-blue-500 border-b-2 border-blue-300"
        >
          {"click here. "}
        </text>
      </div>
    </div>
  );
}
