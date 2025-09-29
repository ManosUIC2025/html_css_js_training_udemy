import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Book from '../../pages/Book';

const RoutesCourse = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/book/1">Book 1</Link></li>
                <li><Link to="/book/2">Book 2</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/book/:id' element={<Book />}></Route>
            </Routes>
        </>
    )
}

export default RoutesCourse