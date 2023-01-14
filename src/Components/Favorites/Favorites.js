import React, { useState, useEffect } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import "./Favorites.css";

const Favorites = (props) => {
    const cards = props.favoriteQuotes.map(quote => {
        return(
            <div className="quote-card">
                <h2 className="verse-name">{quote.nameEnglish}/{quote.nameLatin}</h2>
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
    //const [favoritesCards, setFavoritesCards] = useState()


    return (
        <div className="Favorites">
            <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to="/" className="home-link">
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
            </nav>
            {cards}
        </div>
    )
}

export default Favorites;