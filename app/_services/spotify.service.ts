import axios from "axios";

export const GetCurrentSong = async (token: string) => {
  const axiosConfig = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const result = await axios(axiosConfig);

  return result;
};

export const GetCurrentQueue = async (token: string) => {
  const axiosConfig = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player/queue",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const result = await axios(axiosConfig);

  return result;
};
