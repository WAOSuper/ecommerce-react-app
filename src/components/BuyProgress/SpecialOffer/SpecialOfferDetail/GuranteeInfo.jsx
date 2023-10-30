import React from "react";

import guranteeImg from "../../../../assets/guarantee_image.png";

const GuranteeInfo = () => {
  return (
    <div className="flex gap-4 md:items-center">
      <img
        src={guranteeImg}
        alt="gurantee_imagee"
        className="w-12 h-12 md:w-auto md:h-auto shrink-0"
      />
      <div className="text-[#4D5254] leading-[140%] text-xs md:text-base">
        If you are not completely thrilled with your Clarifion - We have a{" "}
        <span className="font-bold">30 day satisfaction guarantee</span>. Please
        refer to our return policy at the bottom of the page for more details.
        Happy Shopping!
      </div>
    </div>
  );
};

export default GuranteeInfo;
