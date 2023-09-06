import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import arrowBack from "../../../assets/icons/arrowBack.svg";
import user from "../../../assets/icons/user.svg";
import { scrolls } from "../../../utils/data";
import GeneralDetails from "./activeTabs/generalDetails";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState(scrolls[0].name);
  const navigate= useNavigate();

  return (
    <div className="py-[60px] px-[25px] sm:px-[50px] flex flex-col gap-[30px]">
      <div onClick={() => navigate('/Users')} className="flex cursor-pointer w-40 gap-[10px] items-center">
        <img src={arrowBack} />
        <p className="text-[#545F7D] font-semibold">Back to Users</p>
      </div>

      <div className="flex justify-between pt-[10px]">
        <p className="text-[#213F7D] text-[18px] md:text-[22px] sm:text-[24px] font-semibold">User Details</p>
        <div className="text-[14px] flex gap-1 sm:gap-5">
          <button className="h-[30px] sm:h-[36px] md:h-[40px] w-[90px] sm:w-[140px] md:w-[170px] text-[10px] sm:text-[14px] md:text-[16px] font-semibold rounded-[8px] text-[#E4033B] border border-[#E4033B]">
            BLACKLIST USER
          </button>
          <button className="h-[30px] sm:h-[36px] md:h-[40px] w-[90px] sm:w-[140px] md:w-[170px] text-[10px] sm:text-[14px] md:text-[16px] font-semibold rounded-[8px] text-[#39CDCC] border border-[#39CDCC]">
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className="shadow-[#0000001c] h-[190px] relative bg-white shadow  w-full p-[30px]">
        <div className="grid grid-cols-3 justify-items-center xl:justify-items-start">
          <div className="flex gap-6">
            <div className="rounded-[100px] h-[100px] w-[100px] flex justify-center items-center bg-[#21407d38]">
              <img src={user} />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[22px] font-semibold text-[#213F7D]">
                Grace Effiom
              </p>
              <p className="text-[14px] text-[#545F7D]">LSQFf587g90</p>
            </div>
          </div>

          <div className="flex md:w-[50%] px-5 flex-col gap-2 justify-center border-x border-[#545f7d50]">
            <p className="text-[#545F7D] font-semibold">User's Tier</p>
            <p>***</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[22px] font-semibold text-[#213F7D]">
              ₦200,000.00
            </p>
            <p className="text-[14px] text-[#545F7D] font-bold">
              9912345678/Providus Bank
            </p>
          </div>
        </div>

        <div className="absolute w-full left-0 bottom-0">
          <div className="flex w-full text-[14px] lg:text-[16px] justify-around text-[#545f7d] font-semibold">
            {scrolls.map((items) => (
              <p
                className={`cursor-pointer ${
                  activeTab === items.name
                    ? "border-b-[#39CDCC] border-b-2 text-[#39CDCC]"
                    : ""
                }`}
                onClick={() => setActiveTab(items.name)}
              >
                {items.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      {activeTab === scrolls[0].name && <GeneralDetails />}
      {activeTab === scrolls[1].name && <div>Document</div>}
      {activeTab === scrolls[2].name && <div>Bank Details</div>}
      {activeTab === scrolls[3].name && <div>Loans</div>}
      {activeTab === scrolls[4].name && <div>Saving</div>}
      {activeTab === scrolls[5].name && <div>App and System</div>}
      <div></div>
    </div>
  );
};

export default UserDetails;
