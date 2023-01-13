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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
