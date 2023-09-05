import React, { useState } from "react";
import grid1 from "../../../assets/icons/grid1.svg";
import grid2 from "../../../assets/icons/grid2.svg";
import grid3 from "../../../assets/icons/grid3.svg";
import grid4 from "../../../assets/icons/grid4.svg";
import dots from "../../../assets/icons/dots.svg";
import filter from "../../../assets/icons/filter.svg";
import np_activate from "../../../assets/icons/np-activate.svg";
import np_blacklist from "../../../assets/icons/np-blacklist.svg";
import np_view from "../../../assets/icons/np-view.svg";
import nextIcon from '../../../assets/icons/nextIcon.svg'
import leftIcon from '../../../assets/icons/leftIcon.svg'
import rightIcon from '../../../assets/icons/rightIcon.svg'

interface TableItem {
  org: string;
  username: string;
  email: string;
  num: string;
  date: string;
  status: string;
}

const UsersPage = () => {
  const [showOrganization, setShowOrganization] = useState(false);

  const toggleSortModal = () => {
    setShowOrganization(!showOrganization)
  }

  const gridContent = [
    {
      color: "bg-[#e018ff39]",
      name: "USER",
      icons: grid1,
    },
    {
      color: "bg-[#5618ff38] ",
      name: "ACTIVE USERS",
      icons: grid2,
    },
    {
      color: "bg-[#f55f443e]",
      name: "USER WITH LOANS",
      icons: grid3,
    },
    {
      color: "bg-[#ff33664b]",
      name: "USER WITH SAVINGS",
      icons: grid4,
    },
  ];

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

  return (
    <div className="py-[60px] px-[25px] sm:px-[50px] bg-[#FBFBFB] shadow-gray-300 shadow">
      <div className="flex flex-col gap-[40px]">
        <p className="text-[#213F7D] font-semibold text-[24px]">Users</p>

        <div className="grid grid-cols-2 xl:grid-cols-4 justify-items-center gap-3 xs:gap-6 xl:gap-0">
          {gridContent.map(({ name, color, icons }, index) => (
            <div
              key={index}
              className="flex flex-col shadow-[#0000001c] shadow rounded-[4px]  p-[15px] p-x[15px] sm:px-[30px] w-[100%] sm:w-[85%] xl:w-[240px] h-[160px] gap-[10px] sm:gap-[13px] bg-white"
            >
              <div
                className={`h-[40px] w-[40px] flex justify-center items-center rounded-[30px] ${color}`}
              >
                <img src={icons} />
              </div>
              <p className="text-[#545F7D] text-[12px] xs:text-[14px] font-bold sm:font-semibold">
                {name}
              </p>
              <p className="text-[#213F7D] font-semibold text-[18px] xs:text-[24px]">
                2,453
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-[#0000001c] shadow p-[30px] rounded-[4px] hidden sm:flex flex-col justify-center ">
          <div className="flex flex-col">
            <div onClick={toggleSortModal} className="flex cursor-pointer gap-30 w-[114px] h-[36px] justify-between items-center p-[10px] rounded-md border border-[#213F7D1A] font-semibold text-[14px] text-[#21407ddd]">
              <p>Sort by</p>
              <img src={filter} />
            </div>
            {showOrganization && (
              <div  className="z-[999] absolute top-[670px] xl:top-[485px]">
                <div className="bg-[#fff] shadow-[#00000044] shadow w-[270px] rounded-[4px] flex items-center justify-center">
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
              </div>
            )}
          </div>

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
                    key={key}
                    className="text-[#213F7D] hover:bg-slate-200 font-regular cursor-pointer border-b-2 border-[#213F7D1A] text-center"
                  >
                    <td className="py-4">{val.org}</td>
                    <td className="py-4">{val.username}</td>
                    <td className="py-4">{val.email}</td>
                    <td className="py-4">{val.num}</td>
                    <td className="py-4 hidden lg:flex">{val.date}</td>
                    <td className="py-4 text-[10px] md:text-[12px]">
                      <div className="bg-red-200 h-[25px] rounded-[100px] flex justify-center items-center">
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

        <div className="flex justify-between text-[12px] lg:text-[14px]">
          <div className="flex text-[#545F7D] gap-[10px] items-center">
            <p className="">Showing</p>
            <div className="bg-[#213F7D1A] w-[80px] h-[30px] font-semibold flex gap-3 justify-center items-center">
              <p className="text-[#213F7D]">100</p>
              <img src={nextIcon}/>
            </div>

            <p>out of 100</p>
          </div>

          <div className="flex gap-[25px]">
            <div className="bg-[#213F7D1A] w-[24px] h-[24px] flex justify-center items-center">
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

            <div className="bg-[#213F7D1A] w-[24px] h-[24px] flex justify-center items-center">
              <img src={rightIcon} />
            </div>
          </div>
        </div>

        {/* <div className="bg-[#fff] shadow-[#00000044] shadow w-[180px] h-[130px] rounded-[4px] flex items-center justify-center font-semibold">
          <div className="w-full flex flex-col gap-1">
            <div className="flex gap-2 justify-center h-9 items-center cursor-pointer">
              <img src={np_view} />
              <p className="text-[#213F7D] text-[14px]">View Details</p>
            </div>
            <div className="flex gap-2 justify-center h-9 items-center cursor-pointer">
              <img src={np_blacklist} />
              <p className="text-[#213F7D] text-[14px]">Blacklist User</p>
            </div>
            <div className="flex gap-2 justify-center h-9 items-center cursor-pointer">
              <img src={np_activate} />
              <p className="text-[#213F7D] text-[14px]">Activate User</p>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default UsersPage;
