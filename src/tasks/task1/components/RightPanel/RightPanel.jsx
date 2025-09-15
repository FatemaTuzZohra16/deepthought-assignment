import React from "react";
import { RxCross2 } from "react-icons/rx";

const RightPanel = () => {
  return (
    <div className="flex h-[394px] w-[102px]">
      {/* White Half */}
      <div className="w-1/2 bg-white"></div>

      {/* Black Half */}
      <div className="w-1/2 bg-black rounded-tl-[30px] rounded-bl-[30px] flex flex-col items-center">
        {/* Cross Icon */}
        <div className="text-white mt-3">
          <RxCross2 size={20} />
        </div>

        {/* Notice Board Text */}
        <div className="flex-1 flex items-center">
          <span className="text-white font-poppins text-[16px] rotate-90 whitespace-nowrap tracking-[.7em]">
            Notice Board
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
