import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <div className="home-wrapper">
            <h1>
                Welcome
            </h1>
            <Link to="/farkle"><button>Farkle</button></Link>
        </div>
    )
};