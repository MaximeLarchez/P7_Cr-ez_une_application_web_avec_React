import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logement from './pages/Fiche-logement'
import Error from'./pages/Error404'
import About from './pages/About';

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import Cart from './Cart';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<><Header/><Banner/><Footer/></>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/logement' element = {<Logement/>}/>
                <Route path='*' element = {<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
