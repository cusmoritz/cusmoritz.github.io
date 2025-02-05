import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Home } from './components/Home';

const App = () => {

    // TODO:
    // Make sure users can't load /createstory or /authorpage without the subdomain / being logged in
    // Make RSS Feed


    // useEffect(() => {
    //     health();
    // }, []);

    // there's probably a safer and better way to do this?
    // const domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
    // // console.log('view', domain)
    // const subdomain = domain.split('.')[0];
    // console.log('subdomain', subdomain)

    // const fullDomain = /:\/\/([^\/]+)/.exec(window.location.href)

    return (

        <BrowserRouter>
            <div className="App">
                <Routes>

                <Route exact path="/" element={<Home />} />
                </Routes>
                <hr></hr>
            </div>
        </BrowserRouter>
        );
};


export default App;