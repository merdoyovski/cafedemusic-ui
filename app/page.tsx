"use client";
import Image from "next/image";
import { Button } from "./_components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOwnerClick = () => {
    router.push("/owner");
  };

  return (
    <main className="flex w-full h-full justify-center items-center gap-4 bg-light-gray">
      <div className="bg-almost-white w-[300px] h-[300px] rounded-xl shadow-md flex flex-col items-center">
        <text className="mt-4">{"Cafe de Lostar'a hoşgeldin!"}</text>
        <Button
          text="Giriş Yap"
          onClick={() => handleOwnerClick()}
          className="bg-purple-400 text-light-gray p-1 rounded-md mt-16 px-2"
        ></Button>
      </div>
    </main>
  );
}
