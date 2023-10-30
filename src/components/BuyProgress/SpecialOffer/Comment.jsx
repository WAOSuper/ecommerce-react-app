import React from "react";

import profileImg from "../../../assets/profile_image.png";
import { StarsIcon, VerifyIcon } from "../../SVGIcons";

const Comment = () => {
  return (
    <div className="hidden md:flex flex-col p-6 gap-[18px] bg-white rounded-[10px] mt-6">
      <div className="flex items-center gap-[13px]">
        <img src={profileImg} alt="profile_photo" className="" />
        <div className="flex flex-col gap-2">
          <StarsIcon />
          <div className="flex items-center gap-[10px]">
            <div className="text-[#333] text-sm font-bold leading-none">
              Ken T.
            </div>
            <div className="flex items-center gap-[10px]">
              <VerifyIcon />
              <div className="text-[#5BB59A] text-xs leading-[120%]">
                Verified Customer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch text-[#4D5254] leading-normal">
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </div>
    </div>
  );
};

export default Comment;
