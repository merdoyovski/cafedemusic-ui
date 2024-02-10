import { ISidebarItem } from "../_interfaces/Sidebar.interface";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMusicSpeaker } from "react-icons/cg";
import { MdOutlineFastfood } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";

export const IconSize = 24;

export const SidebarItems: ISidebarItem[] = [
  {
    id: 0,
    title: "Siparişler",
    path: "orders",
    icon: <MdOutlineFastfood size={IconSize} />,
  },
  {
    id: 1,
    title: "Menü",
    path: "menu",
    icon: <IoMdBook size={IconSize} />,
  },
  {
    id: 2,
    title: "Müzikler",
    path: "musics",
    icon: <CgMusicSpeaker size={IconSize} />,
  },
  {
    id: 3,
    title: "Analitik",
    path: "analytics",
    icon: <TbReportAnalytics size={IconSize} />,
  },
  {
    id: 4,
    title: "Ayarlar",
    path: "settings",
    icon: <IoSettingsOutline size={IconSize} />,
  },
];
