import { SideBar } from "./components/shared/SideBar"
import { RiMenu3Fill } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { GrAdd } from "react-icons/gr";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";


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
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
          <div className=" lg:col-span-6 md:p-8 p-4">
            {/*Header*/}
            <header>
              {/*Titulo and Search*/}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center   gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                  <p className="text-gray-500">12 Feb 2024</p>
                </div>
                <form >
                  <div className="w-full relative">
                    <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search" />
                  </div>
                </form>
              </div>
              {/*Tabs*/}
              <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8  border-b mb-6">
                <a href="#" className=" relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] border-[#ec7c6a] text-[#ec7c6a]">Hot dishes</a>
                <a href="#" className=" py-2 pr-4">Cold dishes</a>
                <a href="#" className=" py-2 pr-4">Soup</a>
                <a href="#" className=" py-2 pr-4">Grill</a>
              </nav>

            </header>
            {/*Title Content*/}
            <div className="flex items-center justify-between gap-4 mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex text-gray-300 items-center gap-4 bg-[#1F1D2B] py-2 px-4 rounded-lg"><FaChevronDown />Dine in</button>
            </div>
            {/*Content*/}
            <div className="p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
              {/*Card*/}
              <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
                <img src="img-1.png" alt="" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Speacy seasoned seafood nodles</p>
                <span className="text-gray-400">$ 2.29</span>
                <p className="text-gray-600">20 Bowls available</p>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-2 fixed  top-0 bg-[#1F1D2B] lg:w-96 lg:right-0 w-full h-full transition-all ${showOrder ? "right-0" : "-right-full"}`} >
            {/*Order*/}
            <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full ">
              <MdOutlineClose onClick={toggleOrder} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 
              bg-[#262837] rounded-full text-xl" />
              <h1 className="text-2xl my-4">Orders #156789</h1>
              {/*Pills*/}
              <div className="flex items-center gap-4 flex-wrap mb-8">
                <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
                <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
                <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border  border-gray-500">Delivery</button>
              </div>
              {/*car*/}
              <div>
                <div className="grid grid-cols-6 mb-4">
                  <h5 className="col-span-4">Item</h5>
                  <h5>Qty</h5>
                  <h5>Price</h5>
                </div>
                {/*Products*/}
                <div className="h-[500px] md:h-[800px] lg:h-[600px] overflow-scroll">
                   {/*Products*/}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                 <div className="grid grid-cols-6 mb-4">
                  {/*Products Description*/}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="img-1.png" alt="" className="w-16 h-16 object-cover"/>
                    <h5 className="text-sm">Speacy seasoned ...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                  {/*Qty*/}
                  <div>
                    <span>2</span>
                  </div>
                  {/*Price*/}
                  <div>
                    <span>$4.58</span>
                  </div>
                 </div>
                 {/*Note*/}
                <div className="grid grid-cols-6 items-center gap-2">
                  <form className="col-span-5">
                    <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline" placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                    <FaRegTrashCan className="text-red-500"/>
                    </button>
                    
                  </div>
                </div>
                </div>  
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                 <div className="grid grid-cols-6 mb-4">
                  {/*Products Description*/}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="img-1.png" alt="" className="w-16 h-16 object-cover"/>
                    <h5 className="text-sm">Speacy seasoned ...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                  {/*Qty*/}
                  <div>
                    <span>2</span>
                  </div>
                  {/*Price*/}
                  <div>
                    <span>$4.58</span>
                  </div>
                 </div>
                 {/*Note*/}
                <div className="grid grid-cols-6 items-center gap-2">
                  <form className="col-span-5">
                    <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline" placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                    <FaRegTrashCan className="text-red-500"/>
                    </button>
                    
                  </div>
                </div>
                </div>  
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                 <div className="grid grid-cols-6 mb-4">
                  {/*Products Description*/}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="img-1.png" alt="" className="w-16 h-16 object-cover"/>
                    <h5 className="text-sm">Speacy seasoned ...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                  {/*Qty*/}
                  <div>
                    <span>2</span>
                  </div>
                  {/*Price*/}
                  <div>
                    <span>$4.58</span>
                  </div>
                 </div>
                 {/*Note*/}
                <div className="grid grid-cols-6 items-center gap-2">
                  <form className="col-span-5">
                    <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline" placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                    <FaRegTrashCan className="text-red-500"/>
                    </button>
                    
                  </div>
                </div>
                </div>  
              </div> 
                </div> 
              {/*Submit payment*/}     
              <div className="absolute bottom-0 w-full bg-[#262837] left-0 p-4">
                <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
                </div>
                <div>
                  <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue to Payment</button>
                </div>           
              </div>        
            
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
