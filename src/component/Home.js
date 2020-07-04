import React, {useEffect, useState} from 'react'
import Header from "./Header";
import Formbook from "./Formbook";
import Axios from 'axios';
// import SearchBook from './SearchBook';



const Home = () => {

      // State & Setstate
const [books, setBook] = useState([])

// Search State
// const [search , setSearch] = useState('')


// Chandle our search input state change
// const chandleChange =(e)=>{
//   setSearch(e.target.value)
// }

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
.then((res)=>{
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

      {/* <SearchBook 
      search={search}
      chandleChange={chandleChange}
       /> */}

      <Formbook
        book={books} 
       deletefromDatabase={deletefromDatabase}
      //  chandleChange={chandleChange}
      //  search={search}
       />
  
 
    </div>
    )
}

export default Home
