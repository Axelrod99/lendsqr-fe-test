import React, { useState } from 'react'
import SortOptions from '../sortOptions'
import filter from "../../assets/icons/filter.svg";

const SortButton = () => {
    const [showOrganization, setShowOrganization] = useState(false);

      const toggleSortModal = () => {
    setShowOrganization(!showOrganization);
  };

  return (
    <div className="flex flex-col">
    <div
      onClick={toggleSortModal}
      className="flex cursor-pointer gap-30 w-[114px] h-[36px] justify-between items-center p-[10px] rounded-md border border-[#213F7D1A] font-semibold text-[14px] text-[#21407ddd]"
    >
      <p>Sort by</p>
      <img src={filter} />
    </div>
    {showOrganization && (
      <div className="z-[999] absolute top-[640px] xs:top-[670px] xl:top-[485px]">
        <SortOptions />
      </div>
    )}
  </div>
  )
}

export default SortButton