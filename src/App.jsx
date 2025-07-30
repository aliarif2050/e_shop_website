import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Home from "./pages/home"
import Checkout from "./pages/Checkout"

function App() {


  return (
    <BrowserRouter basename="/e_shop_website">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/shop" element={<Shop/>}> </Route>
         <Route path="/cart" element={<Cart/>}> </Route>
         <Route path="/checkout" element={<Checkout/>}> </Route>



      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
