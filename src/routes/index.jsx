import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Create from "../pages/Create"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/cadastrar" element={<Create/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}