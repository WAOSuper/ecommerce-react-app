import React from "react";
import {
  AmexIcon,
  ApplePayIcon,
  GooglePayIcon,
  MastcardIcon,
  PayPalIcon,
  ShopPayIcon,
  VisaIcon,
} from "../../../SVGIcons";

const Payments = ({ className }) => {
  return (
    <div className={`${className} flex justify-center items-center gap-0.5`}>
      <VisaIcon />
      <ShopPayIcon />
      <PayPalIcon />
      <MastcardIcon />
      <GooglePayIcon />
      <ApplePayIcon />
      <AmexIcon />
    </div>
  );
};

export default Payments;
