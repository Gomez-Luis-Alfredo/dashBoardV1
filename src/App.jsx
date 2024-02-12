import { SideBar } from "./components/shared/SideBar"
import { RiMenu3Fill } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { GrAdd } from "react-icons/gr";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";


function App() {
  
const [showMenu, setShowMenu] = useState(false)
const [showOrder, setShowOrder] = useState(false)

const toggleMenu = () =>{
  setShowMenu(!showMenu)
}
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <SideBar showMenu={showMenu}/>
        {/*Menu movil*/}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full left-0 bottom-0 text-3xl text-gray-400 p-4 flex items-center justify-between py-2 px-8 rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
          <LuUser2/>
          </button>
          <button className="p-2">
          <GrAdd  />
          </button>
          <button className="p-2">
          <FaHamburger/>
          </button>
          <button onClick={toggleMenu} className="text-white p-2" >
          { showMenu ? <MdOutlineClose/> : <RiMenu3Fill /> } 
          </button>
        
        </nav>
        </div>
    </>
  )
}

export default App
