
import './App.css';
import {useState} from 'react';

function App() {

  const [pituus, setPituus] = useState(0);
  const [paino, setPaino] = useState(9)
  const [bmi, setBmi] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    const tulos = paino / (pituus * pituus);
    setBmi(tulos);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>BMI</h3>
      <div>
      <label>Pituus</label>
      <input 
      type="number" value={pituus}
      step='0.01' onChange={e => setPituus(e.target.value)}/>
      </div>
      <div>
      <label>Paino</label>
      <input 
      type="number" value={paino}
      step='0.01' onChange={e => setPaino(e.target.value)}/>
      </div>
      <div>
        <output> {bmi.toFixed(2)} </output>
      </div>
      <button>Laske</button>
    </form>
    
  );
}

export default App;
