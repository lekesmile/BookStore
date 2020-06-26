import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Formbook from "./component/Formbook";
import Axios from 'axios';


const App = () => {

  // State & Setstate
const [books, setBook] = useState([])

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
      <div style={{display: 'flex',  width: '50%', margin:' 50px auto', justifyContent: 'space-between'}}>
      <h3 >Books Avaliable</h3>
      <input type="type" placeholder="Search ...."></input>
      </div>
      <Formbook
       book={books} 
       deletefromDatabase={deletefromDatabase}
       />
     
    
    </div>
    
  );
};

export default App;






 