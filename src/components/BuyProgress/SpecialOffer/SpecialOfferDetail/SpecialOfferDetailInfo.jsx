import React from "react";

import clarifionImg from "../../../../assets/clarifion_product_preview.png";
import { AlertIcon, CheckBlueIcon, StarIcon } from "../../../SVGIcons";
import ProductImage from "../ProductImage";

const SpecialOfferDetailInfo = () => {
  return (
    <>
      <div className="md:hidden">
        <ProductImage />
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-[#2C7EF8] rounded-[10px] shrink-0">
          <img src={clarifionImg} alt="" className="w-20 md:w-auto" />
        </div>
        <div className="flex flex-col w-full gap-3 md:gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm md:text-xl leading-[140%] capitalize">
              Clarifion Air Ionizer
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <p className="text-[#969696] font-semibold capitalize line-through text-[10px] md:text-base">
                $180
              </p>
              <p className="text-[#2C7EF8] font-semibold capitalize text-sm md:text-[22px]">
                $84
              </p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-3 md:w-auto" />
            <StarIcon className="w-3 md:w-auto" />
            <StarIcon className="w-3 md:w-auto" />
            <StarIcon className="w-3 md:w-auto" />
            <StarIcon className="w-3 md:w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <AlertIcon className="w-3 md:w-auto" />
            <p className="text-[#37465A] text-xs md:text-base">
              12 left in Stock
            </p>
          </div>
          <div className="hidden md:block text-[#4D5254] leading-[140%] text-base text-start">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </div>
        </div>
      </div>
      <div className="md:hidden text-[#4D5254] leading-[140%] text-xs text-center mt-4">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <CheckBlueIcon className="w-4 md:w-auto" />
          <p className="text-[#4D5254] text-xs md:text-base">
            Negative Ion Technology may{" "}
            <span className="font-bold">help with allergens</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CheckBlueIcon className="w-4 md:w-auto" />
          <p className="text-[#4D5254] text-xs md:text-base">
            Designed for <span className="font-bold">air rejuvenation</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CheckBlueIcon className="w-4 md:w-auto" />
          <p className="text-[#4D5254] text-xs md:text-base">
            <span className="font-bold">Perfect for every room</span> in all
            types of places.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecialOfferDetailInfo;
