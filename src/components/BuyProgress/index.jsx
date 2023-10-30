import React from "react";

import BuySteps from "./BuySteps";
import SpecialOffer from "./SpecialOffer";

const BuyProgress = () => {
  return (
    <div className="px-5 pb-6 bg-white md:pb-14 lg:px-32">
      <div className="text-center">
        <div className="text-[32px] md:text-5xl md:leading-none text-black capitalize">
          Wait ! your order in progress.
        </div>
        <div className="mt-6 text-[#4D5254] text-base md:text-2xl md:leading-none capitalize">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
      </div>
      <BuySteps />
      <SpecialOffer />
    </div>
  );
};

export default BuyProgress;
