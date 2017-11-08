import React, { Component } from 'react';
import earthquakes from '../data/earthquakes.js';
import moment from 'moment';

class EarthquakeList extends Component{
	render(){
	let info = earthquakes.features.map((earthquakes => {
	  return (
	        <div className="quake-list">
	            <div className="col-sm-6" key={earthquakes.place}>
	              <div className="card-deck">
									<div className="card" style={{width:'20rem'}}>
	                <div className="card-block">
	                  <h4 className="card-title">{earthquakes.title}</h4>
	                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.properties.mag}</h6>
	                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.time).format('llll')}</h6>
	                  <p className="card-text">Coordinates: {earthquakes.geometry.coordinates}</p>
	                  <a href={earthquakes.properties.url} className="card-link">USGS Event Link</a>
									}
	                </div>
	              </div>
	            </div>
<<<<<<< HEAD
						</div>
					</div>
=======
	      		
	      	</div>
	    	</div>
>>>>>>> d199e9e106329ff16f621da3f6ad828d8bc36e99
	  		)
	  })
	)
    return(
      <section>
        {info}
      </section>
    )

	}
}

export default EarthquakeList;
