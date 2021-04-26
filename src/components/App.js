import api from "../utils/api";
import { useState, useEffect } from "react";
import './App.css';
import { PlacesObjectContext } from "../contexts/PlacesObjectContext";
import Places from "./Places";
import Inventory from "./Inventory";
import Header from "./Header";


function App() {
  const [places, setPlaces] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [placesObject, setPlacesObject] = useState({});
  const [activePlace, setActivePlace] = useState('');

  function getPlacesObject () {
    const placesObject = {};
    places.forEach((place)=>{
      placesObject[place.id] = Object.assign(placesObject[place.id] || {}, place);
      placesObject[place.id].inventory = [];
      if (place.parts !== undefined) {
        place.parts.forEach(part => {
          placesObject[part] = Object.assign(placesObject[part] || {}, { parent: place.id})
        })
      }
    })

    function setChildren (place) {
      const children = [];
      let isEmpty = true;
      const addChildren = (place) => {
        if (isEmpty && inventory.some(item => item.placeId === place.id)) {
          isEmpty = false
        }
        if (place.parts !== undefined) {
          children.push(...place.parts)
          place.parts.forEach((item) => {
            addChildren(placesObject[item])
          })
        }
      }
      addChildren(place)
      placesObject[place.id].children = children;
      placesObject[place.id].isEmpty = isEmpty;
    }

    places.forEach(setChildren);
    inventory.forEach(item => {
      placesObject[item.placeId].inventory.push(item)
    })
    return placesObject;
  }
  function getData () {
    api.getPlaces().then(data => {
      setPlaces(data);
    }).then(() =>
      api.getInventory().then(data => {
        setInventory(data);
      })
    )
  }

  useEffect(() => {
    getData()
  },[])

  useEffect(() => {
    setPlacesObject(getPlacesObject);
  }, [inventory, places])

  function handlePlaceClick (placeId) {
    setActivePlace(placeId)
  }

  return (
    <PlacesObjectContext.Provider value={placesObject}>
      <div className="app">
        <Header />
        <div className="content">
          <Places
            places={places}
            onPlaceClick={handlePlaceClick}
          />
          <Inventory
            inventory={inventory}
            activePlace={activePlace}
            getData={getData}
          />
        </div>
      </div>
    </PlacesObjectContext.Provider>
  );
}

export default App;
