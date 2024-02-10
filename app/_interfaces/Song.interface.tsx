export interface ISong {
  id: number;
  name: string;
  artist: string | string[];
  album: string;
  url?: string;
  image?: string;
}
