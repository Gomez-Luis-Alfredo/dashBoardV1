import { SideBar } from "./components/shared/SideBar"
import { RiMenu3Fill } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { GrAdd } from "react-icons/gr";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { Car } from "./components/shared/Car";
import { Header } from "./components/shared/Header";
import { Card } from "./components/shared/Card";


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <SideBar showMenu={showMenu} />
        <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
        {/*Menu movil*/}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full left-0 bottom-0 text-3xl text-gray-400 p-4 flex items-center justify-between py-2 px-8 rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <LuUser2 />
          </button>
          <button className="p-2">
            <GrAdd />
          </button>
          <button className="p-2" onClick={toggleOrder}>
            <FaHamburger />
          </button>
          <button onClick={toggleMenu} className="text-white p-2" >
            {showMenu ? <MdOutlineClose /> : <RiMenu3Fill />}
          </button>

        </nav>
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className=" md:p-8 p-4">
            {/*Header*/}
            <Header/>
            {/*Title Content*/}
            <div className="flex items-center justify-between gap-4 mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex text-gray-300 items-center gap-4 bg-[#1F1D2B] py-2 px-4 rounded-lg"><FaChevronDown />Dine in</button>
            </div>
            {/*Content*/}
            <div className="p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
              {/*Card*/}
              <Card
              img="img-1.png"
              description="Speacy seasoned seafood nodles"
              price = "$2.29"
              inventory = "20 Bowls available"
              />
              <Card
              img="img-1.png"
              description="Speacy seasoned seafood nodles"
              price = "$2.29"
              inventory = "20 Bowls available"
              />
              <Card
              img="img-1.png"
              description="Speacy seasoned seafood nodles"
              price = "$2.29"
              inventory = "20 Bowls available"
              />
              <Card
              img="img-1.png"
              description="Speacy seasoned seafood nodles"
              price = "$2.29"
              inventory = "20 Bowls available"
              />
            </div>
          </div>
          
        </main>
      </div>
    </>
  )
}

export default App
