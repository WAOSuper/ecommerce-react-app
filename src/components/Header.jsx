import React from "react";
import {
  ArrowSyncCheckMarkIcon,
  CheckMarkStarIcon,
  HeartOutlineIcon,
  TruckIcon,
} from "./SVGIcons";
import TextCarousel from "./TextCarousel";

const Header = () => {
  return (
    <header className="bg-[#252F3D]">
      <TextCarousel />
      <div className="hidden md:flex items-center justify-between gap-4 px-5 lg:px-32 py-2.5 lg:py-4">
        <div className="flex items-center gap-2 shrink-0">
          <CheckMarkStarIcon />
          <p className="text-xs leading-none text-white capitalize">
            30-DAY SATISFACTION GUARANTEE
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <TruckIcon />
          <p className="text-xs leading-none text-white capitalize">
            Free delivery on orders over $40.00
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <HeartOutlineIcon />
          <p className="text-xs leading-none text-white capitalize">
            50.000+ HAPPY CUSTOMERS
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ArrowSyncCheckMarkIcon />
          <p className="text-xs leading-none text-white capitalize">
            100% Money Back Guarantee
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
