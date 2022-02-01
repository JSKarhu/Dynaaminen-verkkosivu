import './App.css';
import { useEffect, useState } from 'react';
import Tuote from './Tuote';
import uuid from 'react-uuid'

function App() {
const [tuotteet, setTuotteet] = useState([])

useEffect(() => {
  const tuotelista = Array();
  tuotelista.push(new Tuote(1,'Kahvi',5));
  tuotelista.push(new Tuote(2,'Maito',2));
  tuotelista.push(new Tuote(3,'Keksit',3));
  setTuotteet(tuotelista);
},[])

  return (
   <div style={{margin: '30px'}}>
     <h3>Ostoslista</h3>
     <table>
       <thead>
        <tr>
         <th>Nimi</th>
         <th>Hinta</th>
        </tr>
       </thead>
       <tbody>
         {
           tuotteet.map(tuote => (
            <tr key={uuid()}>
              <td>{tuote.nimi}</td>
              <td>{tuote.hinta}</td>
            </tr>
           ))
         }
       </tbody>
     </table>
   </div>
  );
}

export default App;
