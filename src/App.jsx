import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Shop from "./pages/Shop"
import Home from "./pages/home"

function App() {


  return (
    <BrowserRouter basename="/e_shop_website">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/shop" element={<Shop/>}> </Route>

      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
