import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [valor, setValor] = useState(null)

  const eurRef = useRef();
  const resultRef = useRef();

  useEffect(() => {

    const apiKey = '235acb0c487ae67009d0cc9d'

    const callApi = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`);
        const data = await response.json();
        setValor(data.conversion_rates.USD);
      } catch {
        console.error('Error fetching data:', error);
      }
    };

    callApi();

  }, [])

  function buttonClicked() {

    const eurosValor = parseFloat(eurRef.current.value);
    const dolares = eurosValor * valor

    resultRef.current.innerHTML = dolares.toFixed(2)+"$";

  }

  return (
    <>

      <h1>Euro Dollar Conversor</h1>
      <input className='center-elements' type="number" placeholder='EUR amount' ref={eurRef} />
      <button className='center-elements'onClick={buttonClicked}>Convert EUR/USD</button>
      <h2 ref={resultRef}></h2>

    </>
  )
}

export default App
