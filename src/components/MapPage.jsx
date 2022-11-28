import React, {useState} from 'react';
import FilterBar from './FilterBar';
import FilterMenu from './FilterMenu';
import Map from './Map';
import './MapPage.css'
//TODO: animations?? transitions??

function MapPage(props) {
  const {crimeFilters, timeFilters } = props;
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='map-page'>
    <Map crimeFilters={crimeFilters} timeFilters={timeFilters} />
    <FilterBar className= 'filter-bar'setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    {menuOpen &&
    <FilterMenu id= 'filter-menu' {...props} />
    }
    </div>
  )
}

export default MapPage