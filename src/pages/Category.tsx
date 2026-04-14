import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import type { ICategory } from '../interface/category'
import axios from 'axios'
import type { IProduct } from '../interface/product'
import {Link} from 'react-router-dom'

const Category = () => {
  const { id } = useParams<{ id: string }>()

  const { data: categories = [] } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/categories`)
      return data
    },
  })
  const selectedCategory = categories.find(c => c.id === Number(id))

  const { data: products = [], isLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/product`)
      return data
    },
  })
  const filteredProducts = selectedCategory ? products.filter(p => p.category?.toLowerCase()=== selectedCategory.name?.toLowerCase()) : products
  if (isLoading) {
    return <div>Dang tai du lieu</div>
  }
  return (
  <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* ===== SIDEBAR TRÁI: DANH SÁCH DANH MỤC ===== */}
      <aside className="w-[250px] shrink-0 border border-gray-200 rounded-3xl p-6 h-fit sticky top-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <span>⚙</span>
        </div>
        <hr className="mb-4" />
        <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Danh mục</p>
        <ul className="space-y-2">
          {/* Tùy chọn "Tất cả" */}
          <li>
            <Link
              to="/category"
              className={`flex justify-between items-center py-2 px-3 rounded-xl text-sm transition
                ${!id ? 'bg-black text-white font-bold' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Tất cả sản phẩm
            </Link>
          </li>
          {/* Vòng lặp hiển thị từng danh mục */}
          {categories.map(cat => (
            <li key={cat.id}>
              <Link
                to={`/category/${cat.id}`}
                className={`flex justify-between items-center py-2 px-3 rounded-xl text-sm transition
                  ${Number(id) === cat.id
                    ? 'bg-black text-white font-bold'  // Đang chọn thì tô đen
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {cat.name}
                <span>›</span>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <button className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Apply Filter
        </button>
      </aside>
      {/* ===== PHẢI: DANH SÁCH SẢN PHẨM ===== */}
      <main className="flex-1">
        {/* Tiêu đề + số lượng */}
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-2xl font-black uppercase tracking-tighter">
            {selectedCategory ? selectedCategory.name : 'Tất cả sản phẩm'}
          </h1>
          <p className="text-gray-500 text-sm">
            Hiển thị <span className="font-bold text-black">{filteredProducts.length}</span> sản phẩm
          </p>
        </div>
        {/* Grid sản phẩm */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">📦</p>
            <p className="text-lg font-semibold">Không có sản phẩm nào trong danh mục này</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <Link
                to={`/detail/${product.id}`}
                key={product.id}
                className="bg-[#F0EEED] rounded-2xl p-3 hover:shadow-md transition block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-sm leading-tight line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-base font-black">${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>

  )
}

export default Category