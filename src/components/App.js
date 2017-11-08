import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from '../data/EarthquakeList.js';
import EarthquakeInfo from '../data/EarthquakeInfo.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="App">
              <div className="title">
                <div className="my-header">"Earthquakes!"</div>
              </div>
              <div className="wrapper">
            <EarthquakeInfo />
            <EarthquakeList />
            </div>
        </div>
      </div>
    )
  }
}

export default App;
