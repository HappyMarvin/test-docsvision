import Place from "./Place";

import './Places.css';

function Places ({ places, onPlaceClick }) {
  return (
    <ul className={`places`}>
      {places.map(place =>
        <Place
          key={place.id}
          place={place}
          child={false}
          onPlaceClick={onPlaceClick}
        />)}
    </ul>
  )
}

export default Places