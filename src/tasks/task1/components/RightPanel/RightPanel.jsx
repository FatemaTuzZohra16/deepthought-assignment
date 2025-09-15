import React from "react";
import { RxCross2 } from "react-icons/rx";

const RightPanel = () => {
  return (
    <div className="flex h-[394px] w-[102px]">
      <div className="w-1/2 bg-white"></div>

      <div className="w-1/2 bg-black rounded-tl-[30px] rounded-bl-[30px] flex flex-col items-center">
        <div className="text-white mt-3">
          <RxCross2 size={20} />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <span className="text-white font-poppins text-[16px] whitespace-pre tracking-[.2em]">
  {'N\nO\nT\nI\nC\nE\n \nB\nO\nA\nR\nD'}
</span>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
