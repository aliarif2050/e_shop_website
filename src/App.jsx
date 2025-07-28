import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Home from "./pages/home"

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
