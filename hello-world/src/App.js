import './App.css';
import { useState } from 'react';

function App() {
  const [eurot, setEurot] = useState(0);
  const [punnat, setPunnat] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const tulos = eurot * 0.84;
    setPunnat(tulos);
  }

  return (
      <form onSubmit={calculate}>
        <h3>Valuuttalaskuri</h3>
        <div>
          <label>Eurot</label>
          <input 
          type='number' 
          value={eurot}
          onChange={e => setEurot(e.target.value)}
          />
        </div>
        <div>
          <label>Punnat</label>
          <output> {punnat.toFixed(2)} </output>
        </div>
        <button>Laske</button>
      </form>
  );
}

export default App;
