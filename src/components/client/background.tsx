import React from 'react'

const Background = () => {
  return (
    <>
      <section className="bg-[#F2F0F1]">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-0 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left py-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-[900] leading-tight mb-4 tracking-tighter uppercase">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-12 py-3 rounded-full w-full sm:w-auto font-medium hover:bg-gray-800 transition">
              Shop Now
            </button>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mt-8 text-xs sm:text-sm">
              <div>
                <p className="font-bold text-2xl md:text-4xl">200+</p>
                <p className="text-gray-500">International Brands</p>
              </div>
              <div className="border-x border-gray-200 px-6 md:px-10">
                <p className="font-bold text-2xl md:text-4xl">2,000+</p>
                <p className="text-gray-500">High-Quality Products</p>
              </div>
              <div>
                <p className="font-bold text-2xl md:text-4xl">30,000+</p>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/src/assets/images/Rectangle 2.jpg" 
              alt="Hero" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Brand Logos Bar */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 bg-black py-10 px-10 md:px-20">
          <img src="/src/assets/images/Group.png" className="h-6 md:h-10 invert brightness-0" alt="Logo 1"/>
          <img src="/src/assets/images/zara-logo-1 1.png" className="h-6 md:h-10 invert brightness-0" alt="Logo 2"/>
          <img src="/src/assets/images/gucci-logo-1 1.png" className="h-6 md:h-10 invert brightness-0" alt="Logo 3"/>
          <img src="/src/assets/images/prada-logo-1 1.png" className="h-6 md:h-10 invert brightness-0" alt="Logo 4"/>
          <img src="/src/assets/images/Group@2x.png" className="h-6 md:h-10 invert brightness-0" alt="Logo 5"/>
      </div>
    </>
  )
}

export default Background
