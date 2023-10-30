import React from "react";
import { PercentIcon } from "../../../SVGIcons";

const DiscountInfo = () => {
  return (
    <div className="bg-[#EDF3FD] rounded-[10px] px-4 py-3">
      <div className="flex items-center gap-4">
        <PercentIcon className="w-6 md:w-auto shrink-0" />
        <div className="text-sm md:text-base leading-[140%]">
          Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
          <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only{" "}
          <span className="text-[#2C7EF8]">$14 Each</span>.
        </div>
      </div>
    </div>
  );
};

export default DiscountInfo;
