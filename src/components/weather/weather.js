import React, { Component } from 'react';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

export default class Weather extends Component {

  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  render() {
    return (
      <div className="weather-wrapper">
          {PLACES.map((place, index) => (
            <button
              key={index}
              onClick={() => {
                console.log('Clicked index '+index);
              }}
            >
                {place.name}
            </button>
      ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}
        />
    </div>
    );
  }
}
