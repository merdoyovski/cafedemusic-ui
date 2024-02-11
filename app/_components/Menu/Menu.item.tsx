"use client";
import { useModal } from "@/app/_hooks/useModal";
import { IMenuItem } from "@/app/_interfaces/MenuItem.interface";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export const MenuItem = (item: IMenuItem) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const setModalOpen = useModal((state) => state.setEditItemModalOpen);

  return (
    <div className="relative flex flex-col w-[299px] h-[250px] bg-gradient-to-b from-transparent from-50% to-sea-blue rounded-xl items-center justify-center gap-2 border-sea-blue border shadow-md">
      <FaRegEdit
        onClick={() => setModalOpen()}
        className="absolute top-2 right-2 cursor-pointer"
      ></FaRegEdit>
      <div className="h-[150px] w-[150px] overflow-hidden rounded-full border border-b-sea-blue border-t-light-gray mt-6">
        <Image
          src={item.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt=""
          className=""
        ></Image>
      </div>
      <div className="h-[25px]">{title}</div>
      <div className="h-[25px] text-sm text-almost-black w-[250px] text-wrap flex items-center justify-center  ">
        {description}
      </div>
      <div className="h-[25px]">{price + "₺"}</div>
    </div>
  );
};
