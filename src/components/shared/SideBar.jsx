import { RiAncientPavilionLine } from "react-icons/ri";
import { RiPercentLine } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { RiSettings5Line } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const SideBar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed top-0 left-0 w-28 h-full flex flex-col justify-bwtween py-6  rounded-tr-xl rounded-br-xl">
        <div>
        <ul className=" pl-4">
            <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                <a href="w" className="bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-white"><RiAncientPavilionLine className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><RiPercentLine className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><FaHamburger  className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><RiMailLine  className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><RiNotification2Line  className="text-2xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><RiSettings5Line  className="text-2xl"/></a>
            </li>
            
        </ul>
        </div>
        <div>
            <ul className=" pl-4">

            <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                <a href="w" className=" group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a]  transition-colors"><RiLogoutBoxRLine   className="text-2xl"/></a>
            </li>
            </ul>
        </div>
        
        
    </div>
  )
}
