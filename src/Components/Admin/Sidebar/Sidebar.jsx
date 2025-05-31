// import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import sevenlogo from '../../Assets/seven_logo.png'

// const SideNavbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const [isCoursesOpen, setCoursesOpen] = useState(false);

//   return (
//     <>
//       {/* Sidebar for large screens */}
//       <div className=" bg-[#000000] w-[18%] text-white cursor-pointer lg:block hidden">
//         <div className="flex flex-col items-center justify-center pt-7">
//           <div className="items-start">
//             <NavLink to="/">
//               <img className="w-32" src={sevenlogo} />
//             </NavLink>

//             <NavLink
//               to="/dashboard"
//               className="flex gap-3 items-center mt-0 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800 hover:px-12 hover:py-3"
//             >
//               <i className="ri-home-2-line text-2xl"></i> Dashboard
//             </NavLink>

//             <div
//               className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2  hover:border-blue-800 hover:px-12 hover:py-3"
//               onClick={() => setCoursesOpen(!isCoursesOpen)}
//             >
//               <i className="ri-checkbox-circle-line text-2xl"></i> Courses
//               <i
//                 className={`ri-arrow-${
//                   isCoursesOpen ? "down" : "right"
//                 }-s-line text-2xl`}
//               ></i>
//             </div>

//             {isCoursesOpen && (
//               <div className=" bg-gray-500 mt-2 flex items-center w-full max-h-72 overflow-scroll  flex-col  scrollbar-hide">
//                 <div>
                 


//                 </div>
//               </div>
//             )}

//             <div className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-calendar-2-line text-2xl"></i> Manage Users
//             </div>

//             <NavLink to="/gallery" className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-user-add-fill"></i> Gallery
//             </NavLink>

//             <NavLink to="/notices" className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-user-add-fill"></i> Notices
//             </NavLink>

//             <div className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-checkbox-circle-line text-2xl"></i>
//               View Reports
//             </div>

//             <div className="flex gap-2 items-center mt-4 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-checkbox-circle-line text-2xl"></i>
//               Settings
//             </div>

//             <div className="flex gap-2 mb-32 items-center mt-8 text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-blue-800  hover:px-12 hover:py-3">
//               <i className="ri-logout-box-r-line text-2xl"></i> Log Out
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div>
//         {/* Mobile Menu Button */}
//         {!isSideMenuOpen && (
//           <div className="fixed top-0 z-20 flex justify-between items-center bg-gray-800 border-b w-full lg:hidden p-2">
//             <FiMenu
//               onClick={() => setMenu(true)}
//               className="cursor-pointer text-white text-4xl"
//             />
//             <NavLink to="/">
//               <img className="w-12" src={"./Images/logo.png"} />
//             </NavLink>
//           </div>
//         )}

//         {/* Sidebar mobile menu */}
//         {isSideMenuOpen && (
//           <div className="fixed top-0 right-0 h-full w-full lg:hidden bg-[#232825] backdrop-blur-sm z-20">
//             <section className="relative mt-12 flex flex-col items-center justify-center p-4 gap-6">
//               <IoCloseOutline
//                 onClick={() => setMenu(false)}
//                 className="absolute top-4 right-4 cursor-pointer text-white text-4xl"
//               />
//               <div className="flex flex-col items-center space-y-6 text-white">
//                 <NavLink
//                   to="/dashboard"
//                   className="flex gap-3 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5"
//                 >
//                   <i className="ri-home-2-line text-2xl"></i> Dashboard
//                 </NavLink>

              
//                 <div
//                   className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5"
//                   onClick={() => setCoursesOpen(!isCoursesOpen)}
//                 >
//                   <i className="ri-checkbox-circle-line text-2xl"></i> Courses
//                   <i
//                     className={`ri-arrow-${
//                       isCoursesOpen ? "down" : "right"
//                     }-s-line text-2xl`}
//                   ></i>
//                 </div>

               

//                 {isCoursesOpen && (
//                   <div className=" bg-gray-500 mt-2 flex items-center w-full max-h-72 overflow-scroll  flex-col  scrollbar-hide">
//                     <div>
           

//                     </div>
//                   </div>
//                 )}

//                 <div className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-calendar-2-line text-2xl"></i> Manage Users
//                 </div>

//                 <NavLink to="/gallery" className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-money-pound-circle-line text-2xl"></i>{" "}
//                   Gallery
//                 </NavLink>

//                 <NavLink to="/notices" className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-money-pound-circle-line text-2xl"></i>Notices
//                 </NavLink>

           

//                 <div className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-money-pound-circle-line text-2xl"></i>View
//                   Reports
//                 </div>

//                 <div className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-money-pound-circle-line text-2xl"></i>
//                   Settings
//                 </div>

//                 <div className="flex gap-2 items-center text-2xl font-normal border border-transparent rounded-full px-6 py-2 transition-all duration-200 hover:border-2 hover:border-[#4DE2A6] hover:px-8 hover:py-2.5">
//                   <i className="ri-logout-box-r-line text-2xl"></i> Log Out
//                 </div>
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SideNavbar;
