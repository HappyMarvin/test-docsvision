import { useContext } from "react";
import { PlacesObjectContext } from "../contexts/PlacesObjectContext";
import './Place.css'

function Place ({ place, child, onPlaceClick }) {
  const placesObject = useContext(PlacesObjectContext)
  if (place === undefined || placesObject[place.id] === undefined) return ''
  if (!child && placesObject[place.id].parent !== undefined) return ''
  return (
          <li key={place.id} className={`place`}>
            <p onClick={onPlaceClick.bind(null, place.id)} className={`place__name${placesObject[place.id].isEmpty ? ' place__name_empty' : ''}`}>{place.data.name}</p>
            {(place.parts) ? <ul className={`place__list`}>
              {place.parts.map(item =>
                <Place
                  key={placesObject[item].id}
                  place={placesObject[item]}
                  child={true}
                  onPlaceClick={onPlaceClick}
                />
            )}</ul> : ''}
          </li>
  )
}

export default Place