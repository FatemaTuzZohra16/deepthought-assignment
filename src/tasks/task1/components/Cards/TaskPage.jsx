import { Paperclip, FileText } from "lucide-react";
import { MdLightbulb } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RiFlowerFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { HiChevronUp } from "react-icons/hi2";

export default function TaskPage() {
    return (
        <div className='flex flex-wrap justify-between px-[25px]'>

            <div className='card1 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-[58px]'>
                <div className='relative'>
                    <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Technical Project Management</h1>
                    <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
                        <FaInfoCircle className='bg-black text-white' />
                    </div>
                </div>
                <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'><span className="font-semibold text-base">Description : </span> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</p>
                <div className="w-full h-[250px] bg-black rounded-md overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/TiMRwri1xJ8"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className='card2 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
                <div className='relative'>
                    <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Threadbuild</h1>
                    <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
                        <FaInfoCircle className='bg-black text-white' />
                    </div>
                </div>
                <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'><span className="font-semibold text-base">Description : </span> Watch the video and threadbuild, and jot out key threads while watching the video</p>

                <div className='flex items-center bg-[#FDFDF1] border-t border-t-black/30 border-b border-b-black/10'>
                    <div className="ml-[10px]">
                        <HiChevronUp size={22} />
                    </div>
                    <h1 className='font-sans font-bold text-[20px] py-2 pl-[73px]'>Thread A</h1>
                </div>
                <div className='flex justify-between mt-[30px] mb-[51px] px-[27px]'>
                    <div className="w-[199px] relative">
                        <div className="bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px] rounded-[10px] z-0 relative">
                            <h3 className="font-sans text-[12px] pt-1 pl-2">Sub thread 1</h3>
                        </div>
                        <div className="absolute top-[24px] left-0 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px] rounded-[10px] z-10 bg-white">
                            <h4 className="font-sans text-[12px] text-[#6C757D] pt-2 pl-2">
                                Enter Text here
                            </h4>
                        </div>
                    </div>
                    <div className="w-[199px] relative">
                        <div className="bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px] rounded-[10px] z-0 relative">
                            <h3 className="font-sans text-[12px] pt-1 pl-2">Sub Interpretation 1</h3>
                        </div>
                        <div className="absolute top-[24px] left-0 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px] rounded-[10px] z-10 bg-white">
                            <h4 className="font-sans text-[12px] text-[#6C757D] pt-2 pl-2">
                                Enter Text here
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[26px] ml-[90px] mr-[28px]">
                    <div className="flex items-center gap-[14px] text-gray-600 mb-3">
                        <MdLightbulb size={20} className=" cursor-pointer text-[#323232]" />
                        <MdMessage size={20} className="cursor-pointer text-[#323232]" />
                        <BsQuestionSquareFill size={20} className=" cursor-pointer text-[#323232]" />
                        <RiFlowerFill size={20} className="cursor-pointer text-[#323232]" />
                    </div>
                    <div className="flex gap-[17px] mb-3">
                        <select className="font-poppins font-semibold text-[10px] py-2 px-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded">
                            <option>Select Categ</option>
                        </select>
                        <select className="font-poppins font-semibold text-[10px] py-2 px-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded">
                            <option>Select Process</option>
                        </select>
                    </div>
                </div>

                <button className="font-roboto font-medium text-[12px] bg-primari text-white ml-[27px] py-[10px] px-3 rounded-[10px] mb-[19px] mt-[22px]">
                    + Sub-thread
                </button>
                <div className="w-full flex justify-center">
                    <div className="relative w-[425px]">
                        <div className="bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px] rounded-[10px] z-0">
                            <h3 className="font-sans text-[12px] pt-1 pl-2">Sub thread 1</h3>
                        </div>
                        <div className="absolute top-[24px] left-0 w-[425px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px] rounded-[10px] z-10 bg-white">
                            <h4 className="font-sans text-[12px] text-[#6C757D] pt-2 pl-2">
                                Enter Text here
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card3 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-[58px]">
                <div className='relative'>
                    <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Structure your Pointers</h1>
                    <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
                        <FaInfoCircle className='bg-black text-white' />
                    </div>
                </div>
                <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px] border-b border-[#D1CECE] mb-[19px]'><span className="font-semibold text-base">Description : </span>  Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world </p>
                <div className="ml-[31px] mr-[26px]">
                    <h2 className="font-sans font-semibold text-base mb-[5px]">Title </h2>
                    <div className="h-[43px] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <input type="text" className="outline-0" />
                    </div>
                    <h2 className="font-sans font-semibold text-base mb-[5px] mt-[28px]">Content </h2>
                    <div className="h-[82px] rounded-[5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <input type="text" className="outline-0" />
                    </div>
                </div>
            </div>

            <div className="card4 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-[58px]">
                <div className='relative'>
                    <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>4SA Method</h1>
                    <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
                        <FaInfoCircle className='bg-black text-white' />
                    </div>
                </div>
                <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'><span className="font-semibold text-base">Description : </span> To Explore more read more </p>
                <div className="px-[24px]">
                    <div className='flex items-center bg-[#F2F2F2] border-t border-t-[#D9D7D7]'>
                        <div className="ml-[10px]">
                            <HiChevronUp size={22} />
                        </div>
                        <h1 className='font-sans font-bold text-[20px] py-2 pl-[14px]'>Introduction </h1>
                    </div>
                    <div className="pt-4 pb-7">
                        <p className="font-sans text-[14px]">The 4SA Method , How to bring a idea into progress ?</p>
                        <button className="font-sans font-semibold test-[14px] text-[#606161] mt-[28px] ml-[357px]">See More</button>
                    </div>
                    <div className='flex items-center bg-[#FDFDF1] border border-[#D9D7D7]'>
                        <div className="ml-[10px]">
                            <HiChevronUp size={22} />
                        </div>
                        <h1 className='font-sans font-bold text-[20px] py-2 pl-[14px]'>Thread A</h1>
                    </div>
                    <div className="pt-4 pb-7">
                        <p className="font-sans text-[14px]">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                        <button className="font-sans font-semibold test-[14px] text-[#606161] mt-[28px] ml-[357px]">See More</button>
                    </div>
                    <div className='flex items-center bg-[#FDFDF1] border border-[#D9D7D7]'>
                        <h1 className='font-sans font-bold text-[20px] py-2 pl-[24px]'>Example 1</h1>
                    </div>
                    <p className="font-sans text-[14px] mt-3">You have a concept , How will you put into progress?</p>
                </div>
            </div>
        </div>
    );
}
