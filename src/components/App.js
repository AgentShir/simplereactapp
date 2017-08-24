import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';
import EarthquakeList from '../data/EarthquakeList';
import EarthquakeInfo from '../data/EarthquakeInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src="{logo}" className="App-logo" alt="logo" />
            <div className="title">
              <div className="my-header">
              Earthquakes!
              </div>
                <EarthquakeInfo />
                <EarthquakeList />
        </div>
      </div>
    );
  }
}

export default App;
