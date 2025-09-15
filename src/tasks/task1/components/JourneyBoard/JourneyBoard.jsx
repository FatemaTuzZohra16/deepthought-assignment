import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const JourneyBoard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        open ? "w-[392px]" : "w-[132px]"
      } bg-white shadow-lg h-[692px] rounded-br-[20px] rounded-bl-[20px] relative z-50`}
    >
      <div
        className="bg-black text-white rounded-tr-[30px] flex items-center h-[50px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <div className="flex items-center gap-[190px]">
            <span className="font-poppins font-semibold text-[16px] ml-[30px]">Journey Board</span>
            <FaArrowAltCircleLeft size={22} />
          </div>
        ) : (
          <div className="ml-[90px]">
            <FaArrowCircleRight size={22} />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4">
        {!open ? (
          <div className="flex items-center justify-center h-full">
            <span className="font-poppins text-[36px] text-primari border border-primari py-2 px-7 rounded-[20px] mt-[26px]">1</span>
          </div>
        ) : (
          <div className="pl-[32px]">
            <h2 className="font-poppins font-semibold text-[16px] mb-[18px] mt-[21px] list-disc">Explore the world of management</h2>
            <ul> 
                <li className="font-poppins text-[16px] list-disc">Technical Project Management</li>
                <li className="font-poppins text-[16px] list-disc py-1">Threadbuild</li>
                <li className="font-poppins text-[16px] list-disc pb-1">Structure your pointers</li>
                <li className="font-poppins text-[16px] list-disc">4SA Method</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyBoard;
