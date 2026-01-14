import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index/Index"
import Navbar from "./components/Navbar/Navbar"


function App() {
  

  return (
    <BrowserRouter basename="/cryptoflow"> {/* ← Agrega basename */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
