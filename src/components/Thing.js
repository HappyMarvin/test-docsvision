import { useState } from "react";
import api from "../utils/api";
import "./Thing.css"

function Thing ({ thing, isRoom, getData }) {
  const [nameInput, setNameInput] = useState(thing.data.name);
  const [countInput, setCountInput] = useState(thing.data.count);
  const [saveIsActive, setSaveIsActive] = useState(false);

  function nameOnChange (e) {
    setNameInput(e.target.value)
    setSaveIsActive(e.target.value !== '' && countInput >= 1)
  }

  function countOnChange (e) {
    setCountInput(e.target.value)
    setSaveIsActive(nameInput !== '' && e.target.value >= 1)
  }

  function saveThing (e) {
    e.preventDefault();
    if (!nameInput || !countInput) return
    api.updateThing(thing.id, nameInput, countInput)
      .then(()=>{
        getData()
        setSaveIsActive(false)
      })
      .catch((err)=>{
        console.error(err.message)
      })
  }

  function deleteThing () {
    api.delThing(thing.id)
      .then(getData)
      .catch((err)=>{
        console.error(err.message)
      })
  }

  return (
    <li className={`thing`}>
      {isRoom ?
      <form className={`thing__form`} onSubmit={saveThing}>
        <input
          type={`text`}
          value={nameInput}
          onChange={nameOnChange}
          className={`thing__name-input`}
        />
        <input
          type={`number`}
          value={countInput}
          onChange={countOnChange}
          className={`thing__count-input`}
          min={1}
        />
        <button className={`thing__save ${saveIsActive && 'thing__save_active'}`}
                type={`submit`}
        >&#10004;</button>
        <button className="thing__del" onClick={deleteThing} type={`button`}>&#10008;</button>
      </form> :
        <div className={`thing__item`}>
          <p className="thing__name">{thing.data.name}</p>
          <p className="thing__count">{thing.data.count}</p>
        </div>
      }

    </li>
  )
}

export default Thing