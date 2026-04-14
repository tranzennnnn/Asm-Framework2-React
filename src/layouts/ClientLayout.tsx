import React, { createContext, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/header'
import Footer from '../components/client/footer'
import { CartReducerFn } from '../reducer/store'
import CartSidebar from '../components/client/CartSidebar'
export const countCT = createContext({} as any)

const ClientLayout = () => {
  const [count, setCount] = useState<number>(0)
  const [cartstate, dispath] = useReducer(CartReducerFn,{count: 0, isCloseSidebar:false, items: []})
  return (
    <countCT.Provider value = {{cartstate, dispath}}>
        <Header/>
        <Outlet/>
        <CartSidebar/>
        <Footer/>
    </countCT.Provider>
  )
}

export default ClientLayout