import './App.css';
import {useState} from 'react';

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);


function handleSubmit(e) {
  e.preventDefault();
  const conversion = eur * 0.9;
  setGbp(conversion);
}

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label>EUR</label>
      <input type="number" value={eur} onChange={e => setEur(e.target.value)} />
    </div>
    <div>
      <label>GBP</label>
      <output>{gbp}</output>
    </div>
    <button>Calculate</button>
  </form>
);
}

export default App;
