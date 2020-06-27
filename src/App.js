import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Formbook from "./component/Formbook";
import Axios from 'axios';
import SearchBook from './component/SearchBook';

const App = () => {

  // State & Setstate
const [books, setBook] = useState([])

    // Search State
const [search , setSearch] = useState('')
    

 // Chandle our search input state change
    const chandleChange =(e)=>{
      setSearch(e.target.value)
    }

// Get data to fill table
const getDataFromBackend =()=>{
  Axios.get('http://localhost:5000')
  .then((res)=>{
    console.log(res.data)
    setBook(res.data)
   
  }).catch((e)=>{
      console.log(e)
  })
}

// On page load
useEffect(()=>{
   getDataFromBackend()
},[])


// Delete Post

const deletefromDatabase =(id)=>{
  Axios.delete(`http://localhost:5000/${id}`)
  .then(()=>{
    console.log('delete' + id)
    window.location.reload()
   
  })
  .catch((e)=>{
    console.log(e)
})
}


 
  return (
    <div>
      <Header />

      <SearchBook 
      search={search}
      chandleChange={chandleChange}
       />

      <Formbook
       book={books} 
       deletefromDatabase={deletefromDatabase}
       search={search}
       chandleChange={chandleChange}
 
       />
     
    
    </div>
    
  );
};

export default App;






 