// import React from 'react'
// import card from '../../../../assets/card.png'
// import { FaInfoCircle } from "react-icons/fa";
// import cardIcon from '../../../../assets/cardIcon.png'

// const Card = () => {
//     return (
//         <div className='flex flex-wrap justify-between px-[25px]'>


            // <div className='card1 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-[58px]'>
            //     <div className='relative'>
            //         <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Technical Project Management</h1>
            //         <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
            //             <FaInfoCircle className='bg-black text-white' />
            //         </div>
            //     </div>
            //     <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'>Description: Story of Alignment Scope of Agility Specific Accountable Staggering Approach</p>
            //     <img src={card} alt="" />
            // </div>



//             <div className='card2 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
//                 <div className='relative'>
//                     <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Threadbuild</h1>
//                     <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
//                         <FaInfoCircle className='bg-black text-white' />
//                     </div>
//                 </div>
//                 <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'>Description: Watch the video and threadbuild, and jot out key threads while watching the video</p>
//                 <div className='flex bg-[#FDFDF1] border-t border-t-black/30 border-b border-b-black/10'>
//                     <div>

//                     </div>
//                     <h1 className='font-sans font-bold text-[20px] py-2 pl-[73px]'>Thread A</h1>
//                 </div>
// //                 <div className='flex justify-between mt-[30px] mb-[21px] px-[27px]'>
// //                     <div className='w-[199px] relative'>
// //                         <div className='bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px]'>
// //                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
// //                         </div>
// //                         <div className='absolute shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px]'>
// //                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
// //                         </div>
// //                     </div>
// //                     <div className='w-[199px] relative'>
// //                         <div className='bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px] rounded-[10px] z-0'>
// //                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
// //                         </div>
// //                         <div className='absolute top-[20px] left-0 w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px] rounded-[10px] z-10 -mt-10'>
// //                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className='flex gap-x-[26px]'>
// //                     <img src={cardIcon} alt="" />
// //                 </div>
// //             </div>

//             <div className='card3 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
//                 <div className='relative'>
//                     <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Threadbuild</h1>
//                     <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
//                         <FaInfoCircle className='bg-black text-white' />
//                     </div>
//                 </div>
//                 <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'>Description: Watch the video and threadbuild, and jot out key threads while watching the video</p>
//                 <div className='flex bg-[#FDFDF1] border-t border-t-black/30 border-b border-b-black/10'>
//                     <div>

//                     </div>
//                     <h1 className='font-sans font-bold text-[20px] py-2 pl-[73px]'>Thread A</h1>
//                 </div>
//                 <div className='flex justify-between mt-[30px] mb-[21px] px-[27px]'>
//                     <div className='w-[199px]'>
//                         <div className='relative bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px]'>
//                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
//                         </div>
//                         <div className='absolute shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px]'>
//                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
//                         </div>
//                     </div>
//                     <div className='w-[199px]'>
//                         <div className='relative bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px]'>
//                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
//                         </div>
//                         <div className='absolute shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px]'>
//                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='card4 w-[480px] h-[580px] rounded-[15px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
//                 <div className='relative'>
//                     <h1 className='font-sans font-semibold text-base bg-black text-white py-[14px] text-center'>Threadbuild</h1>
//                     <div className='absolute top-1/2 transform -translate-y-1/2 right-[14px] rounded-full'>
//                         <FaInfoCircle className='bg-black text-white' />
//                     </div>
//                 </div>
//                 <p className='font-sans text-[14px] pl-[11px] pt-[19px] pb-[26px]'>Description: Watch the video and threadbuild, and jot out key threads while watching the video</p>
//                 <div className='flex bg-[#FDFDF1] border-t border-t-black/30 border-b border-b-black/10'>
//                     <div>

//                     </div>
//                     <h1 className='font-sans font-bold text-[20px] py-2 pl-[73px]'>Thread A</h1>
//                 </div>
//                 <div className='flex justify-between mt-[30px] mb-[21px] px-[27px]'>
//                     <div className='w-[199px]'>
//                         <div className='relative bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px]'>
//                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
//                         </div>
//                         <div className='absolute shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px]'>
//                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
//                         </div>
//                     </div>
//                     <div className='w-[199px]'>
//                         <div className='relative bg-[#F6F6F6] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[65px]'>
//                             <h3 className='font-sans text-[12px] pt-1 pl-2'>Sub thread 1</h3>
//                         </div>
//                         <div className='absolute shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-[70px]'>
//                             <h4 className='font-sans text-[12px] text-[#6C757D] pt-2 pl-2'>Enter Text here</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card