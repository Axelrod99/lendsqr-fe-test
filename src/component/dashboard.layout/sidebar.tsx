import React, { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';
import briefcase from "../../assets/briefcase.svg";
import dropdown from "../../assets/nb_dropdown.svg";
import home from "../../assets/home.svg";
import Dashboard from "../../pages/dashboard";
import userIcon from "../../assets/icons/users 1.svg";

type SidebarItemType = {
  name: string;
  icon: ReactNode;
  route: string;
};


const Sidebar = () => {
  const sideBarMenu: SidebarItemType[] = [
    {
      name: "Dashboard",
      icon: <img src={home} />,
      route: "/Dashboard",
    },
    {
      name: "User",
      icon: <img src={userIcon} />,
      route: "/User",
    },
  ];



  return (
    <div className="shadow-[#0000001c] shadow  w-full">
      <div className="flex flex-col py-[39px]">
        <div className="flex justify-between">
          <img src={briefcase} />
          <p className="text-[#213F7D] font-semibold">Switch Organization </p>
          <img src={dropdown} />
        </div>

        <div className="pt-8">
          <div className="flex gap-4">
            <img src={home} />
            <p className="text-[#213F7D]">Dashbord</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] font-semibold text-[#545F7D]">
              CUSTOMERS
            </p>
            {sideBarMenu.map(({ name, icon, route }, index) => (
              <div key={index}>
                <div>
                  <div className="icon">{icon}</div>
                  <p className="text-gray-9 font-medium text-base">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
