import React, { useState, useEffect } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import "./Favorites.css";

const Favorites = (props) => {
    const cards = props.favoriteQuotes.map(quote => {
        return(
            <div className="quote-card">
                <h2 className="verse-name">{quote.nameEnglish}<br></br>{quote.nameLatin}</h2>
                <div className="english-box">
                    <h3 className="english-marker">English:</h3>
                    <p className="english-text">{quote.textEnglish}</p>
                </div>
                <div className="latin-box">
                    <h3 className="latin-marker">Latin:</h3>
                    <p className="latin-text">{quote.textLatin}</p>
                </div>
                <button className="remove" onClick={() => props.removeFromFavorites(quote.textEnglish)}>Remove</button>
            </div>
        )
    })

    return (
        <div className="Favorites">
            <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to="/" className="home-link">
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
            </nav>
            <h1 className="favorites-header">Favorites</h1>
            <div className="cards-container">
                {cards}
            </div>
        </div>
    )
}

export default Favorites;