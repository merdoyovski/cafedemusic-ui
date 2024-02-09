import { create } from "zustand";

interface SpotifyState {
  token: string;
  tokenType: string;
  setToken: (balance: string) => void;
}

export const useSpotify = create<SpotifyState>((set) => ({
  token: "",
  tokenType: "",
  setToken: (_token: string) => set((state) => ({ token: _token })),
}));
