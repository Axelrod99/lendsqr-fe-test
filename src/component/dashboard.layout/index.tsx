import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import SmallerSidebar from "./smallerSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [showSideModal, setShowSideModal] = useState(false);
  const ToggleMenu = () => {
    setShowSideModal(!showSideModal)
  }

  return (
    <div className="relative">
      <Header />

      <div className="flex justify-center bg-[#f2faeb81]">
        <div className="relative">
          <div onClick={ToggleMenu} className="h-7 w-7 cursor-pointer absolute left-4 mt-3 text-white items-center justify-center rounded-[40px] flex lg:hidden bg-[#213F7D]">
            <p className="mb-1">...</p>
          </div>
        </div>
        <div className="w-[20%] hidden lg:flex">
          <Sidebar />
        </div>
        <main className="w-[100%] lg:w-[80%] ">{children}</main>
      </div>

      {showSideModal && (
        <div className="absolute right-0 top-0 index-[999]">
          <SmallerSidebar />
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
