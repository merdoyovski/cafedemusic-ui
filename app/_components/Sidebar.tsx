import { ISidebarItem } from "@/app/_interfaces/Sidebar.interface";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = (props: any) => {
  return (
    <div className="h-screen min-w-[200px] bg-almost-white flex flex-col">
      <div className="h-[70px] flex items-center justify-center bg-sea-blue text-lg font-semibold text-almost-white ">
        Cafe de Lostar
      </div>
      <div className="flex flex-col   text-whiteish-gray">
        {SidebarItems.map((item) => {
          return (
            <SidebarItem
              setPage={props.setPage}
              item={item}
              key={item.id}
            ></SidebarItem>
          );
        })}
      </div>
    </div>
  );
};

const SidebarItem = ({
  item,
  setPage,
}: {
  item: ISidebarItem;
  setPage: any;
}) => {
  return (
    <div
      className="h-[60px] flex items-center   hover:bg-light-gray "
      onClick={() => setPage(item.path)}
    >
      <div className="ml-[35px]   flex gap-2">
        {item.icon && item.icon}
        {item.title}
      </div>
    </div>
  );
};
