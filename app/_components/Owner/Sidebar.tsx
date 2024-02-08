import { ISidebarItem } from "@/app/_interfaces/Sidebar.interface";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = (props: any) => {
  return (
    <div className="h-screen min-w-[200px] bg-almost-white flex flex-col gap-4">
      <div className="h-[70px] flex items-center justify-center bg-sea-blue text-lg font-semibold text-almost-white ">
        Cafe de Lostar
      </div>
      <div className="flex flex-col gap-2">
        {SidebarItems.map((item) => {
          return <SidebarItem item={item}></SidebarItem>;
        })}
      </div>
    </div>
  );
};

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  return (
    <div className="h-[50px] flex items-center   hover:bg-light-gray ">
      <div className="ml-[35px]   flex gap-2">
        {item.icon && item.icon}
        {item.title}
      </div>
    </div>
  );
};
