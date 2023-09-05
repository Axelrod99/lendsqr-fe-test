import React from "react";
import LoginImage from "../../assets/logout-image.svg";
import Logo from "../../assets/logo.svg";

const LoginPages = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden md:flex flex-col gap-24 w-full">
        <div className="mt-[40px] ml-[30px]">
          <img src={Logo} />
        </div>

        <div className="flex justify-center mt-20 lg:mt-[58px] xl:mt-10">
          <img src={LoginImage} />
        </div>
      </div>

      <div className="flex flex-col w-full mt-10 md:mt-0 md:justify-center md:items-center">
        <div className="ml-7 md:ml-0 flex md:hidden">
          <img src={Logo} />
        </div>

        <div className="w-full flex flex-col items-center mt-28 md:mt-0">
          <div className="flex flex-col gap-[10px] w-[85%] md:w-[75%]">
            <p className="text-[#213F7D] text-[40px] font-bold">Welcome!</p>
            <p className="text-[#545F7D]">Enter details to login.</p>
          </div>

          <div className="flex flex-col gap-[24px] w-[85%] md:w-[75%] mt-[60px]">
            <input
              className="border border-[#545F7D26] h-[50px] text-[#545F7D] rounded-[8px] p-[10px]"
              placeholder="Email"
            />

            <input
              className="border border-[#545F7D26] h-[50px] text-[#545F7D] rounded-[8px] p-[10px]"
              placeholder="Password"
            />
          </div>

          <div className="w-[85%] md:w-[75%] flex flex-col mt-6 gap-[30px]">
            <p className="cursor-pointer w-32 text-[12px] font-semibold text-[#39CDCC]">
              FORGOT PASSWORD?
            </p>

            <button className="text-xs text-white bg-[#39CDCC] h-[48px] rounded-[8px]">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
