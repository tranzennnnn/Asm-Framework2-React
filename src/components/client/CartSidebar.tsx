import React, { useContext } from 'react'
import { countCT } from '../../layouts/ClientLayout'

const CartSidebar = () => {
    const {cartstate,dispath} = useContext(countCT)
  return (
    
    // <div id='cartsidebar' className={`${(cartstate.isCloseSidebar)?'show ':''}fixed duration-500 right-0 top-0 w-[300px] h-[100vh] bg-amber-100 border border-b-gray-300`}>        <button onClick={()=>dispath({type:'closeOpen',payload:false})}>Close</button>
    //     <h3>Danh sách sản phẩm trong giỏ hàng</h3>
    //     <ul>
    //         <li>Sản pahamr 1</li>
    //         <li>Sản pahamr 2</li>
    //         <li>Sản pahamr 3</li>
    //         <li>Sản pahamr 4</li>
    //     </ul>
    //     <span>Tổng số lượng {cartstate.count}</span>
    // </div>
    <>
            {/* Nền mờ phía sau giỏ hàng */}
            {cartstate.isCloseSidebar && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                    onClick={() => dispath({ type: 'closeOpen', payload: false })}
                ></div>
            )}
            {/* Khung giỏ hàng trượt từ phải sang */}
            <div 
                className={`fixed top-0 right-0 w-[380px] h-[100vh] bg-white shadow-2xl z-50 duration-500 transform flex flex-col ${
                    cartstate.isCloseSidebar ? 'translate-x-0' : 'translate-x-[100%]'
                }`}
            >
                {/* Header SideBar */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-800">
                        Giỏ hàng ({cartstate.count})
                    </h3>
                    <button 
                        onClick={() => dispath({ type: 'closeOpen', payload: false })}
                        className="text-gray-400 hover:text-red-500 hover:rotate-90 transition duration-300"
                    >
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                {/* Danh sách List Items bên trong giỏ hàng */}
                <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    
                    {/* --- BẠN SẼ DÙNG VÒNG LẶP .map() Ở ĐÂY SAU KHI LÀM XONG LOGIC DỮ LIỆU ARRAY --- */}
                    
                    {/* Item mẫu 1 */}
                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] bg-gray-100 rounded-xl flex items-center justify-center p-1">
                            <img src="https://i.pinimg.com/736x/82/0d/3d/820d3d561fb596a7e0a04ddca532c840.jpg" alt="Item" className="rounded-lg object-cover w-full h-full" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-800 text-sm mb-1 leading-tight line-clamp-1">ONE LIFE GRAPHIC T-SHIRT</h4>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-red-500">$200.00</span>
                                {/* Nút tăng giảm số lượng */}
                                <div className="flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full">
                                    <button className="text-gray-500 hover:text-black font-bold">-</button>
                                    <span className="text-xs font-bold w-4 text-center">1</span>
                                    <button className="text-gray-500 hover:text-black font-bold">+</button>
                                </div>
                            </div>
                        </div>
                        <button className="text-gray-300 hover:text-red-500 transition">
                             {/* Thay thẻ i bằng icon thùng rác SVG vì sợ project bạn chưa link font-awesome */}
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
                        </button>
                    </div>
                    {/* Item mẫu 2 */}
                    <div className="flex gap-4 items-center">
                        <div className="w-[80px] h-[80px] bg-gray-100 rounded-xl flex items-center justify-center p-1">
                            <img src="https://i.pinimg.com/736x/d6/9e/34/d69e34d67d49b20f485f08279a8fe759.jpg" alt="Item" className="rounded-lg object-cover w-full h-full" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-800 text-sm mb-1 leading-tight line-clamp-1">Mèo Cập Nhật Mới</h4>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-red-500">$100.00</span>
                                {/* Nút tăng giảm số lượng */}
                                <div className="flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full">
                                    <button className="text-gray-500 hover:text-black font-bold">-</button>
                                    <span className="text-xs font-bold w-4 text-center">2</span>
                                    <button className="text-gray-500 hover:text-black font-bold">+</button>
                                </div>
                            </div>
                        </div>
                        <button className="text-gray-300 hover:text-red-500 transition">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
                        </button>
                    </div>
                </div>
                {/* Phần dưới cùng (Footer Sidebar) */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-500">Tổng sản phẩm:</span>
                        <span className="font-bold">{cartstate.count} món</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold uppercase tracking-tight leading-none">Tổng tiền:</span>
                        <span className="text-2xl font-black text-red-500">$300.00</span>
                    </div>
                    
                    <button className="w-full bg-black text-white hover:bg-gray-800 transition py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl">
                        Tiến hành Checkout 
                    </button>
                </div>
            </div>
        </>
  )
}

export default CartSidebar
