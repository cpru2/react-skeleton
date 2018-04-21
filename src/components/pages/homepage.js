import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import geographyObject from "../../Assets/maps/ne_110m_admin_0_countries.json";

class Homepage extends Component {
  render() {
    return (
      <div className="map-container">

        <ComposableMap
          style={{ width: "100%", height: "100%"}}>
          <ZoomableGroup>
            <Geographies geography={geographyObject}>
            {(geographies, projection) => geographies.map((geography, i) => (
              <Geography key={ `geography-${i}` } geography={ geography } projection={ projection } />
            ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

      </div>
    );
  }
}

export default Homepage;
