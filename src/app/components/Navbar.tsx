// // import Link from "next/link";

// // import { RxEnvelopeClosed } from "react-icons/rx";
// // import { PiPhoneCallBold } from "react-icons/pi";
// // import { RiArrowDropDownLine } from "react-icons/ri";
// // import { FiUser } from "react-icons/fi";
// // import { CiHeart } from "react-icons/ci";
// // import { FiShoppingCart } from "react-icons/fi";
// // import { CiSearch } from "react-icons/ci";

// // export default function Header() {
// //     return (
// //         <div>
// //             {/* Header Container */}
// //             <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 space-x-4">
// //                 {/* Left Section: Envelope and Phone */}
// //                 <div className="flex items-center space-x-4">
// //                     {/* Envelope Icon and Email */}
// //                     <div className="flex items-center space-x-2">
// //                         <RxEnvelopeClosed className="w-4 h-4 text-white" />
// //                         <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             shahmiratiq20@gmail.com
// //                         </span>
// //                     </div>

// //                     {/* Phone Icon and Number */}
// //                     <div className="flex items-center space-x-2">
// //                         <PiPhoneCallBold className="w-4 h-4 text-white" />
// //                         <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             (32585)552055
// //                         </span>
// //                     </div>
// //                 </div>

// //                 {/* Right Section: Language, Currency, Login, Wishlist, and Cart */}
// //                 <div className="flex items-center space-x-4">
// //                     {/* English Dropdown */}
// //                     <div className="hidden sm:flex items-center space-x-1">
// //                         <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             English
// //                         </span>
// //                         <RiArrowDropDownLine className="w-4 h-4 text-white" />
// //                     </div>

// //                     {/* USD Dropdown */}
// //                     <div className="hidden sm:flex items-center space-x-1">
// //                         <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             USD
// //                         </span>
// //                         <RiArrowDropDownLine className="w-4 h-4 text-white" />
// //                     </div>

// //                     {/* Login Section */}
// //                     <div className="flex items-center space-x-1">
// //                         <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             Login
// //                         </span>
// //                         <FiUser className="w-4 h-4 text-white" />
// //                     </div>

// //                     {/* Wishlist Section */}
// //                     <div className="flex items-center space-x-1">
// //                         <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
// //                             Wishlist
// //                         </span>
// //                         <CiHeart className="w-4 h-4 text-white" />
// //                     </div>

// //                     {/* Cart Icon */}
// //                     <FiShoppingCart className="w-5 h-5 text-white" />
// //                 </div>
// //             </div>

// //             {/* Navbar Container */}
// //             <div className="w-full h-[60px] bg-white flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
// //                 {/* Hekto Logo */}
// //                 <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-lg md:text-xl lg:text-2xl">
// //                     Hekto
// //                 </div>

// //                {/* Navbar Links */}
// // <div className="hidden sm:flex items-center space-x-4 ml-8">
// // <span className="text-[#FB2E86] font-[Lato] text-sm md:text-base hover:text-[#e0336a] cursor-pointer">
// // Home
// // </span>
// // <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
// // Pages
// // </span>
// // <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
// // Products
// // </span>
// // <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
// // Blog
// // </span>
// // <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
// // Shop
// // </span>
// // <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
// // Contact
// // </span>
// // </div>

// //                 {/* Search Bar */}
// //                 <div className="flex items-center ml-auto">
// //                     <input
// //                         type="text"
// //                         placeholder="Search"
// //                         className="hidden md:inline-block w-[200px] lg:w-[300px] h-[40px] border border-[#aea6a6] px-4 text-sm md:text-base rounded-l"
// //                     />
// //                     <div className="w-[40px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
// //                         <CiSearch className="w-5 h-5 text-white" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }



// import React from 'react'
// import { MdOutlineEmail } from 'react-icons/md';
// import { FaPhoneVolume } from 'react-icons/fa6';
// import { FiUser } from 'react-icons/fi';
// import { FaChevronDown, FaRegHeart } from 'react-icons/fa6';
// import { LuShoppingCart } from 'react-icons/lu';


// export default function Header() {
//   return (
//     <div className="hidden sm:block">
//         <div className="2xl:w-[1920px] h-[44px] w-[100%]  bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
//       <div className="w-[1177px] 2xl:w-[1177px] flex flex-col justify-center  lg:flex-row md:justify-between items-center ">
//         <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">

// {/* contacts */}
//           <div className="flex items-center justify-center gap-3 mr-10 ">
//             <span className="w-4 h-4 text-[#ffffff]">
//               <MdOutlineEmail />
//             </span>
//             <a href="mhhasanul@gmail.com">

//            z <h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               mhhasanul@gmail.com
//             </h1>

//             </a>
           
//           </div>

//           <div className="flex items-center justify-center gap-3">
//             <span className="w-4 h-4 flex items-center justify-center">
//               <span  className="w-[13.33px] h-[13.33px] text-[#ffffff]">
//               <FaPhoneVolume/>
//               </span>
              
//             </span>
//             <a href="(12345)67890)"> 
//             <h1 className="w-[97px] h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               (12345)67890
//             </h1>
//             </a>
           
//           </div>
//         </div>


//         <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
//           <div className=" flex flex-row items-center justify-center ">
//             <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               English
//             </h1>
//             <div className=" flex justify-center items-center mx-1 w-[16px] h-[16px] ">
//               <FaChevronDown />
//             </div>
//           </div>
//           <div className=" flex flex-row items-center justify-center  ">
//             <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               USD
//             </h1>
//             <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] ">
//               <FaChevronDown />
//             </div>
//           </div>
//           <div className=" flex flex-row items-center justify-center ">
//             <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               Login
//             </h1>
//             <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] ">
//               <FiUser />
//             </div>
//           </div>
//           <div className=" flex flex-row items-center justify-center ">
//             <h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               Wishlist
//             </h1>
//             <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] ">
//               <FaRegHeart />
//             </div>
//           </div>
//           <div className="w-[24px] h-[24px]">
//             <LuShoppingCart  />
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }