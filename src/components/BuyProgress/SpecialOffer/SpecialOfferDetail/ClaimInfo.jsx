import React from "react";
import { RightArrowIcon, LockIcon } from "../../../SVGIcons";
import Payments from "./Payments";

const ClaimInfo = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-5">
      <div className="flex flex-col items-center gap-3">
        <button className="bg-[#59AE43] rounded-[50px] flex items-center justify-center gap-5 py-4 px-16 w-full">
          <div className="text-sm font-bold text-white uppercase md:text-xl">
            Yes - Claim my discount
          </div>
          <RightArrowIcon className="w-3 md:w-auto" />
        </button>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 py-2 px-4 rounded border border-[#CFCFCF]">
          <div className="flex items-center justify-center gap-4">
            <div className="text-[#4D5254] text-xs leading-[140%] capitalize">
              free shipping
            </div>
            <div className="w-px h-4 bg-[#CFCFCF]"></div>
            <div className="flex items-center gap-2.5">
              <LockIcon className="w-3 stroke-[#4D5254]" />
              <p className="text-[#4D5254] text-xs capitalize">
                Secure 256-bit SSL encryption.
              </p>
            </div>
            <div className="w-px h-4 bg-[#CFCFCF] hidden xl:block"></div>
            <Payments className="max-xl:hidden" />
          </div>
          <div className="h-px w-full bg-[#CFCFCF] xl:hidden"></div>
          <Payments className="xl:hidden" />
        </div>
      </div>
      <div className="text-[#F82C2C] text-xs md:text-lg font-medium uppercase underline">
        No thanks, I don’t want this.
      </div>
    </div>
  );
};

export default ClaimInfo;
