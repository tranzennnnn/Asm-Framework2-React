import React from 'react'

const forImages = () => {
  return (
        <section className="bg-gray-100 rounded-2xl md:rounded-4xl max-w-6xl mx-auto px-4 py-6 md:py-10">
  <h2 className="text-2xl sm:text-3xl md:text-5xl !font-extrabold text-center mb-4 md:mb-6 py-4 md:py-8">
    BROWSE BY DRESS STYLE
  </h2>

  <div className="px-2 sm:px-4 md:px-15">

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-2">
        <img src="/src/assets/images/Frame 61.png" className="w-full sm:w-1/2 h-48 sm:h-60 md:h-73 object-cover"/>
        <img src="/src/assets/images/Frame 62.png" className="w-full sm:w-1/2 h-48 sm:h-60 md:h-73 object-cover"/>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-2">
      <div className="relative rounded-xl overflow-hidden w-full sm:w-1/2">
        <img src="/src/assets/images/girl.png" className="w-full h-48 sm:h-60 md:h-73 object-cover"/>    
      </div>

      <div className="relative rounded-xl overflow-hidden w-full sm:w-1/2">
        <img src="/src/assets/images/gym.png" className="w-full h-48 sm:h-60 md:h-73 object-cover"/>
      </div>
    </div>

  </div>
</section>
  )
}

export default forImages
