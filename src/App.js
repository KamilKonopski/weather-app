import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import './App.css';

const api = {
  key: "5f13c8975544756484231769e79bd704",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  function search(event) {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        });
    };
  };

  function searchQuery(event) {
    setQuery(event.target.value)
  }

  return (
    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
          ? 'app warm' : 'app')
        : 'app'}>
      <main>
        <SearchBar
          search={search}
          searchQuery={searchQuery}
          query={query}
        />
        <SearchResults weather={weather} />
      </main>
    </div>
  );
}

export default App;
