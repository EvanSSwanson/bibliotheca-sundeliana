import React, { useState, useEffect } from "react"
//import getData from "../../apicalls"
import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css";
import Selection from '../Selection/Selection'

const App = () => {
  const [data, setData] = useState({})
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
  }

  // useEffect(() => {
  //   getData('https://bible-api.com/john%203:16?translation=kjv')
  //   console.log("data has loaded!", data)
  // }, [])

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
                <button className="filter">
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
            <p className="about">About</p>
          </div>}
        />
        <Route path="/filter" element={<Selection getData={getData} data={data}/>}

        />
      </Routes>
    </main>
  );
}

export default App;
