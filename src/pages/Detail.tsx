import { useParams } from 'react-router-dom';
import ProductItem from '../components/client/ProductItem'
import type { IProduct } from '../interface/product'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Props = {
  product?: Partial<IProduct>;
  products?: IProduct[];
};

const Detail = () => {
  const {id} = useParams<{id: string}>()
  const {data: product, isLoading: isProductLoading} =
  useQuery<IProduct>({
    queryKey: ['product', id],
    queryFn: async () => {
      const {data} = await axios.get(`http://localhost:3000/product/${id}`)
      return data
    },
    enabled: !!id
  })
  const {data: products = [], isLoading: isProductsLoading} =
  useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const {data} = await axios.get(`http://localhost:3000/product`)
      return data
    }
  })
  if (isProductLoading || isProductsLoading) {
    return <div className='text-center, py-20 font-bold'>Dang tai</div>
  }
  return (
    <>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 pt-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
            <a href="/" className="hover:text-black transition">Home</a>
            <span>›</span>
            <a href="#" className="hover:text-black transition">Shop</a>
            <span>›</span>
            <span className="text-black font-medium">T-shirts</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3">
              <img src={product?.image} className="w-20 h-20 rounded-xl border object-cover" />
              <img src={product?.image} className="w-20 h-20 rounded-xl border object-cover" />
              <img src={product?.image} className="w-20 h-20 rounded-xl border object-cover" />
            </div>
            <img src={product?.image} className="w-full md:max-w-md rounded-2xl object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-black uppercase mb-2 tracking-tighter">
              {product?.name || "ONE LIFE GRAPHIC T-SHIRT"}
            </h1>
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              ★★★★☆ <span className="text-gray-500 text-sm ml-2">4.5/5</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product?.price || 100}</span>
              <span className="line-through text-gray-400 text-xl font-medium">$300</span>
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-bold">-40%</span>
            </div>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              This graphic t-shirt is perfect for any occasion. Crafted from a premium cotton blend, it offers both comfort and style.
            </p>

            <button className="bg-black text-white px-12 py-4 rounded-full w-full font-bold hover:bg-gray-800 transition shadow-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID (Giống Angular) */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-8">All Reviews (451)</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-200 rounded-3xl p-6 relative">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="font-bold mb-2">Samantha D. <span className="text-green-500 text-xs ml-1">✓</span></p>
                <p className="text-gray-500 text-sm italic">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fashion enthusiast, this is now one of my favorites."</p>
            </div>
            <div className="border border-gray-200 rounded-3xl p-6 relative">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="font-bold mb-2">Alex M. <span className="text-green-500 text-xs ml-1">✓</span></p>
                <p className="text-gray-500 text-sm italic">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a fashion enthusiast, I appreciate the attention to detail."</p>
            </div>
        </div>
      </section>

      {/* YOU MIGHT ALSO LIKE ( RELATED PRODUCTS ) */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center uppercase mb-10 tracking-tighter">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map(p => <ProductItem key={p.id} product={p} />)}
        </div>
      </div>
    </>
  )
}

export default Detail
