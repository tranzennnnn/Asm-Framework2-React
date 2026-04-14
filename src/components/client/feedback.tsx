import React from 'react'

const Feedback = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
            OUR HAPPY CUSTOMERS
          </h2>

          {/* arrows */}
          <div className="flex gap-2">
            <button className="font-extrabold text-2xl md:text-4xl flex items-center justify-center">←</button>
            <button className="font-extrabold text-2xl md:text-4xl flex items-center justify-center">→</button>
          </div>
        </div>

        {/* LIST */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible scroll-smooth">

          {/* CARD 1 */}
          <div className="min-w-[260px] sm:min-w-[300px] bg-white p-4 sm:p-6 rounded-xl border border-gray-300">
            <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm sm:text-base">Sarah M.</span>
              <span className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              "I'm blown away by the quality and style of the clothes I received from Shop.co.
              From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[260px] sm:min-w-[300px] bg-white p-4 sm:p-6 rounded-xl border border-gray-300">
            <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm sm:text-base">Alex K.</span>
              <span className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.
              The range of options they offer is truly remarkable."
            </p>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[260px] sm:min-w-[300px] bg-white p-4 sm:p-6 rounded-xl border border-gray-300">
            <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm sm:text-base">James L.</span>
              <span className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co."
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Feedback