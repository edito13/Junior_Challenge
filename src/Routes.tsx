import React from "react"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Login"

export default () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home name='caralho'/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
)