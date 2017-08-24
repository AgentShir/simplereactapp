import React, { Component } from 'react';
import earthquakes from '../data/earthquakes'

let landslide = earthquake.features.map(earthquakes => {
      return (
        <div className="quake-list">
          <div className="row">
          </div>
        </div>
      )
    });

class EarthquakeInfo extends Component{
  render(){
    return(
      <section>
      </section>
    )
  }
}
// <div className="earthquake-title">"This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States."</div>

export default EarthquakeInfo;
