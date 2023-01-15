import bookNames from "../../booknames"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Selection.css"

const Selection = (props) => {
const [chosenCode, setChosenCode] = useState("JHN")
const [bookName, setBookName] = useState("John")
const [verseNumber, setVerseNumber] = useState("3:16")
const hebrewBible = bookNames.filter(book => book.section === "OT")
const greekBible = bookNames.filter(book => book.section === "NT")
const hebrewButtons = hebrewBible.map(book => {
    return(
        <button className="book-button" id={book.code} onClick={() => assignBook(book.code, book.book)}>{book.book}</button>
    )
})
const greekButtons = greekBible.map(book => {
    return(
        <button className="book-button" id={book.code} onClick={() => assignBook(book.code, book.book)}>{book.book}</button>
    )
})

const assignBook = (code, name) => {
    setChosenCode(code)
    setBookName(name)
}

const handleChange = (event) => {
    setVerseNumber(event.target.value);
  }

    return(
        <div className="Selection">
            <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to="/" className="home-link">
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
            </nav>
            <div className="book-button-container">
                <div className="hebrew-books">
                    <h1 className="hebrew-title">Hebrew Bible (OT)</h1>
                    {hebrewButtons}
                </div>
                <div className="greek-books">
                    <h1 className="greek-title">Greek Writers (NT)</h1>
                    {greekButtons}
                </div>
            </div>
            <div className="input-section">
                <h3 className="selected-book-name">{bookName}</h3>
                <input
                    type="text"
                    className="verse-number"
                    value={verseNumber}
                    placeholder="verse number"
                    onChange={(event) => handleChange(event)}
                />
                <button className="submit-button" onClick={() => props.getData(`${chosenCode} ${verseNumber}`)}>SUBMIT</button>
            </div>
            <div className="display-container">
                <p className="english-display">{props.data.text}</p>
                <p className="latin-display">{props.latinData.text}</p>
            </div>
            <button className="favorite-button" onClick={() => props.addToFavorites(props.data, props.latinData)}>FAVORITE</button>
        </div>
    )
}

export default Selection