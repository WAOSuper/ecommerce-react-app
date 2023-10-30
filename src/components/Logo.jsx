import React from "react";

import logoImg from "../assets/Clarifion_Logo.png";
import { McAfeeIcon, NortonAntivirusLogoIcon } from "./SVGIcons";

const Logo = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-5 bg-white lg:px-32 lg:py-7">
      <img src={logoImg} alt="clarifion_logo" className="w-24 sm:w-auto" />
      <div className="flex items-center gap-4 lg:gap-8">
        <McAfeeIcon className="w-11 sm:w-auto" />
        <NortonAntivirusLogoIcon className="w-11 sm:w-auto" />
      </div>
    </div>
  );
};

export default Logo;
