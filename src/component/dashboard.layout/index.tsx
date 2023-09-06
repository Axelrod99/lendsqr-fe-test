import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="flex justify-center bg-[#f2faeb81]">
        <div className="w-[20%] hidden lg:flex">
          <Sidebar />
        </div>
        <main className="w-[100%] lg:w-[80%] ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
