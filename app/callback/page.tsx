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

  return <div></div>;
}
