import React from "react";
import { useNavigate } from 'react-router-dom';
import dots from "../../assets/icons/dots.svg";
import nextIcon from "../../assets/icons/nextIcon.svg";
import leftIcon from "../../assets/icons/leftIcon.svg";
import rightIcon from "../../assets/icons/rightIcon.svg";
import SortButton from "../sortButton";

interface TableItem {
  org: string;
  username: string;
  email: string;
  num: string;
  date: string;
  status: string;
}

const UserTableDiv = () => {
  const UsersTable: TableItem[] = [
    {
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      num: "08078903721",
      date: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      org: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      num: "08160780928",
      date: "Apr 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      org: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      num: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      org: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      num: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      org: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      num: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      org: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      num: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Active",
    },
    {
      org: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      num: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      org: "Lendstar",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      num: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      org: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      num: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "Inactive",
    },
  ];

  const navigate= useNavigate();


  return (
    <div className="flex flex-col gap-3">
      <SortButton />
      <div className="hidden sm:flex">
        <table className="w-[100%]">
          <thead>
            <tr className="text-[12px] lg:text-[14px] font-thin text-[#98AFAA]">
              <th className="py-3">ORGANIZATION</th>
              <th className="py-3">USERNAME</th>
              <th className="py-3">EMAIL</th>
              <th className="py-3">PHONE NUMBER</th>
              <th className="py-3 hidden lg:flex">DATE JOINED</th>
              <th className="py-3">STATUS</th>
              <th className="py-3"></th>
            </tr>
          </thead>

          <tbody className="text-[#545F7D] text-[12px] lg:text-[14px]">
            {UsersTable.map((val, key) => {
              return (
                <tr
                  onClick={() => navigate('/UsersDetails')}
                  key={key}
                  className=" hover:bg-slate-200 font-regular cursor-pointer border-b-2 border-[#213F7D1A] text-center"
                >
                  <td className="py-4">{val.org}</td>
                  <td className="py-4">{val.username}</td>
                  <td className="py-4">{val.email}</td>
                  <td className="py-4">{val.num}</td>
                  <td className="py-4 hidden lg:flex">{val.date}</td>
                  <td className="py-4 text-[10px] md:text-[12px]">
                    <div
                      className={`bg-blue-100 h-[25px] rounded-[100px] 
                      ${
                        val.status === "Active"
                          ? "text-[#39CD62] bg-[#61df8460]"
                          : val.status === "Pending"
                          ? "text-[#E9B200] bg-[#e9b3004d]"
                          : val.status === "Inactive"
                          ? "text-[#545F7D] bg-[#545f7d21]"
                          : val.status === "Blacklisted"
                          ? "text-[#E4033B] bg-[#e4033b37]"
                          : ""
                      }  font-semibold flex justify-center items-center`}
                    >
                      {val.status}
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <img className="cursor-pointer" src={dots} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex sm:hidden">
        <table className="w-[100%]">
          <tbody className="text-[#545F7D] text-[12px] w-[100%] lg:text-[14px]">
            {UsersTable.map((val, key) => {
              return (
                <tr
                  onClick={() => navigate('/UsersDetails')}
                  key={key}
                  className=" hover:bg-slate-200 font-regular cursor-pointer border-b-2 border-[#213F7D1A] text-center"
                >
                  <td className="py-4">
                    <tr className="flex flex-col gap-2 items-start font-semibold">
                      <td className="text-[18px]">{val.org}</td>
                      <td className="font-bold">{val.username}</td>
                    </tr>
                  </td>

                  <td className="py-4">
                    <tr className="flex flex-col gap-2 items-start font-semibold">
                      <td className=" text-[16px]">{val.num}</td>
                      <td className="">{val.email}</td>
                    </tr>
                  </td>

                  <td className="py-4 text-[10px] md:text-[12px]">
                    <div
                      className={`h-[25px] rounded-[100px] 
                      ${
                        val.status === "Active"
                          ? "text-[#39CD62] bg-[#61df8460]"
                          : val.status === "Pending"
                          ? "text-[#E9B200] bg-[#e9b3004d]"
                          : val.status === "Inactive"
                          ? "text-[#545F7D] bg-[#545f7d21]"
                          : val.status === "Blacklisted"
                          ? "text-[#E4033B] bg-[#e4033b37]"
                          : "bg-black"
                      }  font-semibold flex justify-center items-center`}
                    >
                      {val.status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col-reverse mt-5 gap-2 sm:gap-0 sm:flex-row justify-between text-[12px] lg:text-[14px]">
        <div className="flex text-[#545F7D] sm:gap-[10px] items-center">
          <p className="">Showing</p>
          <div className="bg-[#213F7D1A]  cursor-pointer w-[80px] h-[30px] font-semibold flex gap-3 justify-center items-center">
            <p className="text-[#213F7D]">100</p>
            <img src={nextIcon} />
          </div>

          <p>out of 100</p>
        </div>

        <div className="flex gap-[25px]">
          <div className="bg-[#213F7D1A] cursor-pointer w-[24px] h-[24px] flex justify-center items-center">
            <img src={leftIcon} />
          </div>

          <div className="flex text-[#545F7D] items-center gap-[25px]">
            <p className="text-[#545F7D] font-bold">1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>

            <p>15</p>
            <p>16</p>
          </div>

          <div className="bg-[#213F7D1A] cursor-pointer w-[24px] h-[24px] flex justify-center items-center">
            <img src={rightIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTableDiv;
