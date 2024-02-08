import { Spotify } from "../Spotify/Spotify";

export const MusicContent = (props: any) => {
  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 gap-4 shadow-sm">
          <text>Şu an Çalıyor</text>
          <Spotify
            wide={true}
            link={
              "https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN?si=9bf076ce8bc24bc6"
            }
          ></Spotify>
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
