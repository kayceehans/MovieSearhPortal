import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import '../components/SearchBar.css'

const SearchBar = ({setResult}) => {
  const [input, setInput] = useState("");

  const fetchData  = (value) => {debugger
   
   const API_URL =  import.meta.env.VITE_URL;

   var url = API_URL + JSON.parse(JSON.stringify(value));

   fetch(url)
    .then((response) => response.json())
    .then(json => {debugger

      console.log(json);
      if(json.status){
        console.log("TRULY");
      }
      setResult(json)
    }).catch(console.error);

  }

 const handleChange = (value) =>{
    setInput(value);    
  }

  const handleSubmit = () => {
    const searchTitle = input;
    fetchData(searchTitle);
  }
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input value={input} onChange={(e) => handleChange(e.target.value) } placeholder='Enter movie title to search...'/><button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar
