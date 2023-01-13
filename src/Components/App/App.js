import logo from "../../logo.svg";
import React, { useState, useEffect } from "react"
//import getData from "../../apicalls"
import { Route, Routes, NavLink } from "react-router-dom"
import "./App.css";

function App() {
  const [data, setData] = useState([])
  const [favoriteQuotes, setFavoriteQuotes] = useState([])
  const getData = (source) => {
    fetch(source)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
     .then(data => setData(data))
  }

  useEffect(() => {
    getData('https://bible-api.com/john%203:16?translation=kjv')
    console.log("data has loaded!", data)
  }, [])

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
                <button className="favorites"></button>
              </NavLink>
              <NavLink to='/filter' className='filter-link'>
                <button className="filter"></button>
              </NavLink>
              <NavLink to='/theme' className='theme-link'>
                <button className="theme"></button>
              </NavLink>
            </div>
            <p className="about">About</p>
          </div>}
        />
        <Route
        />
      </Routes>
        {/* <img src="https://www.gannett-cdn.com/presto/2019/04/16/USAT/ec6b48e5-214b-46c4-bd4d-d5ebf411fa14-GettyImages-636538866.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp" className="header-photo" alt="logo" /> */}
    </main>
  );
}

export default App;
