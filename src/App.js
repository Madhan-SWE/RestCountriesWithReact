import {useState, useEffect} from 'react';
import Header from './Header.js';
import Cards from './Cards.js';
import Search from './Search.js';

function App() {

  const [countries, setCountries] = useState([]);
  var [countriesAll, setCountriesAll] = useState([]);

  const changeOnSearch = (searchText) => {
    
    
    let res = countries.filter((country)=> {
      return JSON.stringify(country).toLowerCase().includes(searchText.toLowerCase())
    })
    setCountriesAll(res)
    console.log(res);
  }

  function doFetch() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then((res) => {
            setCountries(res);
            setCountriesAll(res);
            console.log(res);
        });
  }
  
  useEffect(doFetch, []);

  return (
    <div className="App">
       <Header name="Madhankumar" />
      <h1>Hello world !123</h1>
      <Search searchFn={changeOnSearch} />
      <Cards countries={countriesAll}/>
    </div>
  );
}

export default App;
