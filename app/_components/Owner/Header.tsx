import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full min-h-[70px] bg-almost-white flex items-center">
      <div className="ml-auto mr-16 flex items-center gap-2">
        <FaRegUserCircle></FaRegUserCircle>Berkay Lostar
      </div>
    </div>
  );
};
