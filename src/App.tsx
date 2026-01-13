import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index/Index"
import Navbar from "./components/Navbar/Navbar"


function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/cryptoflow" element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
