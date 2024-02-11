import { IMenuItem } from "@/app/_interfaces/MenuItem.interface";
import { Spotify } from "../Spotify/Spotify";
import { MenuItem } from "./Menu.item";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { useModal } from "@/app/_hooks/useModal";
import NewItemModal from "../Modals/AddMenuItem.modal";
import EditItemModal from "../Modals/EditMenuItem.modal";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";

export const MenuContent = (props: any) => {
  const [meals, setMeals] = useState<IMenuItem[]>([]);
  const [drinks, setDrinks] = useState<IMenuItem[]>([]);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const setAddNewItemModalOpen = useModal(
    (state) => state.setAddNewItemModalOpen
  );

  const style = {
    color: isOver ? "green" : undefined,
  };

  const setEditItemModalOpen = useModal((state) => state.setEditItemModalOpen);
  const editItemModalOpen = useModal((state) => state.editItemModalOpen);

  const menuItems: IMenuItem[] = [
    {
      title: "Cheeseburger",
      category: "Meal",
      description: "Classic cheeseburger",
      price: 10,
      image: "/burger.jpg",
    },
    {
      title: "Double Cheeseburger",
      category: "Meal",
      description: "Classic double cheeseburger",
      price: 12,
      image: "/double-cheese.jpg",
    },
    {
      title: "Americano",
      category: "Drink",
      description: "Classic Americano with our special beans",
      price: 5,
      image: "/americano.jpg",
    },
    {
      title: "Latte",
      category: "Drink",
      description: "Classic Latte with our special beans",
      price: 7,
      image: "/latte.png",
    },
    {
      title: "Americano",
      category: "Drink",
      description: "Classic Americano with our special beans",
      price: 5,
      image: "/americano.jpg",
    },
    {
      title: "Latte",
      category: "Drink",
      description: "Classic Latte with our special beans",
      price: 7,
      image: "/latte.png",
    },
    {
      title: "Americano",
      category: "Drink",
      description: "Classic Americano with our special beans",
      price: 5,
      image: "/americano.jpg",
    },
    {
      title: "Latte",
      category: "Drink",
      description: "Classic Latte with our special beans",
      price: 7,
      image: "/latte.png",
    },
  ];

  const handleNewItemClick = () => {
    setAddNewItemModalOpen();
  };

  useEffect(() => {
    // Separate meals and drinks based on their category
    const mealsArray = menuItems.filter((item) => item.category === "Meal");
    const drinksArray = menuItems.filter((item) => item.category === "Drink");

    // Set the state accordingly
    setMeals(mealsArray);
    setDrinks(drinksArray);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className=" w-full h-full shadow-[inset_0px_1px_10px_0px_rgba(0,0,0,0.1)]">
      <NewItemModal></NewItemModal>
      <EditItemModal></EditItemModal>
      <div className="flex p-16 gap-8 ">
        <div className="bg-almost-white w-full h-auto rounded-xl flex flex-col p-4 gap-4 shadow-sm">
          <div className="flex">
            <text className="text-3xl font-medium text-almost-black">Menü</text>
            <div
              className="ml-auto bg-light-gray w-auto h-[40px] rounded-md flex items-center justify-center px-2 cursor-pointer"
              onClick={() => handleNewItemClick()}
            >
              <IoMdAddCircleOutline></IoMdAddCircleOutline>
              Add New Item
            </div>
          </div>
          <text className="text-xl font-medium text-almost-black">
            Yemekler
          </text>

          <div ref={setNodeRef} style={style}>
            <div className="flex gap-4 flex-wrap">
              {meals.map((item) => (
                <MenuItem
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                ></MenuItem>
              ))}
            </div>
          </div>

          <text className="text-xl font-medium text-almost-black">
            İçecekler
          </text>
          <div className="flex gap-4 flex-wrap">
            {drinks.map((item) => (
              <MenuItem
                title={item.title}
                category={item.category}
                description={item.description}
                price={item.price}
                image={item.image}
              ></MenuItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
