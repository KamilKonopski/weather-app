import React from 'react';

import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

// const api = {
//   key: "fcb6994c5d748fc4cbc63f5a0f68e8fd",
//   base: "api.openweathermap.org/data/2.5/",
// };

function App() {

  // const [query, setQuery] = useState;
  // const [weather, setWeather] = useState;

  return (
    <div className="app">
      <main>
        <SearchBar />
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
