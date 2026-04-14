import { Link } from 'react-router-dom'
import type { IProduct } from '../interface/product'

type Props = {
  products?: IProduct[];
};

const ListProducts = ({ products = [] }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
      
      {/* FILTER */}
      <aside className="hidden md:block w-1/4 border border-gray-300 rounded-3xl p-6 h-fit sticky top-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <i className="fa-solid fa-sliders"></i>
        </div>

        <hr className="mb-6" />

        <ul className="space-y-4 text-gray-500 mb-8">
          <li className="flex justify-between items-center cursor-pointer hover:text-black">T-shirts <i className="fa-solid fa-chevron-right text-xs"></i></li>
          <li className="flex justify-between items-center cursor-pointer hover:text-black">Shorts <i className="fa-solid fa-chevron-right text-xs"></i></li>
          <li className="flex justify-between items-center cursor-pointer hover:text-black">Shirts <i className="fa-solid fa-chevron-right text-xs"></i></li>
          <li className="flex justify-between items-center cursor-pointer hover:text-black">Hoodie <i className="fa-solid fa-chevron-right text-xs"></i></li>
          <li className="flex justify-between items-center cursor-pointer hover:text-black">Jeans <i className="fa-solid fa-chevron-right text-xs"></i></li>
        </ul>

        <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition">
          Apply Filter
        </button>
      </aside>

      {/* MAIN */}
      <main className="w-full md:w-3/4">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Casual</h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Showing {products.length} products
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">

          {products.map((item) => (
            <Link 
              to={`/detail/${item.id}`} 
              key={item.id}
              className="bg-white p-2 sm:p-3 md:p-4 rounded-xl block"
            >

              <img 
                src={item.image} 
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2"
              />

              <h3 className="text-xs sm:text-sm md:text-base font-medium line-clamp-2">
                {item.name}
              </h3>

              <div className="text-xs sm:text-sm">
                ⭐⭐⭐⭐⭐ <span>{item.rating}</span>
              </div>

              <p className="font-bold text-sm sm:text-base md:text-lg">
                ${item.price}
              </p>

            </Link>
          ))}

        </div>

        {/* PAGINATION */}
        <hr className="my-6 md:my-10" />

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition text-sm">
            ← Previous
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded-lg font-bold cursor-pointer">1</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">2</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">3</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400">...</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">10</span>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition text-sm">
            Next →
          </button>

        </div>

      </main>
    </div>
  )
}

export default ListProducts