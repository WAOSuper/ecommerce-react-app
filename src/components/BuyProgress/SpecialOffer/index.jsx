import React from "react";

import Comment from "./Comment";
import ProductImage from "./ProductImage";
import SpecialOfferDetail from "./SpecialOfferDetail";

const SpecialOffer = () => {
  return (
    <div className="mt-6 md:mt-10">
      <div className="bg-[#FAFAFA] rounded-[10px] p-10">
        <div className="grid md:gap-10 md:grid-cols-2">
          <div className="hidden md:block">
            <ProductImage />
            <Comment />
          </div>
          <SpecialOfferDetail />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
