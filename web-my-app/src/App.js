import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Container/home.js';
import Add from './Component/Container/add.js';
import Student from './Component/Container/student.js';
import Header from './Component/Layout/header.js';
import Footer from './Component/Layout/footer.js';

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/student/add" element={<Add />} />
                </Routes>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    );
}
export default App;
