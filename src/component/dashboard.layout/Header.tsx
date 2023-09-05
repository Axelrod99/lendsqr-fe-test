import React, { Fragment, useState } from "react";
import Logo from "../../assets/logo.svg";
import Notification from "../../assets/notification.svg";
import DP from "../../assets/avatar.svg";
import nb_dropdown from "../../assets/nb_dropdown.svg";
import searchIcon from "../../assets/search.svg";

type HeadProps = {
  title?: string;
};

const Header = ({ title }: HeadProps) => {
  return (
    <div className="font-medium w-full px-3 lg:pr-14 py-4 border-b border-[#EFF0F0]  flex  flex-wrap gap-4 items-center text-sm h-[80px]">
      <div className="grow flex items-center justify-between h-[100%]">
        <div className="inline-flex gap-2 items-center ">
          <img src={Logo} />
        </div>

        <div className="md:flex border border-gray-300 hidden items-center rounded-[8px]">
          <input placeholder="Search for anything" className="rounded-l-[8px] h-[40px] w-[240px] lg:w-[400px] p-[10px]" />
          <div className="h-[40px] w-[45px] lg:w-[56px] bg-[#39CDCC] rounded-r-[8px] flex justify-center items-center">
            <img src={searchIcon} />
          </div>
        </div>

        <div className="flex gap-[13px] sm:gap-[35px] items-center text-[#213F7D]">
          <p className="underline hidden lg:flex">Docs</p>

          <div>
            <img src={Notification} />
          </div>

          <div>
            <img src={DP} />
          </div>

          <div className="gap-[4px] flex">
            <p className="hidden sm:flex">Adedeji</p>
            <div>
              <img src={nb_dropdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
