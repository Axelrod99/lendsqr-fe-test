import React from "react";

const SortOptions = () => {
  return (
    <div className="bg-[#fff] shadow-[#00000044] shadow w-[200px] xs:w-[270px] rounded-[4px] flex items-center justify-center">
      <div className="flex flex-col gap-5 py-[30px] w-[95%] px-[5px]">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Organization
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="Select"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Username
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="User"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Email
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Date
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="Date"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Phone Number
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[#545F7D] flex justify-start text-[14px] font-semibold">
            Status
          </p>
          <div className="flex flex-col items-center w-full">
            <input
              className="h-[40px] w-[95%] rounded-[8px] font-semibold text-[14px] p-[10px] border border-[#21407d3e]"
              placeholder="Select"
            />
          </div>
        </div>

        <div className="flex gap-[14px] w-full px-2 pt-[10px]">
          <button className="h-[48px] border border-[#21407db3] text-[#21407da6] w-full text-[14px] rounded-[8px] font-bold">
            Reset
          </button>
          <button className="bg-[#39CDCC] h-[48px] w-full text-[14px] text-white rounded-[8px] font-bold">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortOptions;
