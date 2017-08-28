import React, { Component } from 'react';
import earthquakes from '../data/earthquakes.js';
import moment from 'moment';

let info = earthquakes.features.map(earthquakes => {
  return (
        <div className="quake-list">
          <div className="row">
          {earthquakes.map(earthquakes => (
            <div className="col-sm-6" key={earthquakes.place}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{earthquakes.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.time).format('llll')}</h6>
                  <p className="card-text">Coordinates: {earthquakes.geometry.coordinates}</p>

                  <a href={earthquakes.properties.url} className="card-link">USGS Event Link</a>
                </div>
              </div>
            </div>
          )
        )
      }
      </div>
    </div>
  )
    });

class EarthquakeList extends Component{
  render(){
    return(
      <section>
        {info}
      </section>
    )
  }
}

export default EarthquakeList;
