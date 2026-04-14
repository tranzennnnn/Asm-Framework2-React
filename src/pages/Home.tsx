import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import type { IProduct } from '../interface/product'
import ProductItem from '../components/client/ProductItem'
import Background from '../components/client/background'
import { useState } from 'react'

const Home = () => {
  const [searchText, setSearchText] = useState('')  
  const queryclient = useQueryClient()
  const {data, isLoading} = useQuery<IProduct[]>({
    queryKey:['products'],
    queryFn: async ()=>{
        const {data} = await axios.get(`http://localhost:3000/product`)
        return data
    },
    enabled:!queryclient.getQueryData(['products'])
  })
  const filteredProducts = data?.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())) ?? []
  if (isLoading) return <div className="text-center py-20 font-bold">Đang tải dữ liệu...</div>

  return (
    <>
   <Background />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-5xl font-black text-center uppercase mb-8 tracking-tighter">
          New Arrivals
        </h2>
        {/* 3. Thanh tìm kiếm */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            {/* Icon kính lúp */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              width="20" height="20" viewBox="0 0 24 24" fill="none"
            >
              <path d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="currentColor" fillOpacity="0.4"/>
            </svg>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}   // 4. Cập nhật state khi gõ
              placeholder="Search for products..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-[#F0F0F0] outline-none text-sm"
            />
            {/* Nút xóa nhanh khi đang tìm kiếm */}
            {searchText && (
              <button
                onClick={() => setSearchText('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >✕</button>
            )}
          </div>
        </div>
        {/* 5. Hiển thị kết quả hoặc thông báo không tìm thấy */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold">Không tìm thấy sản phẩm nào</p>
            <p className="text-sm mt-2">Thử tìm kiếm với từ khóa khác nhé!</p>
          </div>
        ) : (
          <>
            {/* Hiển thị số kết quả nếu đang tìm */}
            {searchText && (
              <p className="text-gray-500 text-sm mb-4 text-center">
                Tìm thấy <span className="font-bold text-black">{filteredProducts.length}</span> sản phẩm cho "<span className="italic">{searchText}</span>"
              </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
        <div className="flex justify-center mt-12 mb-20 text-center">
          <button className="px-12 py-3 border border-gray-200 rounded-full font-medium hover:bg-black hover:text-white transition duration-300">
            View All
          </button>
        </div>
        <hr className="border-gray-100" />
      </main>
      </>
  )
}

export default Home
