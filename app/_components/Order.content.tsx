import { Spotify } from "./Spotify/Spotify";

export const OrderContent = (props: any) => {
  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 gap-4 shadow-sm">
          <text>Siparişler</text>
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Bugünki Müşteri Sayısı
        </div>
        <div className="bg-almost-white w-full h-[200px] rounded-xl flex flex-col p-4 shadow-sm">
          Toplam Kazanç
        </div>
      </div>
    </div>
  );
};
