import { cn } from "@/lib/utils";
import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

interface sideNavProps {
  selectedIndex: (num: number) => void;
}

const SideNav = ({ selectedIndex }: sideNavProps) => {
  const menuList = [
    {
      id: 1,
      name: "图标",
      icon: PencilRuler
    },
    {
      id: 2,
      name: "背景",
      icon: Image
    },
    {
      id: 3,
      name: "升级",
      icon: Shield
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => {
          return (
            <h2
              onClick={() => {
                setActiveIndex(index);
                selectedIndex(index);
              }}
              className={cn(
                "p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-primary hover:text-white flex items-center gap-2",
                activeIndex === index && "bg-primary text-white"
              )}
              key={index}
            >
              <menu.icon />
              {menu.name}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
