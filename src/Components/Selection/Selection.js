import bookNames from "../../booknames"
import React, { useState, useEffect } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import "./Selection.css";

const Selection = () => {
const hebrewBible = bookNames.filter(book => book.section === "OT");
const greekBible = bookNames.filter(book => book.section === "NT");
const hebrewButtons = hebrewBible.map(book => {
    return(
        <button className={book.code}>{book.book}</button>
    )
})
const greekButtons = greekBible.map(book => {
    return(
        <button className={book.code}>{book.book}</button>
    )
})


    return(
        <div className="Selection">
            <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to='/' className='home-link'>
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
                <div className="nav-bar-top"></div>
            </nav>
            {hebrewButtons}
            {greekButtons}
        </div>
    )
}

export default Selection;