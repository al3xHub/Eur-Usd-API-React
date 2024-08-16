import React, { useState } from 'react'
import './App.css'

function App() {

  const [resultado, setResultado] = useState(null)

  function buttonClicked() {

    const euro = document.querySelector("input").value;
    const resultado = euro * 1.08;

    setResultado(resultado);

  }

  return (
    <>

      <h1>Euro Dollar Conversor</h1>
      <input className='center-elements' type="number" placeholder='EUR amount' />
      <button className='center-elements' onClick={buttonClicked}>Convert EUR/USD</button>
      <h2>{resultado != null ? resultado + "$" : ""}</h2>

    </>
  )
}

export default App
