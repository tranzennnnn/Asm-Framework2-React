import React from 'react'

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-8 md:py-10">

      {/* Newsletter */}
      <div className="bg-black text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold max-w-xl text-center md:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3 w-full md:w-auto">
          <div className="bg-white text-black px-4 py-2 rounded-full w-full">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-2 sm:px-4 py-2 rounded-full text-black outline-none w-full text-sm sm:text-base"
            />
          </div>

          <div className="bg-white text-black px-4 py-2 rounded-full text-center">
            <button className="py-2 text-sm sm:text-base w-full">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-xs sm:text-sm text-gray-600">
        
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1 text-center md:text-left">
          <h3 className="text-black font-bold text-lg mb-3">SHOP.CO</h3>
          <p className="mb-4">
            We have clothes that suits your style and which you're proud to wear.
          </p>

          <div className="flex justify-center md:justify-start gap-3 text-black text-lg">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-black mb-3">COMPANY</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold text-black mb-3">HELP</h4>
          <ul className="space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="font-semibold text-black mb-3">FAQ</h4>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-black mb-3">RESOURCES</h4>
          <ul className="space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs sm:text-sm text-gray-500 text-center md:text-left">
        
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0">
          <img src="https://img.icons8.com/color/48/visa.png" className="h-5 sm:h-6" />
          <img src="https://img.icons8.com/color/48/mastercard.png" className="h-5 sm:h-6" />
          <img src="https://img.icons8.com/color/48/paypal.png" className="h-5 sm:h-6" />
          <img src="https://img.icons8.com/color/48/apple-pay.png" className="h-5 sm:h-6" />
          <img src="https://img.icons8.com/color/48/google-pay.png" className="h-5 sm:h-6" />
        </div>

      </div>

    </div>
  )
}

export default Footer