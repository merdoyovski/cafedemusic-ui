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
    <main className="flex w-full h-full justify-center items-center gap-4">
      <Button
        text="Owner"
        className="bg-red-500 w-[100px] h-[30px] my-auto flex items-center justify-center rounded-xl"
        onClick={() => handleOwnerClick()}
      ></Button>
      <Button
        text="Customer"
        className="bg-blue-500  w-[100px] h-[30px] flex items-center justify-center  rounded-xl"
        onClick={() => handleCustomerClick()}
      ></Button>
    </main>
  );
}
