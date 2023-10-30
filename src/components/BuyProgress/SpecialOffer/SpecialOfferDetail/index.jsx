import React from "react";

import SpecialOfferDetailTitle from "./SpecialOfferDetailTitle";
import SpecialOfferDetailInfo from "./SpecialOfferDetailInfo";
import DiscountInfo from "./DiscountInfo";
import ClaimInfo from "./ClaimInfo";
import GuranteeInfo from "./GuranteeInfo";

const SpecialOfferDetail = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <SpecialOfferDetailTitle />
      <SpecialOfferDetailInfo />
      <DiscountInfo />
      <ClaimInfo />
      <GuranteeInfo />
    </div>
  );
};

export default SpecialOfferDetail;
