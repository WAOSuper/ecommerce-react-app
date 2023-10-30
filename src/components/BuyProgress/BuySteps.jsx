import React from "react";
import { TickIcon } from "../SVGIcons";

const BuySteps = () => {
  return (
    <div className="mt-6 md:mt-[60px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <div className="shrink-0 bg-[#85BF55] w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <TickIcon className="w-2 md:w-auto" />
          </div>
          <div className="text-xs text-black capitalize md:text-xl">
            <span className="max-xl:hidden">Step 1 : </span>Cart Review
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <div className="shrink-0 bg-[#85BF55] w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <TickIcon className="w-2 md:w-auto" />
          </div>
          <div className="text-xs text-black capitalize md:text-xl">
            <span className="max-xl:hidden">Step 2 : </span>Checkout
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <div className="shrink-0 bg-[#2C7EF8] w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <p className="text-white text-sm md:text-xl leading-[110%]">3</p>
          </div>
          <div className="text-xs font-bold text-black capitalize md:text-xl">
            <span className="max-xl:hidden">Step 3 : </span>Special Offer
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <div className="shrink-0 bg-white border border-[#2C7EF8] w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <p className="text-[#2C7EF8] text-sm md:text-xl leading-[110%]">
              4
            </p>
          </div>
          <div className="text-xs text-black capitalize md:text-xl">
            <span className="max-xl:hidden">Step 4 : </span>Confirmation
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySteps;
