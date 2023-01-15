import React, { useState, useEffect } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import "./Theme.css";

const Theme = () => {

    return (
        <div className="Theme">
             <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to="/" className="home-link">
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
            </nav>
            <h1 className="message">Work in Progress!</h1>
        </div>
    )
}

export default Theme