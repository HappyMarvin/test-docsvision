import Thing from "./Thing";
import {useContext, useState} from "react";
import { PlacesObjectContext } from "../contexts/PlacesObjectContext";
import api from "../utils/api";
import "./Inventory.css";

function Inventory ({ inventory, activePlace, getData}) {
  const placesObject = useContext(PlacesObjectContext)
  const [nameInput, setNameInput] = useState('');
  const [countInput, setCountInput] = useState('1');
  const isRoom = placesObject[activePlace] !== undefined && placesObject[activePlace].children.length === 0
  const [addIsActive, setAddIsActive] = useState(false);

  function nameOnChange (e) {
    setNameInput(e.target.value)
    setAddIsActive(e.target.value !== '' && countInput >= 1)
  }

  function countOnChange (e) {
    setCountInput(e.target.value)
    setAddIsActive(nameInput !== '' && e.target.value >= 1)
  }

  function addThing (e) {
    e.preventDefault()
    if (!nameInput || !countInput) return
    api.addThing(activePlace, nameInput, countInput)
      .then(()=>{
        getData();
        setAddIsActive(false);
        setNameInput('');
        setCountInput('1');
      })
      .catch((err)=>{
        console.error(err.message)
      })
  }

  return (
    <div className={`inventory`}>
      <h2 className="inventory__place">
        {placesObject[activePlace] !== undefined ?
          placesObject[activePlace].data.name :
          'Нажмите на локацию слева' }
      </h2>
      <ul className={`inventory__list`}>
        {inventory.map(thing => thing.placeId === activePlace ||
        (placesObject[activePlace] !== undefined && placesObject[activePlace].children.includes(thing.placeId))
          ? <Thing thing={thing} key={thing.id} isRoom={isRoom} getData={getData}/> : '')}
      </ul>
      {isRoom ?
        <>
          <p className="inventory__add-title">Добавить инвентарь:</p>
          <form className={`inventory__add`} onSubmit={addThing}>
            <input
              type={`text`}
              value={nameInput}
              onChange={nameOnChange}
              className={`inventory__name-input`}
            />
            <input
              type={`number`}
              value={countInput}
              onChange={countOnChange}
              className={`inventory__count-input`}
              min={1}
            />
            <button
              className={`inventory__add-button ${addIsActive && 'inventory__add-button_active'}`}
              type={`submit`}
            >&#10004;</button>
          </form>
        </> : ''
      }
    </div>
  )
}

export default Inventory