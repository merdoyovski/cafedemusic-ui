"use client";
import Image from "next/image";
import { Button } from "./_components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCustomerClick = () => {
    router.push("/customer");
  };

  const handleOwnerClick = () => {
    router.push("/owner");
  };
  return (
    <main className="flex w-full h-full justify-center items-center gap-4 bg-light-gray">
      <div className="bg-almost-white w-[300px] h-[300px] rounded-xl shadow-md flex flex-col items-center">
        <text className="mt-4">{"Cafe de Lostar'a hoşgeldin!"}</text>
        <div className="flex mt-16 gap-2">
          <Button
            text="Üye ol"
            onClick={() => handleCustomerClick()}
            className="bg-sea-blue text-light-gray p-1 rounded-md px-2"
          ></Button>
          <Button
            text="Üye olmadan devam et"
            onClick={() => handleCustomerClick()}
            className="bg-blue-500 text-light-gray p-1 rounded-md"
          ></Button>
        </div>
        <Button
          text="Mekanın Sahibiyim"
          onClick={() => handleOwnerClick()}
          className="bg-purple-400 text-light-gray p-1 rounded-md mt-16"
        ></Button>
      </div>
    </main>
  );
}
/*

<Button
          text="Owner"
          className="bg-light-gray w-[100px] h-[30px] my-auto flex items-center justify-center rounded-xl"
          onClick={() => handleOwnerClick()}
        ></Button>
        <Button
          text="Customer"
          className="bg-blue-500  w-[100px] h-[30px] flex items-center justify-center  rounded-xl"
          onClick={() => handleCustomerClick()}
        ></Button>
        */
