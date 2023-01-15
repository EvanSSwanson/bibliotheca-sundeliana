import React, { useState, useEffect } from "react"
//import getData from "../../apicalls"
import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css";
import Selection from '../Selection/Selection'
import Favorites from '../Favorites/Favorites'
import Theme from '../Theme/Theme'

const App = () => {
  const [data, setData] = useState({})
  const [latinData, setLatinData] = useState({})
  const [favoriteQuotes, setFavoriteQuotes] = useState([])
  const getData = (source) => {
    fetch('https://bible-api.com/' + source)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
     .then(data => setData(data))
     .catch(error => alert("not a valid verse!"))
     fetch('https://bible-api.com/' + source + '?translation=clementine')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
     .then(data => setLatinData(data))
  }

  const addToFavorites = (newEnglish, newLatin) => {
    const newQuote = {
      nameEnglish: newEnglish.reference,
      nameLatin: newLatin.reference,
      textEnglish: newEnglish.text,
      textLatin: newLatin.text
    }
    const duplicateTestArray = favoriteQuotes.filter(quote => quote.nameEnglish === newQuote.nameEnglish)
    if (duplicateTestArray.length === 0) {
      setFavoriteQuotes([...favoriteQuotes, newQuote])
    }
  }

  const removeFromFavorites = (text) => {
    const filteredFavorites = favoriteQuotes.filter(quote => quote.textEnglish !== text)
    setFavoriteQuotes(filteredFavorites)
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<div className="home-page">
            <div className="banner-top"></div>
            <div className="banner">
              <div className="title-border">
                <h1 className="title">BIBLIOTHECA SUNDELIANA</h1>
              </div>
            </div>
            <div className="banner-bottom"></div>
            <div className="selection-section">
              <NavLink to='/favorites' className='favorites-link'>
                <button className="favorites">
                  <div className="duller">
                    
                  </div>
                  <div className="option-title-border" id="favorites-border">
                    <h1 className="favorites-title">FAVORITES</h1>
                  </div>
                </button>
              </NavLink>
              <NavLink to='/filter' className='filter-link'>
                <button className="filter" onClick={() => getData("JHN 3:16")}>
                  <div className="option-title-border" id="filter-border">
                   <h1 className="filter-title">FILTER</h1>
                  </div>
                </button>
              </NavLink>
              <NavLink to='/theme' className='theme-link'>
                <button className="theme">
                  <div className="option-title-border" id="theme-border">
                    <h1 className="theme-title">THEME</h1>
                  </div>
                </button>
              </NavLink>
            </div>
            <a className="about" href="https://github.com/EvanSSwanson/bibliotheca-sundeliana">GitHub</a>
          </div>}
        />
        <Route path="/filter" element={<Selection favoriteQuotes={favoriteQuotes} addToFavorites= {addToFavorites} getData={getData} data={data} latinData={latinData}/>}/>
        <Route path="/favorites" element={<Favorites favoriteQuotes={favoriteQuotes} removeFromFavorites={removeFromFavorites} />}/>
        <Route path="/theme" element={<Theme/>}/>
      </Routes>
    </main>
  );
}

export default App;
