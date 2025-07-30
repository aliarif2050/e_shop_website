import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Home from "./pages/home"
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import { useState } from "react"

function App() {
const [order,setOrder] = useState(null)
const [orderNumber, setOrderNumber] = useState(1);


  return (
    <BrowserRouter basename="/e_shop_website">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/shop" element={<Shop/>}> </Route>
         <Route path="/cart" element={<Cart/>}> </Route>
         <Route path="/checkout" element={<Checkout setOrder={(order)=> {setOrder({...order,OrderNumber:orderNumber}); setOrderNumber(orderNumber+1)}} />}> </Route>
         <Route path="/order-confirmation" element={<Order order={order} />}> </Route>




      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
