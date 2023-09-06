// import React from 'react'

// const SmallerSidebar = () => {
//   return (
//     <div>SmallerSidebar</div>
//   )
// }

// export default SmallerSidebar

import React, { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import user_friends from "../../assets/newIcons/user-friends.svg";
import guarantor from "../../assets/newIcons/users 1.svg";
import sack from "../../assets/newIcons/sack 1.svg";
import handshake from "../../assets/newIcons/handshake-regular 1.svg";
import savings from "../../assets/newIcons/piggy-bank 1.svg";
import loanRequest from "../../assets/newIcons/loanRequest.svg";
import whitelist from "../../assets/newIcons/whitelist.svg";
import karma from "../../assets/newIcons/user-times 1.svg";
import briefcase from "../../assets/newIcons/briefcase 1.svg";
import bank from "../../assets/newIcons/bank.svg";
import Sevices from "../../assets/newIcons/services.svg";
import coins from "../../assets/newIcons/coins-solid 1.svg";
import serviceAccount from "../../assets/newIcons/serviceAccount.svg";
import servicess from "../../assets/newIcons/servicess.svg";
import settlement from "../../assets/newIcons/settlement.svg";
import badge from "../../assets/newIcons/badge-percent 1.svg";
import Clipboard from "../../assets/newIcons/clipboard-list 1.svg";
import tyre from "../../assets/newIcons/tire 1.svg";
import signout from "../../assets/newIcons/sign-out 1.svg";
import dropdown from "../../assets/dropdown.svg";
import home from "../../assets/home.svg";

type SidebarItemType = {
  name: string;
  icon: ReactNode;
  route: string;
};

const HeaderSideBarMenu: SidebarItemType[] = [
  {
    name: "Dashboard",
    icon: <img src={home} />,
    route: "/Dashboard",
  },
];

const SmallerSidebar = () => {
  const CustomerSideBarMenu: SidebarItemType[] = [
    {
      name: "User",
      icon: <img src={user_friends} />,
      route: "/Users",
    },
    {
      name: "Guarantor",
      icon: <img src={guarantor} />,
      route: "/Guarantors",
    },
    {
      name: "Loans",
      icon: <img src={sack} />,
      route: "/Loans",
    },
    {
      name: "Decision Models",
      icon: <img src={handshake} />,
      route: "/Decision-Models",
    },
    {
      name: "Savings",
      icon: <img src={savings} />,
      route: "/Savings",
    },
    {
      name: "Loan Request",
      icon: <img src={loanRequest} />,
      route: "/Loan-Request",
    },
    {
      name: "Whitelist",
      icon: <img src={whitelist} />,
      route: "/Whitelist",
    },
    {
      name: "Karma",
      icon: <img src={karma} />,
      route: "/Karma",
    },
  ];

  const BusinessesSideBarMenu: SidebarItemType[] = [
    {
      name: "Organization",
      icon: <img src={briefcase} />,
      route: "/Organization",
    },
    {
      name: "Loan Product",
      icon: <img src={loanRequest} />,
      route: "/Loan-Product",
    },
    {
      name: "Savings Product",
      icon: <img src={bank} />,
      route: "/Savings-Product",
    },
    {
      name: "Fees and Charge",
      icon: <img src={coins} />,
      route: "/Fees-and-Service",
    },
    {
      name: "Transactions",
      icon: <img src={Sevices} />,
      route: "/Transactions",
    },
    {
      name: "Services",
      icon: <img src={servicess} />,
      route: "/Services",
    },
    {
      name: "Service Account",
      icon: <img src={serviceAccount} />,
      route: "/Service-Account",
    },
    {
      name: "Settlement",
      icon: <img src={settlement} />,
      route: "/Settlement",
    },
    {
      name: "Reports",
      icon: <img src={serviceAccount} />,
      route: "/Reports",
    },
  ];

  const SettingsSideBarMenu: SidebarItemType[] = [
    {
      name: "Preferences",
      icon: <img src={settlement} />,
      route: "/Preferences",
    },
    {
      name: "Fees and Pricing",
      icon: <img src={badge} />,
      route: "/Fees-and-Pricing",
    },
    {
      name: "Audit Logs",
      icon: <img src={Clipboard} />,
      route: "/Audit-Logs",
    },
    {
      name: "Systems Messages",
      icon: <img src={tyre} />,
      route: "/Systems-Messages",
    },
  ];

  const LogoutSideBarMenu: SidebarItemType[] = [
    {
      name: "Logout",
      icon: <img src={signout} />,
      route: "/",
    },
  ];

  return (
    <div className="shadow-[#0000001c] flex lg:hidden bg-white shadow w-full">
      <div className="flex flex-col py-[39px] h-[600px] overflow-y-scroll">
        <div className="pb-5 pl-6 gap-2 xl:gap-3 flex">
          <div className="mt-[5px] hover:text-[#1D4C41]">
            <img src={briefcase} />
          </div>
          <p className=" font-semibold text-[12px] mt-[3px] lg:text-[14px] xl:text-[16px] text-[#213F7D] hover:text-[#1D4C41]">
            Switch Organization
          </p>
          <div className="mr-3 mt-[7px] hover:text-[#1D4C41]">
            <img src={dropdown} />
          </div>
        </div>

        <div className=" flex flex-col pl-4 pr-3 justify-between">
          {HeaderSideBarMenu.map(({ name, icon, route }) => (
            <NavLink
              to={route}
              key={name}
              className={({ isActive }) =>
                isActive
                  ? "flex mt-2 py-3 hover:bg-[#F6FBF6] bg-[#39cdcd17] text-[#1D4C41] rounded-sm p-2"
                  : "flex flex-row mt-2 py-3 hover:bg-[#F6FBF6] text-[#8EA5A0] hover:text-[#1D4C41] rounded-sm p-2"
              }
            >
              <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">{icon}</div>
              <p className=" font-semibold text-[16px] mdLg:text-sm hover:text-[#1D4C41]">
                {name}
              </p>
            </NavLink>
          ))}
        </div>

        <div className=" flex flex-col pl-4 pr-3 justify-between">
          <div className="mt-4 ">
            <p className="text-[#545F7D] text-[12px] font-black">CUSTOMER</p>
            {CustomerSideBarMenu.map(({ name, icon, route }) => (
              <NavLink
                to={route}
                key={name}
                className={({ isActive }) =>
                  isActive
                    ? "flex mt-2 py-3 hover:bg-[#F6FBF6] bg-[#39cdcd17] text-[#1D4C41] rounded-sm p-2"
                    : "flex flex-row mt-2 py-3 hover:bg-[#F6FBF6] text-[#8EA5A0] hover:text-[#1D4C41] rounded-sm p-2"
                }
              >
                <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">{icon}</div>
                <p className=" font-semibold text-[16px] mdLg:text-sm hover:text-[#1D4C41]">
                  {name}
                </p>
              </NavLink>
            ))}
          </div>
        </div>

        <div className=" flex flex-col pl-4 pr-3 justify-between">
          <div className="mt-4 ">
            <p className="text-[#545F7D] text-[12px] font-black">BUSINESSES</p>
            {BusinessesSideBarMenu.map(({ name, icon, route }) => (
              <NavLink
                to={route}
                key={name}
                className={({ isActive }) =>
                  isActive
                    ? "flex mt-2 py-3 hover:bg-[#F6FBF6] bg-[#39cdcd17] text-[#1D4C41] rounded-sm p-2"
                    : "flex flex-row mt-2 py-3 hover:bg-[#F6FBF6] text-[#8EA5A0] hover:text-[#1D4C41] rounded-sm p-2"
                }
              >
                <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">{icon}</div>
                <p className=" font-semibold text-[16px] mdLg:text-sm hover:text-[#1D4C41]">
                  {name}
                </p>
              </NavLink>
            ))}
          </div>
        </div>

        <div className=" flex flex-col pl-4 pr-3 justify-between">
          <div className="mt-4 ">
            <p className="text-[#545F7D] text-[12px] font-black">SETTINGS</p>
            {SettingsSideBarMenu.map(({ name, icon, route }) => (
              <NavLink
                to={route}
                key={name}
                className={({ isActive }) =>
                  isActive
                    ? "flex mt-2 py-3 hover:bg-[#F6FBF6] bg-[#39cdcd17] text-[#1D4C41] rounded-sm p-2"
                    : "flex flex-row mt-2 py-3 hover:bg-[#F6FBF6] text-[#8EA5A0] hover:text-[#1D4C41] rounded-sm p-2"
                }
              >
                <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">{icon}</div>
                <p className=" font-semibold text-[16px] mdLg:text-sm hover:text-[#1D4C41]">
                  {name}
                </p>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-[65px] border-t">
          {LogoutSideBarMenu.map(({ name, icon, route }) => (
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "flex mt-2 py-3 hover:bg-[#F6FBF6] bg-[#39cdcd17] text-[#1D4C41] rounded-sm p-2"
                  : "flex flex-row mt-2 py-3 hover:bg-[#F6FBF6] text-[#8EA5A0] hover:text-[#1D4C41] rounded-sm p-2"
              }
            >
              <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">{icon}</div>
              <p className=" font-semibold text-[16px] mdLg:text-sm hover:text-[#1D4C41]">
                {name}
              </p>
            </NavLink>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SmallerSidebar;
