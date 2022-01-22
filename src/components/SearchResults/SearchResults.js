import React from 'react';

import './SearchResults.css';

const SearchResults = props => {
    const dateBuilder = (d) => {
        let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return (
        <div className='search-results'>
            <div className="location-box">
                <p className="location">Los Angeles, US</p>
                <p className="date">{dateBuilder(new Date())}</p>
            </div>
            <div className="weather-box">
                <p className="temp">15°C</p>
                <p className="weather">Sunny</p>
            </div>
        </div>
    );
};

export default SearchResults;