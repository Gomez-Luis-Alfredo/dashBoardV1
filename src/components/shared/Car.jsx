import { MdOutlineClose } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

export const Car = (props) => {
    const {showOrder, setShowOrder} = props
  return (
    <div className={`lg:col-span-2 fixed  top-0 bg-[#1F1D2B] lg:w-96 lg:right-0 w-full h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`} >
    {/*Order*/}
    <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full ">
      <MdOutlineClose onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 
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
  )
}
