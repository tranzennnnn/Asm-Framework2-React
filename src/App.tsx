import './App.css'
import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Category from './pages/Category'
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from './layouts/AdminLayout'
import Products from './pages/admin/Products'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import PrivateRouter from './PrivateRouter'
import Cart from './pages/Cart'
import CategoryList from './pages/admin/CategoryList'
import Sigin from './pages/Signin'
import Signup from './pages/Signup'
import CategoryEdit from './pages/admin/CategoryEdit'
import CategoryAdd from './pages/admin/CategoryAdd'

interface IMessage {
  user: string,
  message: string
}

function App() {
  const router = useRoutes([
    {
      path: '/', Component: ClientLayout, children: [
        { path: '', Component: Home },
        { path: 'cart', Component: Cart },
        { path: 'detail/:id', Component: Detail },
        { path: 'category', Component: Category },
        { path: 'category/:id', Component: Category },
        { path: 'login', Component: Sigin },
        { path: 'register', Component: Signup }
      ]},
    
    {path:'/admin',element: <PrivateRouter><AdminLayout/></PrivateRouter> ,children:[
      {path:'products',Component:Products},
      {path:'products/add',Component:ProductAdd},
      {path:'products/edit/:id',Component:ProductEdit},
      {path:'categories',Component:CategoryList},
      {path:'categories/add',Component:CategoryAdd},
      {path:'categories/edit/:id',Component:CategoryEdit}
    ]},
  ])
  return router
  
}


export default App
