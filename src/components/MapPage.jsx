import React from 'react';
import FilterBar from './FilterBar';
import Map from './Map';
import './MapPage.css'

function MapPage(props) {
  const {crimeFilters, timeFilters } = props;

  return (
    <div className='map-page'>
    <Map crimeFilters={crimeFilters} timeFilters={timeFilters} />
    <FilterBar {...props} />
    </div>
  )
}

export default MapPage