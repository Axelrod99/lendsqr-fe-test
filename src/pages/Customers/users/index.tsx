import React, { useState } from "react";
import grid1 from "../../../assets/icons/grid1.svg";
import grid2 from "../../../assets/icons/grid2.svg";
import grid3 from "../../../assets/icons/grid3.svg";
import grid4 from "../../../assets/icons/grid4.svg";
import UserTableDiv from "../../../component/userTable";


const UsersPage = () => {
  const gridContent = [
    {
      color: "bg-[#e018ff39]",
      name: "USER",
      icons: grid1,
      nums: '2,453',
      
    },
    {
      color: "bg-[#5618ff38] ",
      name: "ACTIVE USERS",
      icons: grid2,
      nums: '2,453',
    },
    {
      color: "bg-[#f55f443e]",
      name: "USER WITH LOANS",
      icons: grid3,
      nums: '12,453',
    },
    {
      color: "bg-[#ff33664b]",
      name: "USER WITH SAVINGS",
      icons: grid4,
      nums: '102,453',
    },
  ];

  return (
    <div className="py-[60px] px-[25px] sm:px-[50px] bg-[#FBFBFB] ">
      <div className="flex flex-col gap-[40px]">
        <p className="text-[#213F7D] font-semibold text-[24px]">Users</p>

        <div className="grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-3 xs:gap-6 xl:gap-0">
          {gridContent.map(({ name, color, icons, nums }, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col shadow-[#0000001c] shadow rounded-[4px] 
              p-[15px] p-x[15px] sm:px-[30px] w-[100%] sm:w-[85%] xl:w-[240px] h-[160px] gap-[10px] sm:gap-[13px] bg-white"
            >
              <div
                className={`h-[40px] w-[40px] flex justify-center items-center rounded-[30px] ${color}`}
              >
                <img alt='/' src={icons} />
              </div>
              <p className="text-[#545F7D] text-[12px] xs:text-[14px] font-bold sm:font-semibold">
                {name}
              </p>
              <p className="text-[#213F7D] font-semibold text-[18px] xs:text-[24px]">
                {nums}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-[#0000001c] shadow p-[30px] rounded-[4px] flex flex-col justify-center ">
          <UserTableDiv />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
