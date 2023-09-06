import React from "react";

const GeneralDetails = () => {
  return (
    <div className="bg-white p-[30px] shadow-[#0000001c] shadow">
      <div className="flex flex-col gap-2 pb-[30px]">
        <p className="font-semibold text-[#213F7D]">Personal Information</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 justify-items-start">
          <div className="flex flex-col gap-2  py-5">
            <p className="text-[#545F7D] text-[12px]">FULL NAME</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Grace Effiom</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">PHONE NUMBER</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">07060780922</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">EMAIL ADDRESS</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">grace@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">BVN</p>
            <p className="text-[#545F7D] text-[14px] sm:text-[16px] font-semibold">07060780922</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">GENDER</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Female</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">MARITAL STATUS</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Single</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">CHILDREN</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">None</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">TYPE OF RESIDENCE</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Parent's Apartment</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-[30px] border-t">
        <p className="font-semibold text-[#213F7D]">Education and Employment</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          <div className="flex flex-col gap-2  py-5">
            <p className="text-[#545F7D] text-[12px]">level of education</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">B.Sc</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">employment status</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Employed</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">sector of employment</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">FinTech</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Duration of employment</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">2 years</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">office email</p>
            <p className="text-[#545F7D] font-semibold text-[12px] sm:text-[16px]">grace@lendsqr.com</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Monthly income</p>
            <p className="text-[#545F7D] font-semibold text-[12px] sm:text-[16px]">₦200,000.00- ₦400,000.00</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">loan repayment</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">40,000</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-[30px] border-t">
        <p className="font-semibold text-[#213F7D]">Socials</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Twitter</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">@grace_effiom</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Facebook</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Grace Effiom</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Instagram</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">@grace_effiom</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-[30px] border-t">
        <p className="font-semibold text-[#213F7D]">Guarantor</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">FULL NAME</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Debby Ogana</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">PHONE NUMBER</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">07060780922</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">EMAIL ADDRESS</p>
            <p className="text-[#545F7D] font-semibold text-[13px] sm:text-[16px]">debby@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <p className="text-[#545F7D] text-[12px]">Relationship</p>
            <p className="text-[#545F7D] font-semibold text-[14px] sm:text-[16px]">Sister</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GeneralDetails;
