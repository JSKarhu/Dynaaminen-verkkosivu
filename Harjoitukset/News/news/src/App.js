import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Details from './Details';

const URL = 'https://newsapi.org/v2';
const APIKEY = '52171688d5f64aecaff4319cab6280bc'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const criteria = 'top-headlines?country=us&category=business';
    const address = URL + '/' + criteria + '&apikey=' + APIKEY;
    
    axios.get(address)
    .then((response) => {
      console.log(response.data);
      setItems(response.data.articles);
      setIsLoaded(true)
    }).catch(error => {
      alert(error);
    });

  }, []);

  function close() {
    setSelectedItem(null);
  }

if (selectedItem !=null) {
  return <Details
  title={selectedItem.title}
  image={selectedItem.urlToImage}
  description={selectedItem.description}
  close={close}
  />
}
  else if (error) {
    return <p>{error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {
  return (
    <div>
      <h1>Top Business Headlines</h1>
      <div>
        {
          items.map(item => (
            <div key={item.title} onClick={e => setSelectedItem(item)}>
              <h3>{item.title}</h3>
              <img src={item.urlToImage} />
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
}
export default App;
