import { useContext } from 'react';
import type { IProduct } from '../interface/product'
import { countCT } from '../layouts/ClientLayout';

type Props = {
  products?: IProduct[];
};

const Cart = ({ products = [] }: Props) => {
  const {cartstate, dispath} = useContext(countCT) as any
  const subtotal = cartstate.items.reduce((total: number, item: IProduct) => total + Number(item.price), 0)
  const discount = subtotal * 0.2
  const delivery = 15
  const totalAmount = subtotal > 0 ? (subtotal - discount + delivery) : 0
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 tracking-tighter">
        Your Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-5">
        
        {/* LIST CÁC SẢN PHẨM TỪ CONTEXT GIỎ HÀNG */}
        <div className="flex-1 border border-gray-200 rounded-[20px] p-3 sm:p-5 space-y-4 sm:space-y-6">
          
          {cartstate.items.length === 0 && (
             <p className="text-gray-500 italic py-10 text-center">Giỏ hàng của bạn hoàn toàn trống. Vui lòng thêm sản phẩm!</p>
          )}
          {/* Vòng lặp map mảng thật */}
          {cartstate.items.map((item: IProduct) => (
            <div 
              key={item.id}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center"
            >
              {/* IMAGE */}
              <div className="w-full sm:w-[124px] h-[200px] sm:h-[124px] bg-[#F0EEED] rounded-[12px] flex items-center justify-center overflow-hidden">
                <img src={item.image} className="object-contain h-full" />
              </div>
              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between sm:h-[124px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  {/* NÚT BẤM XÓA CHÍNH THỨC */}
                  <button 
                    onClick={() => dispath({ type: 'removefromcart', payload: item.id })}
                    className="hover:scale-110 transition bg-red-50 p-2 rounded-full cursor-pointer"
                  >
                    {/* Vẽ cái thùng rác icon SVG cho đẹp khỏi cần fontawesome */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
                {/* BOTTOM PRICE */}
                <div className="flex justify-between items-center mt-3 sm:mt-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">
                    ${item.price}
                  </span>
                  <div className="flex items-center gap-4 bg-[#F0F0F0] px-4 py-2 rounded-full font-medium">
                    <button className="text-lg font-bold text-gray-600">-</button>
                    <span className="text-sm">1</span>
                    <button className="text-lg font-bold text-gray-600">+</button>
                  </div>
                </div>
              </div>
              <hr className="border-gray-100 sm:hidden" />
            </div>
          ))}
        </div>
        {/* BẢNG ORDER SUMMARY */}
        <div className="w-full lg:w-[450px] border border-gray-200 rounded-[20px] p-4 sm:p-6 h-fit relative">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
            Order Summary
          </h2>
          
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="flex justify-between text-sm sm:text-base text-gray-500">
              <span>Subtotal</span>
              <span className="font-bold text-black">${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base text-gray-500">
              <span>Discount (-20%)</span>
              <span className="font-bold text-red-500">-${discount}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base text-gray-500">
              <span>Delivery Fee</span>
              <span className="font-bold text-black">${subtotal > 0 ? delivery : 0}</span>
            </div>
            <hr className="border-gray-100" />
            <div className="flex justify-between pt-2">
              <span className="text-base sm:text-lg md:text-xl font-medium">Total</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart