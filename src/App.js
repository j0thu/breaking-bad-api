import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]); //setItems is a function 
  const [isLoading, setIsLoading] = useState(true);  //After the data is loaded we set it to false
  const [query, setQuery] = useState('');

  useEffect(()=>{
    const fetchItmes = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data);
      
      setItems(result.data); //Loading the data from the api into the items
      setIsLoading(false);   //The data is now loaded, now it can be set to false
    }
    fetchItmes(); //Calling the async function under useEffect

  }, [query]); //Whenever this value is changed the useEffect will fire off again 


  
   return (
    <div className="container">
       <Header />
       <Search getQuery={(q)=>setQuery(q)} />  
       <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
 