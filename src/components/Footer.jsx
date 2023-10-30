import React from "react";

import { LockIcon } from "./SVGIcons";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#252F3D]">
      <div className="flex flex-col items-center justify-between gap-4 p-5 text-xs lg:px-32 lg:py-6 lg:flex-row sm:text-base">
        <div className="flex items-center gap-3 py-2 text-white sm:gap-4 lg:self-stretch">
          <p className="capitalize">Copyright (c) 2023</p>
          <div className="w-px h-3 bg-white sm:h-6"></div>
          <p className="lowercase">Clarifionsupport@clarifion.com</p>
        </div>
        <div className="flex items-center gap-4">
          <LockIcon className="w-3 h-3 sm:w-4 sm:h-4 stroke-white" />
          <p className="text-white capitalize">
            Secure 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
