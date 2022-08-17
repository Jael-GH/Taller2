import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [celk, setCelK] = useState(0);
  const [celf, setCelF] = useState(0);
  const [kelc, setKelC] = useState(0);
  const [kelf, setKelF] = useState(0);
  const [fahC, setFahC] = useState(0);
  const [fahk, setfahK] = useState(0);
  
  const[tipo, setTipo] = useState(0);
  const[total, setTotal]= useState(0);

  useEffect(()=> {

   setCelK(tipo + 273.15); //Convertir de celcius a kelvin
   setCelF((tipo* (9/5))+ 32); //Convertir de celcius a fahrenheit
   setKelC(tipo - 273.15); //Convertir de kelvin a celcius
   setKelF((tipo - 273.15)*(9/5) + 32); //Convertir de kelvin a fahrenheit
   setFahC((tipo- 32)*(5/9)); //Convertir de fahrenheit a celcius
   setfahK((tipo - 32)*(5/9)+273.15); //Convertir de Fahrenheit a kelvin
  }, [total, tipo]);

  const handleTotalChange = e =>
  {
    if(!isNaN(e.target.value)){
      setTotal(e.target.value);
    }
  };

  return(
    <div className='App'>
      <h1 className='ColorTexto'> CONVERTIDOR DE UNIDADES </h1>

      <div class='TextoCentral'>
      <p>Celcius-Kelvin: {celk}</p>
      <p>Celcius-Fahrenheit: {celf}</p>
      <p>Kelvin-Celcius: {kelc}</p>
      <p>Kelvin-Fahrenheit: {kelf}</p>
      <p>Fahrenheit-Celcius: {fahC}</p>
      <p>Fahrenheit-Kelvin: {fahk}</p>
      </div>
      
      <hr/>

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option>Celcius-Kelvin</option>
        <option>Celcius-Fahrenheit</option>
        <option>Kelvin-Celcius</option>
        <option>Kelvin-Fahrenheit</option>
        <option>Fahrenheit-Celcius</option>
        <option>Fahrenheit-Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={total}/>
    </div>
  )

}

export default App;
