import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Home } from './components/Home';
import { Farkle } from './components/Farkle';
import { Projects } from "./components/Projects";

const App = () => {

    // there's probably a safer and better way to do this?
    // const domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
    // const subdomain = domain.split('.')[0];
    // console.log('subdomain', subdomain)

    // const fullDomain = /:\/\/([^\/]+)/.exec(window.location.href)

    return (
        <div className="App">
            <BrowserRouter>

                <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/farkle" element={<Farkle />} />
                <Route path="/projects" element={<Projects />} />
                <Route exact path="/projects/farkle" element={<Farkle/>} />
                </Routes>

            </BrowserRouter>
        </div>
        );
};


export default App;