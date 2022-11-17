import React from 'react';

import './SearchResults.css';

function SearchResults(props) {

    function dateBuilder(d) {
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
            {(typeof props.weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <p className="location">{props.weather.name}, {props.weather.sys.country}</p>
                        <p className="date">{dateBuilder(new Date())}</p>
                    </div>
                    <div className="weather-box">
                        <p className="temp">{Math.round(props.weather.main.temp)}°C</p>
                        <p className="weather">{props.weather.weather[0].main}</p>
                    </div>
                </div>
            ) : ("")}
        </div>
    );
};

export default SearchResults;
